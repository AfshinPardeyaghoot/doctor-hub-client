import React, {useEffect, useState} from "react";
import "../style/Navbar.css";
import logo from "../../../static/logo/doctor_hub.png";
import {useNavigate} from "react-router-dom";
import useAuthRequest from "../../../hook/useAuthRequest";
import ApiRoutes from "../../../config/ApiRoutes";

function Navbar() {
    const navigate = useNavigate();
    const [isUserLogin, setIsUserLogin] = useState(false);
    const [getUserInfoReg] = useAuthRequest()

    useEffect(() => {
        getUserInfoReg({
            url: ApiRoutes.USER_INFO_URL,
            method: "GET"
        }).then(res => {
            console.log("In successful response : " + res.data)
            setIsUserLogin(true)
        }).catch(e => {
            throw e;
        })
    }, [])

    return (
        <div className="header_navbar">
            <div className="header_navbar_login_container"></div>

            {!isUserLogin
                ? <div className="header_navbar_login_btn" onClick={() => navigate("/login")}>ورود</div>
                : <div>کاربر</div>}

            <div className="header_navbar_logo_container">
                <img className="header_navbar_logo" src={logo} alt="DOCTOR HUB"></img>
            </div>
        </div>
    );
}

export default Navbar;
