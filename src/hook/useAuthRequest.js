import {useState} from "react";
import axios from "axios";
import ApiRoutes from '../config/ApiRoutes'
import useRefreshAccessToken from "../method/useRefreshAccessToken";


const apiInstance = axios.create({
    baseURL: ApiRoutes.BASE_URL
});


apiInstance.interceptors.request.use(
    (req) => {
        const {accessTokenExpireAt} = localStorage.getItem("accessTokenExpireAt")
        console.log('Access token'+accessTokenExpireAt)
        if (accessTokenExpireAt < new Date()) {
            const {isSuccess} = useRefreshAccessToken();
            console.log("is success : " + isSuccess)
        }
        const {access_token} = localStorage.get("accessToken");
        console.log("Access token is : " + access_token)
        req.headers = {
            Authorization: `Bearer ${access_token}`,
            'Accept-Language': 'fa'
        };
        return req;
    },
    (err) => {
        return Promise.reject(err);
    }
);

apiInstance.interceptors.response.use(res => {
    if (res.status === 403) {

    } else if (res.status === 401) {

    }
})

const useAuthRequest = (axiosParams) => {
    const [response, setResponse] = useState({
        data: null,
        loading: false,
        error: null,
    });

    const sendRequest = async (newParams) => {
            try {
                console.log("here mmm")
                setResponse({data: null, loading: true, error: null})
                const result = await apiInstance.request(newParams ?? axiosParams);
                setResponse({data: result.data, loading: false, error: null});
                return result.data
            } catch (e) {
                let message = e.response.data.status.message ? e.response.data.status.message : 'خطا در برقراری ارتباط با سرور';
                setResponse({data: null, loading: false, error: message});
                return Promise.reject(message)
            }
        }
    ;
    return [sendRequest, response, setResponse];
};

export default useAuthRequest;