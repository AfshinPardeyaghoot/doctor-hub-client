import React, {useState} from "react";
import "react-phone-number-input/style.css";
import logo from "../../../../static/logo/doctor_hub.png";
import "../style/Login.css";
import {useNavigate} from "react-router-dom";
import {Axios} from "axios";

function LoginPage() {

    const baseUrl = "http://localhost:";
    const navigate = useNavigate();
    const [phone, setPhone] = useState(null);
    const [isPhoneValid, setIsPhoneValid] = useState(false);
    const [hasError, setHasError] = useState(false);

    const sendOtpRequest = async () => {
        const configurationObject = {
            method: 'get',
            url: `${baseUrl}/api/users/1`,
        };
        const response = await axios(configurationObject);
        console.log(response.data);
    };

    const handlePhoneChange = (inputPhone) => {
        setHasError(false)
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
        console.log("is phone valid : " + isPhoneValid)
    }

    const handleSubmit = () => {
        if (!isPhoneValid)
            setHasError(true)
        else {
            navigate("/confirmLogin")
        }
    }

    return (
        <div>
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
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
