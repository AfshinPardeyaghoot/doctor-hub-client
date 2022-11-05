import React from "react";
import '../style/Navbar.css'
import logo from '../logo/doctor_hub.png'

function Navbar() {
  return (
    <div className="header_navbar">
        <div className="header_navbar_login_container"></div>
      <div className="header_navbar_login_btn">ورود | ثبت نام</div>
      <div className="header_navbar_logo_container">
        <img className="header_navbar_logo" src={logo}></img>
      </div>
    </div>
  );
}

export default Navbar;
