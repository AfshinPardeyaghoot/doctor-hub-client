import OTPInput, {ResendOTP} from "otp-input-react";
import "./ConfirmLogin.css"
import React, {useState} from "react";
import logo from "../../../static/logo/doctor_hub.png";
import useRequest from "../../../hook/useRequest";
import {useLocation} from "react-router-dom";
import Navbar from "../../navbar/component/Navbar";
import {toast, ToastContainer} from "react-toastify";
import ApiRoutes from "../../../config/ApiRoutes";
import saveAuthenticationTokens from "../../../method/saveAuthenticationTokens";


function ConfirmLogin() {

    const {state} = useLocation();
    const {phone} = state;
    const [otp, setOtp] = useState(null);
    const [isOtpValid, setIsOtpValid] = useState(true);
    const [resendOtp, setResendOtp] = useState(false);
    const [sendOtpRequest, {data, loading, error}] = useRequest();


    const handleOtpChange = (inputCode) => {
        setIsOtpValid(true)
        setOtp(inputCode);
    }

    const renderTime = (remainingTime) => {
        return !resendOtp && <span className="resendOtpTimer"> {remainingTime} تا ارسال مجدد کد</span>;
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
        <Navbar></Navbar>
        <div className="confirmLoginPage">
            <div className="confirmLoginContainer">
                <img className="loginFormLogo" src={logo} alt="DOCTOR HUB"></img>
                <label className="text-gray-600 font-semibold text-sm font-cambria">به دکتر هاب خوش آمدید</label>
                <label className="phoneLabel font-light pb-8">ثبت کد تایید ۶ رقمی ارسال شده</label>
                <div className="m-4 h-1 font-extralight text-xs text-red-400 phoneError">
                    {!isOtpValid &&
                        <span>شماره همراه وارد شده معتبر
                                نمی باشد!</span>
                    }
                </div>
                <OTPInput className="otpInput space-x-0 m-0 p-0" value={otp}
                          onChange={handleOtpChange} autoFocus OTPLength={6}
                          inputClassName="otpInnerInput"
                          otpType="number" disabled={false}
                          secure/>
                <button className="confirmButton" onClick={() => sendCode()}>تایید کد ورود</button>
                {!resendOtp && <ResendOTP className="resendButton"
                                          renderButton={renderButton}
                                          renderTime={renderTime}
                                          onTimerComplete={onTimeComplete}
                                          onResendClick={() => console.log("Resend clicked")}/>}
                {
                    resendOtp && <button className="resendOtpButton" onClick={sendOtp}> ارسال مجدد کد</button>
                }
            </div>
            <ToastContainer className="toast"/>
        </div>
    </div>)

}

export default ConfirmLogin;