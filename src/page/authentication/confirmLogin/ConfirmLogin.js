import OTPInput, {ResendOTP} from "otp-input-react";
import "./ConfirmLogin.css"
import React, {useState} from "react";
import logo from "../../../static/logo/doctor-hub-green.png";
import useRequest from "../../../hook/useRequest";
import {useLocation, useNavigate} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import ApiRoutes from "../../../config/ApiRoutes";
import saveAuthenticationTokens from "../../../method/saveAuthenticationTokens";
import backgroundLogo from "../../../static/logo/doctor-hub-background2.png";


function ConfirmLogin() {

    const {state} = useLocation();
    const {phone, doctor} = state;
    const [otp, setOtp] = useState(null);
    const [isOtpValid, setIsOtpValid] = useState(true);
    const [resendOtp, setResendOtp] = useState(false);
    const navigate = useNavigate();
    const [sendOtpRequest, {data, loading, error}] = useRequest();


    const handleOtpChange = (inputCode) => {
        setIsOtpValid(true)
        setOtp(inputCode);
    }

    const renderTime = (remainingTime) => {
        return !resendOtp && <span className="relative w-full text-center"> {remainingTime} تا ارسال مجدد کد</span>;
    };

    const renderButton = () => {
    }


    const sendCode = () => {
        if (otp.toString().length !== 6) {
            setIsOtpValid(false)
        } else {
            sendOtpRequest({
                url: ApiRoutes.CONFIRM_OTP_URL,
                method: "POST",
                data: {
                    phone: phone,
                    code: otp
                }

            }).then(res => {
                const {accessToken, accessTokenExpireAt, refreshToken, refreshTokenExpireAt} = res.data;
                saveAuthenticationTokens(accessToken, accessTokenExpireAt, refreshToken, refreshTokenExpireAt)
                if (doctor) {
                    const {doctorId} = doctor;
                    navigate("/doctor", {
                        state: {
                            doctorId
                        }
                    })
                } else {
                    navigate("/")
                }

            }).catch(e => {

                toast.error(error, {
                    position: "bottom-center",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    rtl: true,
                    draggable: false,
                    progress: undefined,
                    theme: "light",
                })
            })
        }
    }

    const sendOtp = () => {
        setResendOtp(false);
    }

    const onTimeComplete = () => {
        setResendOtp(true);
    }

    return (<div>
        <div className="relative bg-white items-center flex flex-col xl:flex-row xl:bg-[rgb(76,228,130)]">
            <div
                className="flex xl:left-0 justify-center bg-white max-w-screen-sm relative  w-screen flex-col text-red-900 items-center content-center">
                <div
                    className="relative bg-[rgb(76,228,130)] xl:hidden w-full h-20 flex justify-center rounded-b-3xl xl:rounded-b-none">
                    <img className="relative h-16 w-16 top-2 flex items-center content-center" src={logo}
                         alt="DOCTOR HUB"></img>
                </div>
                <div className="relative flex flex-col h-[88vh] xl:h-[100vh] w-5/6 content-center items-center">
                    <label
                        className="text-gray-700 relative top-[10vh] xl:top-40 font-semibold text-right w-full text-l font-cambria">به
                        دکتر هاب
                        خوش
                        آمدید</label>
                    <label
                        className="text-gray-600 relative top-[13.5vh] xl:top-44 text-s font-light py-4 w-full text-right xl:w-full">ثبت
                        کد تایید ۶ رقمی ارسال شده</label>
                    <div className="m-4 h-1 font-extralight text-xs text-red-400 phoneError">
                        {!isOtpValid &&
                            <span>شماره همراه وارد شده معتبر
                                نمی باشد!</span>
                        }
                    </div>
                    <OTPInput
                        className="justify-center relative top-[24vh] xl:top-52 w-full h-14 border-solid text-center rounded border-gray-400 text-slate-600"
                        value={otp}
                        onChange={handleOtpChange} autoFocus OTPLength={6}
                        inputClassName="otpInnerInput"
                        otpType="number" disabled={false}
                        secure/>
                    <button
                        className="relative mb-10 bg-green-400 text-white m-4 top-[25vh] xl:top-56 w-full h-14 border-double border-green-400 border-2  hover:border-2  hover:border-double hover:border-white text-center rounded text-slate-600"
                        onClick={() => sendCode()}>تایید کد ورود
                    </button>
                    {!resendOtp && <ResendOTP
                        className="text-gray-500 relative py-2 flex justify-center top-[20.5vh] xl:top-44 text-s font-light py-4 w-full text-right xl:w-full"
                        renderButton={renderButton}
                        renderTime={renderTime}
                        onTimerComplete={onTimeComplete}
                        onResendClick={() => console.log("Resend clicked")}/>}
                    {
                        resendOtp && <button
                            className="text-gray-500 py-2 relative flex justify-center top-[20.5vh] xl:top-44 text-s font-light py-4 w-full text-right xl:w-full"
                            onClick={sendOtp}> ارسال مجدد کد</button>
                    }
                </div>
                <ToastContainer className="toast"/>
            </div>
            <div
                className="bg-[rgb(76,228,130)] invisible relative flex content-center h-0 w-0 justify-center items-center xl:h-screen xl:w-screen xl:visible">
                <img src={backgroundLogo} className="relative invisible xl:visible xl:h-3/5 xl:w-3/5" alt=""/>
            </div>
        </div>
    </div>)

}

export default ConfirmLogin;