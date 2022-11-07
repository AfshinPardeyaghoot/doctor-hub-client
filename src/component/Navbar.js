import React from "react";
import "../style/Navbar.css";
import logo from "../logo/doctor_hub.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="header_navbar">
      <div className="header_navbar_login_container"></div>

      <div
        className="header_navbar_login_btn"
        onClick={() => navigate("/login")}
      >
        ورود | ثبت نام
      </div>

      <div className="header_navbar_logo_container">
        <img className="header_navbar_logo" src={logo} alt="DOCTOR HUB"></img>
      </div>
    </div>
  );
}

export default Navbar;
