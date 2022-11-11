import OTPInput, {ResendOTP} from "otp-input-react";
import "./ConfirmLogin.css"
import {useState} from "react";


function ConfirmLogin() {

    const [otp, setOtp] = useState(null);

    return (<div>
        <div className="confirmLoginPage">
            <div className="confirmLoginContainer">
                <OTPInput className="otpInput" value={otp} onChange={setOtp} autoFocus OTPLength={6}
                          otpType="number" disabled={false}
                          secure/>
                <ResendOTP onResendClick={() => console.log("Resend clicked")}/>
            </div>
        </div>
    </div>)

}

export default ConfirmLogin;