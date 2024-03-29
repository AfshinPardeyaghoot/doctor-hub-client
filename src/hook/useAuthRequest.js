import {useState} from "react";
import axios from "axios";
import ApiRoutes from '../config/ApiRoutes'
import saveAuthenticationTokens from "../method/saveAuthenticationTokens";


const apiInstance = axios.create({
    baseURL: ApiRoutes.BASE_URL
});


apiInstance.interceptors.request.use(
    async (req) => {

        const accessTokenExpireAt = localStorage.getItem('accessTokenExpireAt')
        const accessTokenExpireDate = new Date(+accessTokenExpireAt);
        const refreshTokenExpiredAt = localStorage.getItem("refreshTokenExpireAt")
        const refreshTokenExpireDate = new Date(+refreshTokenExpiredAt);
        if ((accessTokenExpireDate < new Date) && (refreshTokenExpireDate > new Date())) {
            const oldRefreshToken = localStorage.getItem("refreshToken")

            const response = await axios.get(
                ApiRoutes.BASE_URL + ApiRoutes.REFRESH_ACCESS_TOKEN_URL + oldRefreshToken
            );
            const {id, token} = response.data;
            const {accessToken, accessTokenExpireAt, refreshToken, refreshTokenExpireAt} = token;
            saveAuthenticationTokens(id, accessToken, accessTokenExpireAt, refreshToken, refreshTokenExpireAt)
        }
        const accessToken = localStorage.getItem('accessToken')

        req.headers = {
            Authorization: `Bearer ${accessToken}`
        };
        return req;
    },
    (err) => {
        return Promise.reject(err);
    }
);

const useAuthRequest = (axiosParams) => {
    const [response, setResponse] = useState({
        data: null,
        loading: false,
        error: null
    });

    const sendRequest = async (newParams) => {
            try {
                setResponse({data: null, loading: true, error: null})
                const result = await apiInstance.request(newParams ?? axiosParams);
                setResponse({data: result.data, loading: false, error: null});
                return result.data
            } catch (e) {
                let message = e.response.data.status.message ? e.response.data.status.message : 'خطا در برقراری ارتباط با سرور';
                let code = e.response.data.status.code ? e.response.data.status.code : 500;
                setResponse({
                    data: null,
                    loading: false,
                    error: message
                });
                return Promise.reject({message, code})
            }
        }
    ;
    return [sendRequest, response, setResponse];
};

export default useAuthRequest;