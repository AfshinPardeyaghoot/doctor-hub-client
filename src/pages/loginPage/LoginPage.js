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
          <PhoneInput
            defaultCountry="IR"
            placeholder="Enter phone number"
            value={phone}
            onChange={setPhone}
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
