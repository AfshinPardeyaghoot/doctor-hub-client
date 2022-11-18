import axios from "axios";
import {useState} from "react";

const apiInstance = axios.create({
    baseURL: "http://localhost:9000"
});

const useRequest = (axiosParams) => {

    const [response, setResponse] = useState({
        data: null, loading: false, error: null,
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
    };
    return [sendRequest, response, setResponse];
};

export default useRequest;