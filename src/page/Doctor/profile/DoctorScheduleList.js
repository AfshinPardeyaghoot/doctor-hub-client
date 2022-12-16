import scheduleIcon from "../../../static/icon/schedule.png";
import DoctorSchedule from "./DoctorSchedule";
import {useEffect, useState} from "react";
import ApiRoutes from "../../../config/ApiRoutes";
import useRequest from "../../../hook/useRequest";

function DoctorScheduleList({doctorId}) {

    const [schedules, setSchedules] = useState();
    const [fetchDoctorSchedule] = useRequest();
    console.log('doctor id is : ' + doctorId)

    useEffect(() => {

        const fetchData = async () => {
            fetchDoctorSchedule({
                url: ApiRoutes.FETCH_DOCTOR_SCHEDULES + '/' + doctorId,
                method: "GET",
            }).then(res => {
                JSON.stringify(res.data)
                setSchedules(res.data)
            }).catch(e => {
                    console.log('error happens')
                }
            )
        }

        fetchData();
    }, [doctorId])


    return (
        <div className="w-[100%] py-8 flex flex-col text-gray-700 justify-center items-center pr-2">
            <div className="w-[100%] flex flex-row items-center justify-end font-semibold mb-8">
                <div> برنامه زمانی حضور پزشک برای مشاوره</div>
                <img src={scheduleIcon} className="h-5 w-5 mx-3" alt="error"/>
            </div>
            <div className="w-[100%] flex flex-col items-center justify-center ">
                {schedules &&
                    schedules.map((schedule) => {
                        return <DoctorSchedule schedule={schedule}/>
                    })
                }
            </div>
        </div>
    )
}

export default DoctorScheduleList;