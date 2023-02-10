import {useState} from "react";
import closeIcon from '../../static/icon/close.png';
import {useNavigate} from "react-router-dom";
import useAuthRequest from "../../hook/useAuthRequest";
import ApiRoutes from "../../config/ApiRoutes";

function ConsultationRate({consultationId, setIsRateModalOpen}) {

    const [rate, setRate] = useState(null)
    const navigate = useNavigate();
    const [sendRateReq] = useAuthRequest();
    const [firsStarColor, setFirsStarColor] = useState('text-gray-300');
    const [secondStarColor, setSecondStarColor] = useState('text-gray-300');
    const [thirdStarColor, setThirdStarColor] = useState('text-gray-300');
    const [forthStarColor, setForthStarColor] = useState('text-gray-300');
    const [fifthStarColor, setFifthStarColor] = useState('text-gray-300');

    const handleFirstStarSelect = () => {
        setRate(1);
        setFirsStarColor('text-yellow-400')
        setSecondStarColor('text-gray-300')
        setThirdStarColor('text-gray-300')
        setForthStarColor('text-gray-300')
        setFifthStarColor('text-gray-300')
    }

    const handleSecondStarSelect = () => {
        setRate(2);
        setFirsStarColor('text-yellow-400')
        setSecondStarColor('text-yellow-400')
        setThirdStarColor('text-gray-300')
        setForthStarColor('text-gray-300')
        setFifthStarColor('text-gray-300')
    }

    const handleThirdStarSelect = () => {
        setRate(3);
        setFirsStarColor('text-yellow-400')
        setSecondStarColor('text-yellow-400')
        setThirdStarColor('text-yellow-400')
        setForthStarColor('text-gray-300')
        setFifthStarColor('text-gray-300')
    }

    const handleForthStarSelect = () => {
        setRate(4);
        setFirsStarColor('text-yellow-400')
        setSecondStarColor('text-yellow-400')
        setThirdStarColor('text-yellow-400')
        setForthStarColor('text-yellow-400')
        setFifthStarColor('text-gray-300')
    }

    const handleFifthStarSelect = () => {
        setRate(5);
        setFirsStarColor('text-yellow-400')
        setSecondStarColor('text-yellow-400')
        setThirdStarColor('text-yellow-400')
        setForthStarColor('text-yellow-400')
        setFifthStarColor('text-yellow-400')
    }

    const closeModal = () => {
        setIsRateModalOpen(false)
        navigate('/consultations')
    }

    const sendRateRequest = () => {
        sendRateReq({
            url: ApiRoutes.FETCH_CONSULTATION + '/rate',
            method: 'POST',
            data: {
                rate: rate,
                consultationId: consultationId
            }
        })
        navigate('/consultations')
    }

    return (
        <>
            <div
                className={'fixed top-1/3 m-4 left-0 items-center text-s text-neutral-100 justify-center border-2 bg-emerald-500 rounded-lg  border-solid border-emerald-500 right-0 z-50 py-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal'}>
                <div className='text-m border-b-[1px] flex pb-4 font-bold border-solid border-emerald-300'>
                    <div className='w-1/3'>

                    </div>
                    <div className='w-1/3'>
                        نظرسنجی
                    </div>
                    <div className='w-1/3 flex justify-end px-4' onClick={closeModal}>
                        <img className='h-4 w-4 cursor-pointer' src={closeIcon} alt={'error'}/>
                    </div>
                </div>
                <div className='p-4 px-20 rtl'>
                    میتونی میزان رضایتت از پزشک رو ثبت کنی تا به بقییه تو انتخابشون کمک کنی.
                </div>
                <div className="flex items-center justify-center w-full">
                    <svg aria-hidden="true" onClick={handleFirstStarSelect} className={'w-7 h-7 ' + firsStarColor}
                         fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg"><title>First star</title>
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg aria-hidden="true" onClick={handleSecondStarSelect} className={'w-7 h-7 ' + secondStarColor}
                         fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg"><title>Second star</title>
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg aria-hidden="true" onClick={handleThirdStarSelect} className={'w-7 h-7 ' + thirdStarColor}
                         fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg"><title>Third star</title>
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg aria-hidden="true" onClick={handleForthStarSelect} className={'w-7 h-7 ' + forthStarColor}
                         fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title>
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg aria-hidden="true" onClick={handleFifthStarSelect} className={'w-7 h-7 ' + fifthStarColor}
                         fill="currentColor"
                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title>
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                </div>
                <div className='w-full px-4 pt-8'>
                    <button className='bg-white text-emerald-700 p-2 rounded-lg w-full' onClick={sendRateRequest}>
                        ثبت امتیاز
                    </button>
                </div>
            </div>
            <div className={'h-full w-full fixed top-0 bottom-0 right-0 left-0 opacity-75 bg-neutral-200 z-10'}>

            </div>
        </>
    )
}

export default ConsultationRate;