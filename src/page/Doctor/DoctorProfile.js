import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import useRequest from "../../hook/useRequest";
import ApiRoutes from "../../config/ApiRoutes";
import textChatIcon from "../../static/icon/text-chat.png";

function DoctorProfile() {

    const {state} = useLocation();
    const {doctorId} = state;
    const [doctor, setDoctor] = useState();
    const [fetchDoctorReq] = useRequest();

    useEffect(() => {
        const fetchData = async () => {
            fetchDoctorReq({
                url: ApiRoutes.FETCH_DOCTORS + '/' + doctorId,
                method: "GET",
            }).then(res => {
                console.log('response : ' + JSON.stringify(res.data))
                setDoctor(res.data)

            }).catch(e => {

                }
            )
        }

        fetchData();
    }, [doctorId])


    return (
        <div className="w-[100%] bg-slate-100">
            <div
                className="flex flex-col justify-center items-center bg-white relative mt-36 rounded-t-2xl border-[1px] border-solid border-gray-300">
                <img src={doctor.profileImage}
                     className="avatar h-[6rem] w-[6rem] border-double -mt-10 border-4 border-green-400"/>
                <div className="w-[100%] text-gray-800 text-[23px] flex justify-center items-center mt-5">
                    {doctor.name}
                </div>
                <div className="w-[100%] text-gray-600 text-[15px] flex justify-center items-center mt-3">
                    {doctor.speciality.title}
                </div>
                <div className="w-[100%] text-gray-700 text-[13px] flex flex-row items-center justify-center  mt-8 py-3 bg-slate-100 border-t-[1px] border-gray-300 border-solid">
                    <div className="w-1/3 flex flex-col justify-center items-center h-[100%]">
                        <div>
                            4.7 ⭐
                        </div>
                        <div className="text-gray-500 text-[10px] mt-2">
                            امتیاز
                        </div>
                    </div>
                    <div className="w-1/3 flex flex-col justify-center items-center h-[100%] border-x-[1px] border-gray-300 border-solid">
                        <div>
                            + ۳۰
                        </div>
                        <div className="text-gray-500 text-[10px] mt-2">
                            مشاوره آنلاین
                        </div>
                    </div>
                    <div className="w-1/3 flex flex-col justify-center items-center h-[100%] ">
                        <div>
                            {doctor.gmcNumber}
                        </div>
                        <div className="text-gray-500 text-[10px] mt-2">
                            شماره نظام پزشکی
                        </div>
                    </div>
                </div>
                <div className="w-[100%] text-gray-700 text-[15px] flex flex-col justify-end items-center mt-8 border-gray-300 border-[1px] border-solid pr-3">
                    <div className="flex flex-row justify-end font-semibold items-center w-[100%] my-5">
                        <div>
                            مشاوره متنی
                        </div>
                        <img className="h-5 w-5 mx-3" src={textChatIcon} alt="icon not loaded"/>
                    </div>
                    <div className="w-[100%] text-gray-700 text-[13px]">
                        <ul className="w-[100%] flex flex-col justify-end items-center list-disc">
                            <li className="w-[100%] flex flex-col justify-center items-end mt-3">
                                قابلیت ارسال فایل و عکس برای هر دو طرف
                            </li>
                            <li className="w-[100%] flex flex-col justify-center items-end  mt-3">
                                حداکثر زمان پاسخ گویی پزشک : ۳ ساعت
                            </li>
                            <li className="w-[100%] flex flex-col justify-center items-end mt-3">
                                 پایان توافقی
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default DoctorProfile;