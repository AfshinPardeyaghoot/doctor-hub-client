import {useState} from "react";
import closeIcon from "../../../static/icon/close2.png";

import useAuthRequest from "../../../hook/useAuthRequest";
import ApiRoutes from "../../../config/ApiRoutes";

function DashboardSpecialityAddModal({
                                         showAddModal,
                                         closeAddSpecialityModal,
                                         setShowToast,
                                         setIsErrorToast,
                                         setToastMsg
                                     }) {

    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [hasNameError, setHasNameError] = useState(false);
    const [hasTitleError, setHasTitleError] = useState(false);
    const [addSpecialityReq, {error}] = useAuthRequest();

    const handleNameChange = (value) => {
        if (value === '') {
            setHasNameError(true)
        } else {
            setHasNameError(false)
            setName(value)
        }
    }

    const handleTitleChange = (value) => {
        if (value === '') {
            setHasTitleError(true)
        } else {
            setHasTitleError(false)
            setTitle(value)
        }
    }

    const add = async () => {
        addSpecialityReq({
            url: ApiRoutes.ADD_SPECIALITY,
            method: 'POST',
            data: {
                name: name,
                title: title
            }
        }).then(res => {
            closeAddSpecialityModal();
            setIsErrorToast(false)
            setToastMsg('تخصص جدید اضافه شد!')
            setShowToast(true)
        }).catch(exp => {
            closeAddSpecialityModal();
            setIsErrorToast(true)
            setToastMsg(error ? error : 'مشکلی در ذخیره تخصص بوجود آمده است. لطفا با پشتیبانی تماس بگیرید!')
            setShowToast(true)
        })
    }

    return (
        <div
            className={showAddModal ? 'modal fade bg-opacity-50 bg-gray-400 fixed left-0 flex justify-center bottom-0 w-screen h-screen outline-none overflow-x-hidden' : 'hidden'}
            id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog relative top-44 w-4/5 md:w-[530px] pointer-events-none">
                <div
                    className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div
                        className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                        <div className='flex justify-end px-4'>
                            <img className='h-4 w-4 cursor-pointer' onClick={closeAddSpecialityModal} src={closeIcon}
                                 alt={'error'}/>
                        </div>
                        <h5 className="text-xl font-medium leading-normal text-gray-800"
                            id="exampleModalLabel">تخصص جدید</h5>
                    </div>
                    <div className='px-10'>
                        <label className="w-full flex justify-start text-gray-700 text-[15px] mb-2 px-2.5 pt-5 rtl"
                               htmlFor='name'>
                            نام<span className='text-red-400 px-1'>*</span>
                        </label>
                        <input id='name'
                               placeholder={'مثلا dentist'}
                               onFocus={() => handleNameChange(name)}
                               className={!hasNameError ? 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none transition ease-in-out focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 py-4 rtl'
                                   : 'bg-gray-50 border border-red-500 text-gray-900 text-sm rounded-lg focus:outline-none transition ease-in-out focus:ring-emerald-500 focus:border-red-500 block w-full p-2.5 py-4 rtl'}
                               type={"text"}
                               onChange={(e) => handleNameChange(e.target.value)}/>
                        <div
                            className={hasNameError ? 'w-full flex justify-start rtl px-2.5 py-1 text-[12px] text-red-600' : 'w-full invisible justify-start rtl px-2.5 py-1 text-[12px] text-red-600'}>
                            {'لطفا نام تخصص را وارد کنید!'}
                        </div>

                        <label className="w-full flex justify-start text-gray-700 text-[15px] mb-2 px-2.5 pt-5 rtl"
                               htmlFor='title'>
                            عنوان فارسی<span className='text-red-400 px-1'>*</span>
                        </label>
                        <input id='title'
                               placeholder={'مثلا دندانپزشک'}
                               onFocus={() => handleTitleChange(title)}
                               className={!hasTitleError ? 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none transition ease-in-out focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 py-4 rtl'
                                   : 'bg-gray-50 border border-red-500 text-gray-900 text-sm rounded-lg focus:outline-none transition ease-in-out focus:ring-emerald-500 focus:border-red-500 block w-full p-2.5 py-4 rtl'}
                               type={"text"}
                               onChange={(e) => handleTitleChange(e.target.value)}/>
                        <div
                            className={hasTitleError ? 'w-full flex justify-start rtl px-2.5 py-1 text-[12px] text-red-600' : 'w-full invisible justify-start rtl px-2.5 py-1 text-[12px] text-red-600'}>
                            {'لطفا عنوان فارسی تخصص را وارد کنید!'}
                        </div>
                        <div
                            className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 pt-12  rounded-b-md">
                            <button onClick={add} type="button"
                                    className="px-6 py-2.5 bg-emerald-500 text-white font-medium text-xs md:text-m leading-tight uppercase rounded shadow-md hover:bg-emerald-700 hover:shadow-lg focus:bg-emerald-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-800 active:shadow-lg transition duration-150 ease-in-out"
                                    data-bs-dismiss="modal">
                                اضافه کردن
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardSpecialityAddModal;