import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import useRequest from "../../hook/useRequest";
import ApiRoutes from "../../config/ApiRoutes";
import textChatIcon from "../../static/icon/text-chat.png";
import voiceChatIcon from "../../static/icon/voice-chat.png";
import listItemIcon from "../../static/icon/list-item.png";
import aboutIcon from "../../static/icon/about.png";

function DoctorProfile() {

    const {state} = useLocation();
    const {doctorId} = state;
    const [fetchDoctorReq] = useRequest();
    const [doctor, setDoctor] = useState();

    useEffect(() => {

        const fetchData = async () => {
            fetchDoctorReq({
                url: ApiRoutes.FETCH_DOCTORS + '/' + doctorId,
                method: "GET",
            }).then(res => {
                console.log('fucking response is : ' + JSON.stringify(res.data))
                setDoctor(res.data)
            }).catch(e => {
                    console.log('error happens')
                }
            )
        }

        fetchData();
    }, [doctorId])


    return (
        <div className="w-[100%] bg-slate-100 flex justify-center">
                <div
                    className="flex flex-col justify-center items-center bg-white relative mt-20 rounded-t-2xl border-[1px] border-solid border-gray-300 w-[90%] mb-10">
                    <img src={doctor && doctor.profileImage}
                         className="avatar h-[6rem] w-[6rem] border-double -mt-10 border-4 border-green-400"/>
                    <div className="w-[100%] text-gray-800 text-[23px] flex justify-center items-center mt-5">
                        {doctor && doctor.name}
                    </div>
                    <div className="w-[100%] text-gray-600 text-[15px] flex justify-center items-center mt-3">
                        {doctor && doctor.speciality.title}
                    </div>
                    <div
                        className="w-[100%] text-gray-700 text-[13px] flex flex-row items-center justify-center  mt-8 py-3 border-t-[1px] border-gray-300 border-solid">
                        <div className="w-1/3 flex flex-col justify-center items-center h-[100%]">
                            <div>
                                4.7 ⭐
                            </div>
                            <div className="text-gray-500 text-[10px] pt-2">
                                امتیاز
                            </div>
                        </div>
                        <div
                            className="w-1/3 flex flex-col justify-center items-center h-[100%] border-x-[1px] border-gray-300 border-solid">
                            <div>
                                + ۳۰
                            </div>
                            <div className="text-gray-500 text-[10px] pt-2">
                                مشاوره آنلاین
                            </div>
                        </div>
                        <div className="w-1/3 flex flex-col justify-center items-center h-[100%] ">
                            <div>
                                {doctor && doctor.gmcNumber}
                            </div>
                            <div className="text-gray-500 text-[10px] pt-2">
                                شماره نظام پزشکی
                            </div>
                        </div>
                    </div>
                    <div
                        className="w-[100%] text-gray-700 text-[15px] flex flex-col justify-end items-center border-gray-300 border-[1px] border-solid rounded-b-lg">
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
                        <div className="w-[95%] text-gray-700 bg-slate-100 h-10 border-[1px] border-gray-300 border-solid flex justify-center items-center rounded-t-lg rtl">
                             ۵۰۰۰۰ تومان
                        </div>
                        <button
                            className="w-[95%] text-white rounded-b-lg bg-green-400 border-2 border-double border-green-400 hover:border-white h-10 flex items-center justify-center mb-8">
                            شروع مشاوره
                        </button>
                    </div>
                    <div
                        className="w-[100%] text-gray-700 text-[15px] flex flex-col justify-end items-center border-gray-300 border-[1px] border-solid rounded-b-lg">
                        <div className="flex flex-row justify-end font-semibold items-center w-[100%] mt-5 mb-2 pr-3">
                            <div>
                                مشاوره صوتی
                            </div>
                            <img className="h-5 w-5 mx-3" src={voiceChatIcon} alt="icon not loaded"/>
                        </div>
                        <div className="w-[100%] text-gray-700 text-[13px]">
                            <ul className="w-[100%] flex flex-col justify-end items-center list-disc pr-5 pb-5 ">
                                <li className="w-[100%] flex flex-row justify-end items-center mt-3">
                                    شروع تماس بلافاصله بعد از ثبت درخواست
                                    <img src={listItemIcon} className="h-3 w-3 mx-2"/>
                                </li>
                                <li className="w-[100%] flex flex-row justify-end items-center mt-3">
                                    پایان توافقی
                                    <img src={listItemIcon} className="h-3 w-3 mx-2"/>
                                </li>
                            </ul>
                        </div>
                        <div className="w-[95%] text-gray-700 bg-slate-100 h-10 border-[1px] border-gray-300 border-solid flex justify-center items-center rounded-t-lg rtl">
                            ۵۰۰۰۰ تومان
                        </div>
                        <button
                            className="w-[95%] text-white rounded-b-lg bg-green-400 border-2 border-double border-green-400 hover:border-white h-10 flex items-center justify-center mb-8">
                            شروع مشاوره
                        </button>
                    </div>
                    <div className="w-[100%] py-8 flex flex-col text-gray-700 justify-center items-center pr-2">
                        <div className="w-[100%] flex flex-row items-center justify-end">
                            <div>درباره پزشک</div>
                            <img src={aboutIcon} className="h-5 w-5 mx-3" alt="error"/>
                        </div>
                        <div className="w-[100%] mt-5 rtl flex justify-end items-center text-[14px] text-right mx-3 px-3" >
                            شماره نظام پزشکی: ت-6113 برای گرفتن برنامه غذایی و رژیم لطفا درخواست مشاوره متنی دهید تا راهنمایی شوید. مشاور تغذیه و تناسب اندام هستم، صاحب امتیاز اولین سیستم مشاوره تغذیه تلفنی در کشور. تجویز تخصصی مکمل های ورزشی بدنسازی بانوان. در صورت تمایل اصلاح مزاج و تنطیم برنامه از دیدگاه طب سنتی. در حال حاضر تمرکز اصلی کار ما روی تغذیه ورزشی و کاهش وزن بدون گرسنگی هست.
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default DoctorProfile;