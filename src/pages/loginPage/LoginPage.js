import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./style/LoginPage.css";

function LoginPage() {
  const [phone, setPhone] = useState(null);

  return (
    <div>
      <div className="loginPage">
        <div className="loginForm">
          <input
            className="phoneInput"
            placeholder="شماره همراه با 09"
            type="text"
          ></input>
          <button className="submitButton">
            تایید شماره همراه
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
