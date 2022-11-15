import {useState} from "react";
import axios, {AxiosRequestConfig} from "axios";
import LocalStorage from "../utils/localStorage";
import {localStorageKeys} from "../enums/localStorageKeys";

const apiInstance = axios.create({
    baseURL: "http://localhost:9000"
});

apiInstance.interceptors.request.use(
    (req) => {
        const {access_token} = LocalStorage.get(localStorageKeys.USERTOKEN);
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

const useAuthRequest = (axiosParams) => {
    const [response, setResponse] = useState({
        data: null,
        loading: false,
        error: null,
    });

    const sendRequest = async (newParams) => {
            try {
                setResponse({data: null, loading: true, error: null})
                const result = await apiInstance.request(newParams ?? axiosParams);
                setResponse({data: result.data, loading: false, error: null});
                return result.data
            } catch (e) {
                let message = e.response?.data?.message ? e.response.data.message : e.response?.data
                setResponse({data: null, loading: false, error: message});
                return Promise.reject(message)
            }
        }
    ;
    return [sendRequest, response, setResponse];
};

export default useAuthRequest;