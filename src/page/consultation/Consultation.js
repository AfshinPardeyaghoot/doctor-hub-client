import {useNavigate} from "react-router-dom";
import ConsultationDoctorInfo from "./ConsultationDoctorInfo";
import {useEffect, useState} from "react";
import ConsultationUserInfo from "./ConsultationUserInfo";

function Consultation({consultation}) {

    const navigate = useNavigate();
    const [isUser, setIsUser] = useState(false);
    const {id, doctor, user, status} = consultation;
    const userId = user.id;
    const authUserId = localStorage.getItem('u_uuid');

    useEffect(() => {
        if (authUserId === userId) {
            setIsUser(true)
        } else
            setIsUser(false)
    }, [])

    const navigateChat = () => {
        navigate("/chat", {
            state: {
                id: id
            }
        })
    }


    return (
        <div>
            <div className="w-[100%] flex justify-center ">
                <div className="border-[1px] border-gray-200 border-solid w-[95%] bg-white mt-4 rounded shadow">
                    {isUser ? <ConsultationDoctorInfo consultation={consultation}/> :
                        <ConsultationUserInfo consultation={consultation}/>}
                    <div className="mb-5 pb-2 flex flex-col justify-center items-center w-[100%]">
                        <div className="w-[100%] flex flex-row items-center justify-center mt-2 md:mt-7">
                            <div
                                className="w-[63%] flex justify-center py-1 text-m items-center bg-emerald-300 text-emerald-600 rounded mr-3">
                                {status}
                            </div>
                            <div className="w-[20%] flex flex-col justify-center text-m items-center text-gray-700">
                                وضعیت
                            </div>
                        </div>
                        <div className="w-[100%] mt-4">
                            <button onClick={navigateChat}
                                    className="w-[85%]  border-solid border-green-300 text-green-500 hover:border-green-600 hover:text-green-700 border-[1px] rounded py-1">
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