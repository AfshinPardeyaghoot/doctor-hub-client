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
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const [username, setUsername] = useState(null);
    const [phone, setPhone] = useState(null);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const handleProfileIsOpen = () => {
        setIsProfileOpen(!isProfileOpen);
    }

    const handleNabvarShow = () => {
        setIsNavbarOpen(!isNavbarOpen)
    }

    console.log('navbar show : ' + isNavbarOpen)

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
        <div className="relative h-24 w-100 flex justify-between items-center shadow">
            <div className="w-56 h-24">
                <div className="relative w-56 h-24 flex flex-col">
                    {isUserLogin ?
                        <button data-collapse-toggle="navbar-default" type="button"
                                className="inline-flex relative items-center top-[5vh] pl-5 ml-3 text-sm text-gray-500 rounded-lg md:hidden"
                                aria-controls="navbar-default" aria-expanded="false" onClick={handleNabvarShow}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                      clip-rule="evenodd"></path>
                            </svg>
                        </button> :
                        <div
                            className="inline-flex bg-green-400 w-20 h-10 top-[3vh] relative items-center  pl-5 ml-3 text-sm text-gray-500 rounded-lg md:hidden"
                            onClick={() => navigate("/login")}>ورود
                        </div>
                    }

                    {isNavbarOpen && <div
                        className="flex relative w-56 pl-5  top-[6vh] justify-center  items-center  md:block md:w-auto"
                        id="navbar-default">
                        <ul className="flex flex-col right-0 relative w-60  border border-gray-100 rounded-lg bg-green-400 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                            <li>
                                <button onClick={handleProfileIsOpen}
                                        className="relative h-12 sw-20 bg-green-400 rounded flex justify-center items-center text-white">
                                    <div
                                        className="flex flex-col w-40 text-sm text-gray-600 transition-colors duration-300 transform">
                                        <div
                                            className="flex flex-col w-52 justify-center text-center text-m font-semibold text-gray-800">
                                            <h1 className="font-bold text-s mb-1 pt-2">{username}</h1>
                                            <div
                                                className='font-semibold text-xs text-gray-500'>{phone}</div>
                                        </div>
                                    </div>
                                </button>
                            </li>
                            <hr className="bg-gray-400 h-[1px] border-none "/>
                            <li>
                                <a href="#"
                                   className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-green-500 hover:text-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">مشاوره
                                    های من </a>
                            </li>
                            <li>
                                <a href="#"
                                   className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-green-500 hover:text-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">ویرایش
                                    اطلاعات</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-green-500 hover:text-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">خروج</a>
                            </li>
                        </ul>
                    </div>
                    }

                </div>
            </div>
            <div className="relative bg-blue-300 right-5">
                <img className="header_navbar_logo" src={logo} alt="DOCTOR HUB"></img>
            </div>
        </div>
    );
}

export default Navbar;
