import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import useRequest from "../../../hook/useRequest";
import ApiRoutes from "../../../config/ApiRoutes";
import DoctorScheduleList from "./DoctorScheduleList";
import DoctorAbout from "./DoctorAbout";
import DoctorVoiceConsultationInfo from "./DoctorVoiceConsultationInfo";
import DoctorTextConsultationInfo from "./DoctorTextConsultationInfo";
import DoctorConsultationHistoryInfo from "./DoctorConsultationHistoryInfo";
import DoctorProfileInfo from "./DoctorProfileInfo";
import {toast, Toaster} from "react-hot-toast";

function DoctorProfile() {

    const navigate = useNavigate();
    const {state} = useLocation();
    const {doctorId} = state;
    const [hasError, setHasError] = useState(false);
    const [reserveError, setReserveError] = useState('');
    const [fetchDoctorReq] = useRequest();
    const [doctor, setDoctor] = useState();
    const [consultationTypes, setConsultationTypes] = useState([])
    const [showLoginModal, setLoginModal] = useState(false);
    const [isOnline, setIsOnline] = useState(false);
    const [description, setDescription] = useState();
    let hasVoiceConsultation = false, hasTextConsultation = false, textConsultationPrice, voiceConsultationPrice,
        textConsultationId, voiceConsultationId;

    if (consultationTypes.length === 2) {
        hasTextConsultation = true;
        hasVoiceConsultation = true;
        consultationTypes.map((consultationType) => {
            if (consultationType.name === 'voice') {
                voiceConsultationPrice = consultationType.price;
                voiceConsultationId = consultationType.id;
            }
            if (consultationType.name === 'text') {
                textConsultationPrice = consultationType.price;
                textConsultationId = consultationType.id;
            }

        })
    } else if (consultationTypes.length === 1) {
        let consultationName = consultationTypes[0].name;
        if (consultationName === 'voice') {
            hasVoiceConsultation = true;
            voiceConsultationPrice = consultationTypes[0].price;
            voiceConsultationId = consultationTypes[0].id;
        }
        if (consultationName === 'text') {
            hasTextConsultation = true;
            textConsultationPrice = consultationTypes[0].price;
            textConsultationId = consultationTypes[0].id;
        }

    }

    useEffect(() => {
        if (hasError) {
            toast.error(reserveError, {
                style: {
                    marginTop: "10px",
                    direction: "rtl",
                    width: "300px"
                }
            });
        }
        setHasError(false)

    }, [hasError])

    useEffect(() => {

        const fetchData = async () => {
            fetchDoctorReq({
                url: ApiRoutes.FETCH_DOCTORS + '/' + doctorId,
                method: "GET",
            }).then(res => {
                setDoctor(res.data)
                setConsultationTypes(res.data.consultationTypes)
                setDescription(res.data.description);
                setIsOnline(res.data.online);
            }).catch(e => {
                    console.log('error happens')
                }
            )
        }

        fetchData();
    }, [doctorId])


    const gotoLogin = () => {
        navigate("/login", {
            state: {
                doctorId
            }
        })
    }

    const closeModal = () => {
        setLoginModal(false)
    }


    return (
        <div className="w-[100%] bg-slate-100 flex justify-center">
            <div
                className="flex flex-col justify-center items-center bg-white relative mt-20 rounded-2xl border-[1px] border-solid border-gray-300 w-[90%] mb-10 md:hidden md:h-0 md:w-0 ">
                <DoctorProfileInfo doctor={doctor} isOnline={isOnline}/>
                <DoctorConsultationHistoryInfo doctor={doctor}/>
                {
                    hasTextConsultation &&
                    <DoctorTextConsultationInfo price={textConsultationPrice} id={textConsultationId}
                                                doctorId={doctorId} setLoginModal={setLoginModal}
                                                setReserveError={setReserveError} hasError={setHasError}/>
                }
                {
                    hasVoiceConsultation &&
                    <DoctorVoiceConsultationInfo price={voiceConsultationPrice} id={voiceConsultationId}/>
                }
                <DoctorAbout description={description}/>
                <DoctorScheduleList doctorId={doctorId}/>
            </div>
            <div
                className="hidden h-0 w-0 md:flex flex flex-row justify-center items-start md:w-[100%] md:h-max rounded-2xl">
                <div
                    className="bg-white mt-20 md:mr-5 xl:mr-10 xl:w-1/4 md:w-[20rem] rounded-2xl border-[1px] border-solid border-gray-300">
                    {
                        hasTextConsultation &&
                        <DoctorTextConsultationInfo price={textConsultationPrice} id={textConsultationId}
                                                    doctorId={doctorId} setLoginModal={setLoginModal}
                                                    setReserveError={setReserveError}/>
                    }
                    {
                        hasVoiceConsultation &&
                        <DoctorVoiceConsultationInfo price={voiceConsultationPrice} id={voiceConsultationId}/>
                    }
                </div>
                <div
                    className="flex flex-col justify-center items-center bg-white relative mt-20 rounded-2xl border-[1px] border-solid border-gray-300 xl:w-2/3 mb-10 md:w-[55%]">
                    <DoctorProfileInfo doctor={doctor} isOnline={isOnline}/>
                    <DoctorConsultationHistoryInfo doctor={doctor}/>
                    <DoctorAbout description={description}/>
                    <DoctorScheduleList doctorId={doctorId}/>
                </div>
            </div>
            <div
                className={showLoginModal ? 'modal fade bg-opacity-50 bg-gray-400 fixed left-0 flex justify-center bottom-0 w-screen h-screen outline-none overflow-x-hidden' : 'hidden'}
                id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog relative top-80 w-4/5 md:w-[530px] pointer-events-none">
                    <div
                        className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div
                            className="modal-header flex flex-shrink-0 items-center justify-end p-4 border-b border-gray-200 rounded-t-md">
                            <h5 className="text-xl font-medium leading-normal text-gray-800"
                                id="exampleModalLabel">احراز هویت</h5>
                            <button type="button"
                                    className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                    data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body relative text-l p-4 h-20 rtl">
                            برای رزرو کردن مشاوره ابتدا باید وارد شوید!
                        </div>
                        <div
                            className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 rounded-b-md">
                            <button onClick={closeModal} type="button"
                                    className="px-6 py-2.5 bg-red-400 text-white font-medium text-xs md:text-m leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                                    data-bs-dismiss="modal">
                                بستن
                            </button>
                            <button type="button" onClick={gotoLogin}
                                    className="px-6 py-2.5 bg-green-500 text-white font-medium text-xs md:text-m leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-15 ease-in-out ml-1">
                                رفتن به صفحه ورود
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster/>
        </div>
    )
}

export default DoctorProfile;