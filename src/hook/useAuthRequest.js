import {useState} from "react";
import axios from "axios";
import ApiRoutes from '../config/ApiRoutes'
import useRefreshAccessToken from "../method/useRefreshAccessToken";


const apiInstance = axios.create({
    baseURL: ApiRoutes.BASE_URL
});


apiInstance.interceptors.request.use(
    (req) => {
        // const [refreshAccessReq, isSuccess] = useRefreshAccessToken();
        const accessTokenExpireAt = localStorage.getItem("accessTokenExpireAt")
        console.log('access expired at : ' + accessTokenExpireAt)
        const isTokenNotExpired = (accessTokenExpireAt > new Date());
        console.log('Is token not expired : ' + isTokenNotExpired)
        // if (isTokenNotExpired) {
        //     console.log('in this fucking place !')
        //     refreshAccessReq()
        //     console.log("is success : " + isSuccess)
        // }
        const accessToken = localStorage.getItem("accessToken")
        console.log('Access token : ' + accessToken)
        req.headers = {
            Authorization: `Bearer ${accessToken}`
        };
        return req;
    },
    (err) => {
        return Promise.reject(err);
    }
);

apiInstance.interceptors.response.use(res => {
    console.log('response is : ' + JSON.stringify(res))
    if (res.status === 403) {
        console.log('need to refresh token')
    } else if (res.status === 401) {

    }
})

const useAuthRequest = (axiosParams) => {
    const [response, setResponse] = useState({
        data: null,
        loading: false,
        error: null,
    });

    const [refreshAccessToken, isSuccess] = useRefreshAccessToken();

    const sendRequest = async (newParams) => {
            try {
                setResponse({data: null, loading: true, error: null})
                const result = await apiInstance.request(newParams ?? axiosParams);
                setResponse({data: result.data, loading: false, error: null});
                return result.data
            } catch (e) {
                console.log('json : '+JSON.stringify(e))
                if (e.response.data.status.code ===403){
                    console.log(1)
                   refreshAccessToken()
                    console.log(isSuccess)
                }
                let message = e.response.data.status.message ? e.response.data.status.message : 'خطا در برقراری ارتباط با سرور';
                setResponse({data: null, loading: false, error: message});
                return Promise.reject(message)
            }
        }
    ;
    return [sendRequest, response, setResponse];
};

export default useAuthRequest;