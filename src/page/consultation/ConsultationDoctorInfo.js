import convertMilliesToJalali from "../../method/convertMilliesToJalali";
import scheduleIcon from "../../static/icon/schedule.png";
import {useNavigate} from "react-router-dom";

function ConsultationDoctorInfo({consultation}) {

    const navigate = useNavigate();
    const {doctor, consultationType, createdAt} = consultation;
    const {speciality} = doctor;

    const navigateDoctorPage = () => {
        navigate("/doctor", {
            state: {
                doctorId: doctor.id
            }
        })
    }


    return (
        <div
            className="flex flex-row justify-end items-center h-32  w-11/12 xl:h-32"
            key={doctor.id}>
            <div className="flex flex-row h-[80%] justify-between items-end flex-1 xl:pr-6">
                <div className="flex flex-col h-[100%] justify-start items-start w-[50%] xl:pr-6">
                    <div
                        className="flex items-end h-1/2 justify-end pl-6 md:pl-14 mb-5 mt-2 text-gray-600 text-[12px] xl:text-[14px] rtl">
                        <div
                            className="bg-gray-400 w-24 py-1 text-m rounded text-white justify-center items-start text-center flex">
                            مشاوره {consultationType.title}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col h-[80%] justify-end items-end xl:pr-6">
                    <div
                        className="h-1/3 flex items-center w-11/12 justify-end pr-3 text-gray-800 text-m xl:text-[18px] appFont">
                        {doctor.name}
                    </div>
                    <div
                        className="h-1/3 w-[100%] flex items-start justify-end pr-3 mb-2  text-gray-600 text-[12px] xl:text-[14px]">
                        {speciality.title}
                    </div>
                    <div
                        className="h-1/3 w-[100%] flex items-start justify-end pr-1 text-gray-600 text-[12px] xl:text-[14px]">
                        {convertMilliesToJalali(createdAt)}
                        <img src={scheduleIcon} className="h-4 w-4 mx-3" alt="error"/>
                    </div>
                </div>
            </div>
            <div className=" h-16 w-16">
                <img onClick={navigateDoctorPage}
                     className="w-full h-full object-cover rounded-full border-4 border-gray-500 border-double "
                     src={doctor.profileImage} alt="error"/>
            </div>
        </div>
    )
}

export default ConsultationDoctorInfo;