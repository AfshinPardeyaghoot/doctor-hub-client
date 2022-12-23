import {useNavigate} from "react-router-dom";

function Consultation({consultation}) {

    const navigate = useNavigate();
    const {doctor} = consultation;
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
                <div className="mb-5 pb-2  flex flex-col justify-center items-center rounded w-[100%]">
                    <div
                        className="flex flex-row justify-end items-center h-32  w-11/12 xl:h-32 border-[1px] border-gray-200 border-solid w-[95%] bg-white"
                        key={doctor.id}>
                        <div className="flex flex-col h-[80%] justify-end items-end w-[100%] xl:pr-6">
                            <div
                                className="h-1/3 flex items-center w-11/12 justify-end pr-3 text-gray-800 text-m xl:text-[18px] appFont">
                                {doctor.name}
                            </div>
                            <div
                                className="h-1/3 w-[100%] flex items-start justify-end pr-3 mb-5 mt-2  text-gray-600 text-[12px] xl:text-[14px]">
                                {speciality.title}
                            </div>
                        </div>
                        <div className="pr-3">
                            <img
                                className="h-16 w-16 bg-cover rounded-full border-4 border-green-400 border-double avatar"
                                src={doctor.profileImage} alt="error"/>
                        </div>
                    </div>
                    <div
                        className="h-10 w-[95%] bg-green-400 text-center text-white flex justify-center items-center rounded-b-lg rounded-t-none border-2 border-double border-green-400 hover:border-white"
                        onClick={navigateDoctorPage}>
                        ورود
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Consultation;