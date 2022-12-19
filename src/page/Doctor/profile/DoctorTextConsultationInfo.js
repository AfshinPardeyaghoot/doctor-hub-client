import textChatIcon from "../../../static/icon/text-chat.png";
import listItemIcon from "../../../static/icon/list-item.png";
import toFarsiNumber from "../../../method/toFarsiNumber";
import insertComma from "../../../method/insertationComma";
import useCheckLogin from "../../../hook/useCheckLogin";
import {useEffect, useState} from "react";
import useAuthRequest from "../../../hook/useAuthRequest";
import ApiRoutes from "../../../config/ApiRoutes";
import {useNavigate} from "react-router-dom";


function DoctorTextConsultationInfo({price, id, doctorId}) {
    const navigate = useNavigate();
    const [reserveConsultationReq] = useAuthRequest();
    const [showLoginModal, setLoginModal] = useState(false);

    const reserveConsultation = () => {
        reserveConsultationReq({
            url: ApiRoutes.RESERVE_CONSULTATION,
            method: "POST",
            body: {
                doctorConsultationId: id
            }
        }).then(res => {

        }).catch(exp => {
            if (exp.code === 401) {
                setLoginModal(true)
            }
        })
    }

    const gotoLogin = () => {
        navigate("/login", {
            state: {
                doctorId
            }
        })
    }

    const closeModal = () => {
        setLoginModal(false)
    }


    return (
        <div
            className="w-[100%] text-gray-700 text-[15px] flex flex-col justify-end items-center border-gray-300 border-[1px] border-solid md:border-0">
            <div className="flex flex-row justify-end font-semibold items-center w-[100%] mt-5 mb-2 pr-3">
                <div>
                    مشاوره متنی
                </div>
                <img className="h-5 w-5 mx-3" src={textChatIcon} alt="icon not loaded"/>
            </div>
            <div className="w-[100%] text-gray-700 text-[13px]">
                <ul className="w-[100%] flex flex-col justify-end items-center list-disc pr-5 pb-5 ">
                    <li className="w-[100%] flex flex-row justify-end items-center mt-3">
                        قابلیت ارسال فایل و عکس برای هر دو طرف
                        <img src={listItemIcon} className="h-3 w-3 mx-2"/>
                    </li>
                    <li className="w-[100%] flex flex-row justify-end items-center mt-3">
                        حداکثر زمان پاسخ گویی پزشک : ۳ ساعت
                        <img src={listItemIcon} className="h-3 w-3 mx-2"/>
                    </li>
                    <li className="w-[100%] flex flex-row justify-end items-center mt-3">
                        پایان توافقی
                        <img src={listItemIcon} className="h-3 w-3 mx-2"/>
                    </li>
                </ul>
            </div>
            <div
                className="w-[95%] text-gray-700 bg-slate-100 h-10 border-[1px] border-gray-300 border-solid flex justify-center items-center rounded-t-lg rtl">
                {insertComma(toFarsiNumber(price))} تومان
            </div>
            <button onClick={reserveConsultation}
                    className="w-[95%] text-white rounded-b-lg bg-green-400 border-2 border-double border-green-400 hover:border-white h-10 flex items-center justify-center mb-8">
                شروع مشاوره
            </button>
            <div
                className={showLoginModal ? 'modal fade bg-opacity-50 bg-gray-400 fixed left-0 flex justify-center bottom-0 w-screen h-screen outline-none overflow-x-hidden' : 'hidden'}
                id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog relative top-80 w-4/5 pointer-events-none">
                    <div
                        className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div
                            className="modal-header flex flex-shrink-0 items-center justify-end p-4 border-b border-gray-200 rounded-t-md">
                            <h5 className="text-xl font-medium leading-normal text-gray-800"
                                id="exampleModalLabel">احراز هویت</h5>
                            <button type="button"
                                    className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                    data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body relative p-4 h-20 rtl">
                            برای رزرو کردن مشاوره ابتدا باید وارد شوید!
                        </div>
                        <div
                            className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 rounded-b-md">
                            <button onClick={closeModal} type="button"
                                    className="px-6 py-2.5 bg-red-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                                    data-bs-dismiss="modal">
                                بستن
                            </button>
                            <button type="button" onClick={gotoLogin}
                                    className="px-6 py-2.5 bg-green-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-15 ease-in-out ml-1">
                                رفتن به صفحه ورود
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DoctorTextConsultationInfo;