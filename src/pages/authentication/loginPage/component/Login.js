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
                    <label className="phoneLabel">شماره همراه را وارد کنید</label>
                    <input
                        className="phoneInput"
                        placeholder="شماره همراه با 09"
                        type="text"
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
