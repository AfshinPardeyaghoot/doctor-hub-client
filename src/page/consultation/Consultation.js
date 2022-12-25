import {useNavigate} from "react-router-dom";
import scheduleIcon from "../../static/icon/schedule.png";
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
            <div className="w-[100%] flex justify-center ">
                <div className="border-[1px] border-gray-200 border-solid w-[95%] bg-white mt-4 rounded shadow">
                    <div className="mb-5 pb-2 flex flex-col justify-center items-center w-[100%]">
                        <div
                            className="flex flex-row justify-end items-center h-32  w-11/12 xl:h-32"
                            key={doctor.id}>
                            <div className="flex flex-row h-[80%] justify-end items-end flex-1 xl:pr-6">
                                <div className="flex flex-col h-[100%] justify-start items-start w-[50%] xl:pr-6">
                                    <div
                                        className="w-[100%] flex items-end h-1/2 justify-end pl-6 mb-5 mt-2 text-gray-600 text-[12px] xl:text-[14px] rtl">
                                        <div
                                            className="bg-gray-400 w-24 py-1 text-m rounded text-white justify-center items-start text-center flex">
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
                                <img
                                    className="w-full h-full rounded-full border-4 border-gray-500 border-double "
                                    src={doctor.profileImage} alt="error"/>
                            </div>
                        </div>
                        <div className="w-[100%] flex flex-row items-center justify-center mt-2">
                            <div
                                className="w-[60%] flex justify-center py-1 items-center bg-sky-200 text-sky-600 rounded mr-3">
                                شروع نشده
                            </div>
                            <div className="w-[20%] flex flex-col justify-center items-center text-gray-700">
                                وضعیت
                            </div>
                        </div>
                        <div className="w-[100%] mt-4">
                            <button className="w-[85%] bg-white border-solid border-green-300 text-green-500 hover:border-green-600 hover:text-green-700 border-[1px] rounded py-1">
                                ورود
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Consultation;