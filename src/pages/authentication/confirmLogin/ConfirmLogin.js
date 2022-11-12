import OTPInput, {ResendOTP} from "otp-input-react";
import "./ConfirmLogin.css"
import React, {useState} from "react";
import logo from "../../../static/logo/doctor_hub.png";


function ConfirmLogin() {

    const [otp, setOtp] = useState(null);
    const [resendOtp, setResendOtp] = useState(false);


    const renderTime = (remainingTime) => {
        return !resendOtp && <span className="resendOtpTimer"> {remainingTime} تا ارسال مجدد کد</span>;
    };

    const renderButton = () => {
    }

    const sendOtp = () => {
        setResendOtp(false);
    }

    const onTimeComplete = () => {
        console.log("time completed!!")
        setResendOtp(true);
    }

    return (<div>
        <div className="confirmLoginPage">
            <div className="confirmLoginContainer">
                <img className="loginFormLogo" src={logo} alt="DOCTOR HUB"></img>
                <label className="text-gray-600 font-semibold text-sm font-cambria">به دکتر هاب خوش آمدید</label>
                <label className="phoneLabel font-light pb-8">ثبت کد تایید ۶ رقمی ارسال شده</label>
                <OTPInput className="otpInput space-x-0 m-0 p-0" value={otp} onChange={setOtp} autoFocus OTPLength={6}
                          inputClassName="otpInnerInput"
                          otpType="number" disabled={false}
                          secure/>
                <button className="confirmButton">تایید کد ورود</button>
                {!resendOtp && <ResendOTP className="resendButton"
                                          renderButton={renderButton}
                                          renderTime={renderTime}
                                          onTimerComplete={onTimeComplete}
                                          onResendClick={() => console.log("Resend clicked")}/>}
                {
                    resendOtp && <button className="resendOtpButton" onClick={sendOtp}> ارسال مجدد کد</button>
                }
            </div>
        </div>
    </div>)

}

export default ConfirmLogin;