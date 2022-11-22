import React, {useState} from "react";
import "react-phone-number-input/style.css";
import logo from "../../../static/logo/doctor_hub.png";
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
        <div>
            <Navbar></Navbar>
            <div className="loginPage text-red-900">
                <div className="loginForm">
                    <img className="loginFormLogo" src={logo} alt="DOCTOR HUB"></img>
                    <label className="text-gray-600 font-semibold text-sm font-cambria">به دکتر هاب خوش آمدید</label>
                    <label className="phoneLabel font-light pb-8">شماره تلفن همراه خود را برای دریافت کد تائید وارد
                        کنید</label>

                    <div className="m-1.5 h-1 font-extralight text-xs text-red-400 phoneError">
                        {hasError &&
                            <span>شماره همراه وارد شده معتبر
                                نمی باشد!</span>
                        }
                    </div>

                    <input
                        className="phoneInput text-slate-600"
                        placeholder="شماره همراه با 09"
                        type="text"
                        onChange={(e) => handlePhoneChange(e.target.value)}
                        autoFocus={true}
                    ></input>
                    <button className="submitButton" onClick={() => handleSubmit()}>
                        تایید شماره همراه
                    </button>
                    <ToastContainer className="toast"/>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
