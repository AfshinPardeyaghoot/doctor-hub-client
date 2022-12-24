import {useNavigate} from "react-router-dom";
import convertMilliesToJalali from "../../method/convertMilliesToJalali";

function Consultation({consultation}) {

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
        <div>
            <div className="w-[100%]">
                <div className="mb-5 pb-2  flex flex-col justify-center items-center rounded w-[95%]">
                    <div
                        className="flex flex-row justify-end items-center h-32  w-11/12 xl:h-32 border-[1px] border-gray-200 border-solid w-[95%] bg-white"
                        key={doctor.id}>
                        <div className="flex flex-row h-[80%] justify-end items-end w-[100%] xl:pr-6">
                            <div className="flex flex-col h-[100%] justify-start items-start w-[50%] xl:pr-6">
                                <div
                                    className="w-[100%] flex items-center h-[50%] justify-start pl-10 pt-3 text-gray-600 text-[12px] xl:text-[14px]">
                                    {convertMilliesToJalali(createdAt)}
                                </div>
                                <div
                                    className="w-[100%] flex items-end h-1/2 justify-end pl-6 mb-5 mt-2 text-gray-600 text-[12px] xl:text-[14px] rtl">
                                    <div className="bg-gray-400 w-24 h-8 text-m rounded text-white justify-center items-start text-center flex">
                                        مشاوره {consultationType.title}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col h-[80%] justify-end items-end w-[50%] xl:pr-6">
                                <div
                                    className="h-1/3 flex items-center w-11/12 justify-end pr-3 text-gray-800 text-m xl:text-[18px] appFont">
                                    {doctor.name}
                                </div>
                                <div
                                    className="h-1/3 w-[100%] flex items-start justify-end pr-3 mb-5 mt-2  text-gray-600 text-[12px] xl:text-[14px]">
                                    {speciality.title}
                                </div>
                            </div>
                        </div>
                        <div className="pr-3">
                            <img
                                className="h-16 w-16 bg-cover rounded-full border-4 border-green-400 border-double avatar"
                                src={doctor.profileImage} alt="error"/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Consultation;