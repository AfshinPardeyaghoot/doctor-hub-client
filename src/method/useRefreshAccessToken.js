import {useState} from "react";
import useRequest from "../hook/useRequest";
import ApiRoutes from "../config/ApiRoutes";
import saveAuthenticationTokens from "./saveAuthenticationTokens";

const useRefreshAccessToken = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const refreshTokenExpiredAt = localStorage.getItem("refreshTokenExpireAt")
    const refreshToken = localStorage.getItem("refreshToken")
    const [sendRefreshRequest] = useRequest()

    const refreshAccessToken = () => {
        if (new Date(+refreshTokenExpiredAt) > new Date()) {
            sendRefreshRequest({
                url: ApiRoutes.REFRESH_ACCESS_TOKEN_URL + refreshToken,
                method: "GET"
            }).then(res => {
                const {accessToken, accessTokenExpireAt, refreshToken, refreshTokenExpireAt} = res.data;
                console.log('new access token : ' + accessToken)
                console.log('new refresh token : ' + refreshToken)
                saveAuthenticationTokens(accessToken, accessTokenExpireAt, refreshToken, refreshTokenExpireAt)
                setIsSuccess(true)
            }).catch(e => {
                setIsSuccess(false);
            })
        } else {
            setIsSuccess(false);
        }
    }

    return [refreshAccessToken, isSuccess]


}

export default useRefreshAccessToken;