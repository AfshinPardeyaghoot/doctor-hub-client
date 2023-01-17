import textChatIcon from "../../static/icon/text-chat.png";
import voiceChatIcon from "../../static/icon/voice-chat.png";
import {useNavigate} from "react-router-dom";
import toFarsiNumber from "../../method/toFarsiNumber";

function MainDoctor({doctor}) {

    const navigate = useNavigate();
    const {speciality, consultationTypes} = doctor;
    let hasVoiceConsultation = false, hasTextConsultation = false, hasBothConsultations = false;

    if (consultationTypes.length === 2) {
        hasTextConsultation = true;
        hasVoiceConsultation = true;
        hasBothConsultations = true;
    } else if (consultationTypes.length === 1) {
        let consultationName = consultationTypes[0].name;
        console.log('consultation name : ' + consultationName)
        if (consultationName === 'voice')
            hasVoiceConsultation = true;
        if (consultationName === 'text')
            hasTextConsultation = true;
    }

    const navigateDoctorPage = () => {
        navigate("/doctor", {
            state: {
                doctorId: doctor.id
            }
        })
    }

    return (
        <div className="w-[100%]">
            <div className="mb-5 pb-2  flex flex-col justify-center items-center rounded w-[100%] ">
                <div
                    className="flex flex-row justify-end items-start pr-3 pt-3 h-32  w-[95%] xl:h-32 border-[1px] border-gray-200 border-solid w-[95%] bg-slate-100"
                    key={doctor.id}>
                    <div className="flex flex-col h-full py-2 justify-end items-end w-[80%] xl:pr-6">
                        <div
                            className="h-1/3 flex items-center w-11/12 justify-end pr-3 text-gray-800 text-m xl:text-[18px] appFont">
                            {doctor.name}
                        </div>
                        <div
                            className="h-1/3 w-[100%] flex items-start justify-end pr-3 mb-5 mt-2  text-gray-600 text-[12px] xl:text-[14px]">
                            {speciality.title}
                        </div>
                        <div
                            className="h-10 flex justify-center items-center w-[100%] xl:w-[40%] flex-row text-gray-600 text-[12px]">
                            <div className="w-1/2 ">
                                {toFarsiNumber(doctor.rate)} ⭐
                            </div>
                            <div className="w-1/2 rtl">
                                + {toFarsiNumber(doctor.consultationCount)} مشاوره
                            </div>
                        </div>
                    </div>
                    <div className="h-16 w-16">
                        <img
                            className="w-full h-full object-cover rounded-full border-4 border-gray-500 border-double "
                            src={doctor.profileImage} alt="error"/>
                    </div>
                </div>
                <div
                    className="h-10 flex justify-center items-center w-[95%] flex-row text-gray-600 text-[12px] pr-3 bg-slate-100 border-[1px] border-gray-200 border-solid border-t-0">
                    <div
                        className={hasBothConsultations ? 'w-1/2 h-[100%] flex justify-center items-center' : (hasTextConsultation ? 'w-[100%] h-[100%] flex justify-center items-center' : 'w-0 h-0 invisible')}>
                        <img className="h-5 w-5 mx-3" src={textChatIcon} alt="icon not loaded"/>
                        مشاوره متنی
                    </div>
                    <div
                        className={hasBothConsultations ? 'w-1/2 rtl border-l-[1px] border-gray-300 border-solid h-[100%] justify-center flex items-center' : (hasVoiceConsultation ? 'w-[100%] rtl justify-center flex items-center' : 'w-0 h-0 invisible')}>
                        مشاوره صوتی
                        <img className="h-5 w-5 mx-3" src={voiceChatIcon} alt="icon not loaded"/>
                    </div>
                </div>
                <div
                    className="h-10 w-[95%] bg-emerald-500 text-center text-white flex justify-center items-center rounded-b-lg rounded-t-none border-2 border-double border-emerald-500 hover:border-white"
                    onClick={navigateDoctorPage}>
                    دریافت مشاوره
                </div>
            </div>
        </div>
    )
}

export default MainDoctor;