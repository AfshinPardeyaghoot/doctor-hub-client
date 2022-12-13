import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import useRequest from "../../../hook/useRequest";
import ApiRoutes from "../../../config/ApiRoutes";
import textChatIcon from "../../../static/icon/text-chat.png";
import voiceChatIcon from "../../../static/icon/voice-chat.png";
import listItemIcon from "../../../static/icon/list-item.png";
import aboutIcon from "../../../static/icon/about.png";
import scheduleIcon from "../../../static/icon/schedule.png";
import DoctorSchedule from "./DoctorSchedule";
import DoctorScheduleList from "./DoctorScheduleList";
import DoctorAbout from "./DoctorAbout";
import DoctorVoiceConsultationInfo from "./DoctorVoiceConsultationInfo";
import DoctorTextConsultationInfo from "./DoctorTextConsultationInfo";
import DoctorConsultationHistoryInfo from "./DoctorConsultationHistoryInfo";
import DoctorProfileInfo from "./DoctorProfileInfo";

function DoctorProfile() {

    const {state} = useLocation();
    const {doctorId} = state;
    const [fetchDoctorReq] = useRequest();
    const [doctor, setDoctor] = useState();

    let doctorSchedule = [
        {
            day: 'شنبه',
            fromHour: '07:00',
            toHour: '19:00'
        },
        {
            day: 'یکشنبه',
            fromHour: '07:00',
            toHour: '19:00'
        },
        {
            day: 'دوشنبه',
            fromHour: '07:00',
            toHour: '19:00'
        },
        {
            day: 'چهارشنبه',
            fromHour: '07:00',
            toHour: '19:00'
        },
    ]

    useEffect(() => {

        const fetchData = async () => {
            fetchDoctorReq({
                url: ApiRoutes.FETCH_DOCTORS + '/' + doctorId,
                method: "GET",
            }).then(res => {
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
                className="flex flex-col justify-center items-center bg-white relative mt-20 rounded-2xl border-[1px] border-solid border-gray-300 w-[90%] mb-10">
                <DoctorProfileInfo doctor={doctor}/>
                <DoctorConsultationHistoryInfo doctor={doctor}/>
                <DoctorTextConsultationInfo/>
                <DoctorVoiceConsultationInfo/>
                <DoctorAbout/>
                <DoctorScheduleList schedules={doctorSchedule}/>
            </div>
        </div>
    )
}

export default DoctorProfile;