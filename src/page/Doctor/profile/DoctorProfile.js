import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import useRequest from "../../../hook/useRequest";
import ApiRoutes from "../../../config/ApiRoutes";
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
                className="flex flex-col justify-center items-center bg-white relative mt-20 rounded-2xl border-[1px] border-solid border-gray-300 w-[90%] mb-10 md:hidden md:h-0 md:w-0 ">
                <DoctorProfileInfo doctor={doctor}/>
                <DoctorConsultationHistoryInfo doctor={doctor}/>
                <DoctorTextConsultationInfo/>
                <DoctorVoiceConsultationInfo/>
                <DoctorAbout/>
                <DoctorScheduleList doctorId={doctorId}/>
            </div>
            <div
                className="hidden h-0 w-0 md:flex flex flex-row justify-center items-start md:w-[100%] md:h-max rounded-2xl">
                <div
                    className="bg-white mt-20 md:mr-5 xl:mr-10 xl:w-1/4 md:w-[20rem] rounded-2xl border-[1px] border-solid border-gray-300">
                    <DoctorTextConsultationInfo/>
                    <DoctorVoiceConsultationInfo/>
                </div>
                <div
                    className="flex flex-col justify-center items-center bg-white relative mt-20 rounded-2xl border-[1px] border-solid border-gray-300 xl:w-2/3 mb-10 md:w-[55%]">
                    <DoctorProfileInfo doctor={doctor}/>
                    <DoctorConsultationHistoryInfo doctor={doctor}/>
                    <DoctorAbout/>
                    <DoctorScheduleList doctorId={doctorId}/>
                </div>
            </div>
        </div>
    )
}

export default DoctorProfile;