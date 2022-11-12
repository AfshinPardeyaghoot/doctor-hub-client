import React, {useState} from "react";
import "react-phone-number-input/style.css";
import logo from "../../../../static/logo/doctor_hub.png";
import "../style/Login.css";
import {useNavigate} from "react-router-dom";

function LoginPage() {

    const navigate = useNavigate();
    const [phone, setPhone] = useState(null);

    return (
        <div>
            <div className="loginPage text-red-900">
                <div className="loginForm">
                    <img className="loginFormLogo" src={logo} alt="DOCTOR HUB"></img>
                    <label className="text-gray-600 font-semibold text-sm font-cambria">به دکتر هاب خوش آمدید</label>
                    <label className="phoneLabel font-light pb-8">شماره تلفن همراه خود را برای دریافت کد تائید وارد کنید</label>
                    <input
                        className="phoneInput text-slate-600"
                        placeholder="شماره همراه با 09"
                        type="text"
                        autoFocus={true}
                    ></input>
                    <button className="submitButton" onClick={() => navigate("/confirmLogin")}>
                        تایید شماره همراه
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
