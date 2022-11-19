import {useState} from "react";
import useRequest from "../hook/useRequest";
import ApiRoutes from "../config/ApiRoutes";
import saveAuthenticationTokens from "./saveAuthenticationTokens";

const useRefreshAccessToken = () => {
    const [isSuccess, setIsSuccess] = useState(true);
    const {refreshTokenExpiredAt} = localStorage.getItem("refreshTokenExpireAt")
    const {refreshToken} = localStorage.getItem("refreshToken")
    const [sendRefreshRequest] = useRequest()

    if (refreshTokenExpiredAt < new Date()) {
        sendRefreshRequest({
            url: ApiRoutes.REFRESH_ACCESS_TOKEN_URL + refreshToken,
            method: "GET"
        }).then(res => {
            const {accessToken, accessTokenExpireAt, refreshToken, refreshTokenExpireAt} = res.data;
            saveAuthenticationTokens(accessToken, accessTokenExpireAt, refreshToken, refreshTokenExpireAt)
            setIsSuccess(true)
            return {isSuccess}
        }).catch(e => {
            setIsSuccess(false);
            return {isSuccess};
        })
    } else {
        setIsSuccess(false);
        return {isSuccess};
    }

}

export default useRefreshAccessToken;