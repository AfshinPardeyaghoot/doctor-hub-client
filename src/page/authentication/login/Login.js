import React, {useState} from "react";
import "react-phone-number-input/style.css";
import logo from "../../../static/logo/doctor-hub-green.png";
import "./Login.css";
import {useNavigate} from "react-router-dom";
import useRequest from "../../../hook/useRequest";
import Navbar from "../../navbar/Navbar";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ApiRoutes from "../../../config/ApiRoutes";

function LoginPage() {


    const navigate = useNavigate();
    const [phone, setPhone] = useState(null);
    const [isPhoneValid, setIsPhoneValid] = useState(false);
    const [hasError, setHasError] = useState(false);

    const [sendVerificationCodeRequest, sendVerificationCodeRequestRes] = useRequest();

    const handlePhoneChange = (inputPhone) => {
        setHasError(false)
        setPhone(inputPhone)
        let numberRex = /^\d+$/;

        if (
            inputPhone.startsWith('09')
            && inputPhone.match(numberRex)
            && inputPhone.length === 11
        ) {
            setIsPhoneValid(true);
        } else {
            setIsPhoneValid(false);
        }
    }

    const handleSubmit = () => {
        if (!isPhoneValid)
            setHasError(true)
        else {
            sendVerificationCodeRequest({
                url: ApiRoutes.SEND_OTP_SMS_URL,
                method: "POST",
                data: {
                    phone: phone
                }
            }).then(res => {
                console.log(sendVerificationCodeRequestRes.error)
                navigate("/confirmLogin", {
                    state: {
                        phone
                    }
                })
            }).catch(error => {
                toast.error("مشکلی در ارسال پیامک بوجود آمده است!", {
                    position: "bottom-center",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                    theme: "light",
                })
            })

        }
    }

    return (
        <div className="relative bg-white h-full items-center flex flex-col md:bg-gray-100">
            <div
                className="flex justify-center bg-white max-w-screen-sm md:shadow relative  w-screen flex-col text-red-900 items-center content-center">
                <div className="relative bg-[rgb(76,228,130)] w-full h-20 flex justify-center rounded-b-3xl">
                    <img className="relative h-16 w-16 top-2 flex items-center content-center" src={logo}
                         alt="DOCTOR HUB"></img>
                </div>
                <div className="relative flex  h-[85vh] md:h-[91vh]  w-5/6 content-center items-center">
                    <div className="relative w-screen h-full flex items-center flex-col">
                        <label className="text-gray-700 relative top-14 md:top-40 font-semibold text-l font-cambria">به
                            دکتر هاب
                            خوش
                            آمدید</label>
                        <label
                            className="text-gray-600 relative top-16 md:top-44 text-m font-light py-4 w-36 md:w-full">شماره
                            تلفن همراه
                            خود را برای دریافت کد
                            تائید وارد
                            کنید</label>

                        <div
                            className="phoneError text-red-500 py-1 relative top-20 md:top-56 h-10 text-m font-light pb-8">
                            {hasError &&
                                <span>شماره همراه وارد شده معتبر
                                نمی باشد!</span>
                            }
                        </div>

                        <input
                            className="relative bg-gray-100 border-double border-gray-200 border-2 top-20 md:top-56 w-4/5 h-16 border-solid text-center rounded border-gray-400 text-slate-600"
                            placeholder="شماره همراه با 09"
                            type="text"
                            onChange={(e) => handlePhoneChange(e.target.value)}
                            autoFocus={true}
                        ></input>
                        <button
                            className="relative mb-10 bg-green-400 text-white m-4 top-20 md:top-56 w-4/5 h-16 border-double border-green-400 border-2  hover:border-2  hover:border-double hover:border-white text-center rounded text-slate-600"
                            onClick={() => handleSubmit()}>
                            تایید شماره همراه
                        </button>
                        <ToastContainer className="toast bg-white"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
