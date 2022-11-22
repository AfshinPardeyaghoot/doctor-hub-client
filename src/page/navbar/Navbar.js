import React, {useCallback, useEffect, useState} from "react";
import "./Navbar.css";
import logo from "../../static/logo/doctor_hub.png";
import avatar from '../../static/icon/avatar-icon.png'
import {useNavigate} from "react-router-dom";
import useAuthRequest from "../../hook/useAuthRequest";
import ApiRoutes from "../../config/ApiRoutes";

function Navbar() {
    const navigate = useNavigate();
    const [isUserLogin, setIsUserLogin] = useState(false);
    const [getUserInfoReg] = useAuthRequest()
    const [username, setUsername] = useState(null);
    const [phone, setPhone] = useState(null);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const handleProfileIsOpen = () => {
        setIsProfileOpen(!isProfileOpen);
    }

    useEffect(() => {

        const fetchUserData = async () => {
            getUserInfoReg({
                url: ApiRoutes.USER_INFO_URL,
                method: "GET"
            }).then(res => {
                setUsername(res.data.username ? res.data.username : null)
                setPhone(res.data.phone ? res.data.phone : res.data.phone)
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
                :
                <div>
                    <button onClick={handleProfileIsOpen}
                            className="fixed space-x-1 flex columns-1 absolute justify-between top-2 h-1/2 left-5 content-center text-xs text-gray-600 border-double border-2 border-green-400 border-double rounded bg-green-400 hover:border-white p-0 m-0 items-center p-2 text-sm text-gray-600 border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none">
                        <img className="w-4 h-4" src={avatar} alt="avatar-icon"/>
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
                                fill="currentColor"></path>
                        </svg>

                    </button>
                    {
                        isProfileOpen &&
                        <div
                            className="flex flex-col absolute w-40 h-40 top-8 space-x-1 left-5 text-xs text-gray-600 border-double border-2 border-green-400 border-double rounded bg-green-400 hover:border-white overflow-hidden bg-white shadow-xl dark:bg-gray-800">
                            <div
                                className="flex flex-col absolute w-40 h-10 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                                <div
                                    className="flex flex-col pb-1 w-40 justify-center text-center text-sm font-semibold text-gray-700 dark:text-gray-200">
                                    <h1 className="font-bold text-s mb-1 pt-2">{username}</h1>
                                    <div className='font-semibold text-xs text-gray-500'>{phone}</div>
                                </div>
                                <div
                                    className="flex flex-row justify-around w-40 h-9 justify-center py-2 text-center text-l text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <div className="text-red-600">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                                        </svg>
                                    </div>
                                    <div className="text-center pt-1 mx-2"> خروج</div>
                                </div>
                                <div className="flex flex-row justify-around w-40 h-9 justify-center py-2 text-center text-l text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                                    ویرایش اطلاعات
                                </div>
                            </div>
                        </div>
                    }
                </div>


            }


            <div className="header_navbar_logo_container">
                <img className="header_navbar_logo" src={logo} alt="DOCTOR HUB"></img>
            </div>
        </div>
    );
}

export default Navbar;
