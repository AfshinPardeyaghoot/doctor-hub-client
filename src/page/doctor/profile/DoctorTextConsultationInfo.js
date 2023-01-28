import textChatIcon from "../../../static/icon/text-chat.png";
import listItemIcon from "../../../static/icon/list-item.png";
import toFarsiNumber from "../../../method/toFarsiNumber";
import insertComma from "../../../method/insertationComma";
import useAuthRequest from "../../../hook/useAuthRequest";
import ApiRoutes from "../../../config/ApiRoutes";
import {toast} from "react-hot-toast";
import {useNavigate} from "react-router-dom";


function DoctorTextConsultationInfo({price, id, setLoginModal, setReserveError, hasError}) {
    const navigate = useNavigate();
    const [reserveConsultationReq, {error}] = useAuthRequest();

    const reserveConsultation = () => {
        reserveConsultationReq({
            url: ApiRoutes.RESERVE_CONSULTATION,
            method: "POST",
            data: {
                doctorConsultationId: id
            }
        }).then(res => {
            toast.success('in yek ekhtar ast pedar sag', {
                style: {
                    marginTop: "10px",
                    direction: "rtl",
                    width: "300px"
                }
            });
            navigate('/consultations')

        }).catch(exp => {
            if (exp.code === 401 || exp.code === 403) {
                setLoginModal(true)
            } else {
                setReserveError(error)
                hasError(true)
            }
        })
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
                    className="w-[95%] text-white rounded-b-lg bg-emerald-500 border-2 border-double border-emerald-500 hover:border-white h-10 flex items-center justify-center mb-8">
                شروع مشاوره
            </button>
        </div>

    )
}

export default DoctorTextConsultationInfo;