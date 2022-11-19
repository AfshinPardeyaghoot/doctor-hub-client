import axios from "axios";
import {useState} from "react";
import {data} from "autoprefixer";
import {compareArraysAsSet} from "@testing-library/jest-dom/dist/utils";

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
            let result = await apiInstance.request(newParams ?? axiosParams);
            setResponse({data: result.data, loading: false, error: null});
            return result.data
        } catch (e) {
            let message = e.response.data.status.message ? e.response.data.status.message : 'خطا در برقراری ارتباط با سرور';
            setResponse({data: null, loading: false, error: message});
            return Promise.reject(message)
        }
    };
    return [sendRequest, response, setResponse];
};

export default useRequest;