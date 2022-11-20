import React, {useCallback, useEffect, useState} from "react";
import "../style/Navbar.css";
import logo from "../../../static/logo/doctor_hub.png";
import avatar from '../../../static/icon/avatar-icon.png'
import {useNavigate} from "react-router-dom";
import useAuthRequest from "../../../hook/useAuthRequest";
import ApiRoutes from "../../../config/ApiRoutes";

function Navbar() {
    const navigate = useNavigate();
    const [isUserLogin, setIsUserLogin] = useState(false);
    const [getUserInfoReg, response] = useAuthRequest()
    const [username, setUsername] = useState(null);


    useEffect(() => {

        const fetchUserData = async () => {
            getUserInfoReg({
                url: ApiRoutes.USER_INFO_URL,
                method: "GET"
            }).then(res => {
                setUsername(res.data.username ? res.data.username : null)
                setIsUserLogin(true)
            }).catch(e => {

            })
        }

        fetchUserData();
    }, [])


    return (
        <div className="header_navbar">
            <div className="header_navbar_login_container"></div>

            {!isUserLogin
                ? <div className="header_navbar_login_btn" onClick={() => navigate("/login")}>ورود</div>
                : <div
                    className="space-x-1 flex columns-1 absolute justify-between top-2 h-1/2 left-5 content-center text-xs text-gray-600 border-double border-2 border-green-400 border-double rounded bg-green-400 hover:border-white p-0 m-0">
                    {username && <div className="m-0.5">{username}</div>}
                    <img className="w-4 h-4" src={avatar} alt="avatar-icon"/>
                </div>}

            <div className="header_navbar_logo_container">
                <img className="header_navbar_logo" src={logo} alt="DOCTOR HUB"></img>
            </div>
        </div>
    );
}

export default Navbar;
