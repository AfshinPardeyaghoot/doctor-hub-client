import {useLocation, useNavigate} from "react-router-dom";
import useAuthRequest from "../../../hook/useAuthRequest";
import {useEffect, useState} from "react";
import ApiRoutes from "../../../config/ApiRoutes";
import {toast, Toaster} from "react-hot-toast";
import backIcon from "../../../static/icon/back.png";
import closeIcon from "../../../static/icon/close2.png";
import addIcon from "../../../static/icon/plus.png";


function DashboardCategoryEdit() {

    const navigate = useNavigate();
    const {state} = useLocation();
    const {id} = state;
    const [updateCategoryReq] = useAuthRequest();
    const [fetchAllSpecialitiesReq] = useAuthRequest();
    const [fetchCategoryFullInfoReq] = useAuthRequest();
    const [category, setCategory] = useState({
        id: null,
        name: null,
        title: null,
        fullTitle: null,
        description: null,
        imageDownloadUrl: null,
        specialities: []
    });

    const [showAddModal, setShowAddModal] = useState(false);

    const [name, setName] = useState(null);
    const [hasNameError, setHasNameError] = useState(false)

    const [title, setTitle] = useState(null);
    const [hasTitleError, setTitleHasError] = useState(false)

    const [fullTitle, setFullTitle] = useState(null);
    const [hasFullTitleError, setHasFullTitleError] = useState(false)

    const [description, setDescription] = useState(false);
    const [hasDescriptionError, setHasDescriptionError] = useState(null)

    const [specialities, setSpecialities] = useState([])
    const [optionSpecialities, setOptionSpecialities] = useState([])

    const [image, setImage] = useState(false)


    const closeAddModal = () => {
        setShowAddModal(false)
    }

    const openAddModal = () => {
        setShowAddModal(true)
    }
    const navigateHome = () => {
        navigate('/dashboard')
    }

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
            setTitleHasError(true)
        } else {
            setTitleHasError(false)
            setTitle(value)
        }
    }

    const handleFullTitleChange = (value) => {
        if (value === '') {
            setHasFullTitleError(true)
        } else {
            setHasFullTitleError(false)
            setFullTitle(value)
        }
    }

    const handleDescriptionChange = (value) => {
        if (value === '') {
            setHasDescriptionError(true)
        } else {
            setHasDescriptionError(false)
            setDescription(value)
        }
    }


    useEffect(() => {
        fetchCategoryFullInfoReq({
            url: ApiRoutes.FETCH_CATEGORIES + '/' + id + '/full',
            method: 'GET'

        }).then(res => {
            setCategory(res.data);
            setName(category.firstName);
            setTitle(category.lastName);
            setFullTitle(category.fullTitle);
            setDescription(category.description)
            setImage(category.imageDownloadUrl)
            setSpecialities(category.specialities)
        })

    }, [])

    useEffect(() => {
        fetchAllSpecialitiesReq({
            url: ApiRoutes.FETCH_ALL_SPECIALITIES + '/all',
            method: 'GET'
        }).then(res => {
            setOptionSpecialities(res.data)
        })
    }, [])


    return (
        <div className='flex flex-col items-center w-full h-full'>
            <Toaster/>
            <div className="flex flex-col justify-between items-start p-5 w-full max-w-screen-lg h-full">
                <div className='w-full flex flex-col'>
                    <div className=''>
                        <div onClick={navigateHome}>
                            <img className='w-6 h-6 cursor-pointer' src={backIcon} alt={'error'}/>
                        </div>
                    </div>

                    <div className='mt-5 w-full p-2.5 rtl'>
                        ویرایش دسته بندی
                    </div>

                    <label className="w-full flex justify-start text-gray-700 text-[15px] mt-10 mb-1 px-2.5 rtl"
                           htmlFor='name'>
                        نام<span className='text-red-400 px-1'>*</span>
                    </label>
                    <input id='name'
                           className={!hasNameError ? 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none transition ease-in-out focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 py-4 rtl'
                               : 'bg-gray-50 border border-red-500 text-gray-900 text-sm rounded-lg focus:outline-none transition ease-in-out focus:ring-emerald-500 focus:border-red-500 block w-full p-2.5 py-2 rtl'}
                           type={"text"}
                           onChange={(e) => handleNameChange(e.target.value)}
                           defaultValue={category.name}/>

                    <div
                        className={hasNameError ? 'w-full flex justify-start rtl px-2.5 py-1 text-[12px] text-red-600' : 'w-full invisible justify-start rtl px-2.5 py-1 text-[12px] text-red-600'}>
                        نام دسته بندی را وارد کنید!
                    </div>


                    <label className="w-full flex justify-start text-gray-700 text-[15px] mb-1 px-2.5 pt-2 rtl"
                           htmlFor='title'>
                        عنوان<span className='text-red-400 px-1'>*</span>
                    </label>
                    <input id='title'
                           className={!hasTitleError ? 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none transition ease-in-out focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 py-4 rtl'
                               : 'bg-gray-50 border border-red-500 text-gray-900 text-sm rounded-lg focus:outline-none transition ease-in-out focus:ring-emerald-500 focus:border-red-500 block w-full p-2.5 py-2 rtl'}
                           type={"text"}
                           onChange={(e) => handleTitleChange(e.target.value)}
                           defaultValue={category.title}/>

                    <div
                        className={hasTitleError ? 'w-full flex justify-start rtl px-2.5 py-1 text-[12px] text-red-600' : 'w-full invisible justify-start rtl px-2.5 py-1 text-[12px] text-red-600'}>
                        عنوان را وارد کنید!
                    </div>

                    <label className="w-full flex justify-start text-gray-700 text-[15px] mb-1 px-2.5 pt-2 rtl"
                           htmlFor='fullTitle'>
                        عنوان کامل<span className='text-red-400 px-1'>*</span>
                    </label>
                    <input id='fullTitle'
                           className={!hasFullTitleError ? 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none transition ease-in-out focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 py-4 rtl'
                               : 'bg-gray-50 border border-red-500 text-gray-900 text-sm rounded-lg focus:outline-none transition ease-in-out focus:ring-emerald-500 focus:border-red-500 block w-full p-2.5 py-2 rtl'}
                           type={"text"}
                           onChange={(e) => handleFullTitleChange(e.target.value)}
                           defaultValue={category.fullTitle}/>

                    <div
                        className={hasFullTitleError ? 'w-full flex justify-start rtl px-2.5 py-1 text-[12px] text-red-600' : 'w-full invisible justify-start rtl px-2.5 py-1 text-[12px] text-red-600'}>
                        عنوان کامل را وارد کنید!
                    </div>

                    <label className="w-full flex justify-start text-gray-700 text-[15px] mb-1 px-2.5 pt-2 rtl"
                           htmlFor='description'>
                        توضیحات<span className='text-red-400 px-1'>*</span>
                    </label>
                    <input id='description'
                           className={!hasDescriptionError ? 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none transition ease-in-out focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 py-4 rtl'
                               : 'bg-gray-50 border border-red-500 text-gray-900 text-sm rounded-lg focus:outline-none transition ease-in-out focus:ring-emerald-500 focus:border-red-500 block w-full p-2.5 py-2 rtl'}
                           type={"text"}
                           onChange={(e) => handleDescriptionChange(e.target.value)}
                           defaultValue={category.description}/>

                    <div
                        className={hasDescriptionError ? 'w-full flex justify-start rtl px-2.5 py-1 text-[12px] text-red-600' : 'w-full invisible justify-start rtl px-2.5 py-1 text-[12px] text-red-600'}>
                        توضیحات را وارد کنید!
                    </div>

                    <label className="w-full flex justify-start text-gray-700 text-[15px] mb-1 px-2.5 pt-2 rtl"
                           htmlFor='description'>
                        تخصص ها<span className='text-red-400 px-1'></span>
                    </label>
                    <div className='w-full flex flex-wrap rtl items-start justify-start'>
                        <div>
                            <img src={addIcon} onClick={openAddModal}
                                 className='w-8 h-8 bg-emerald-500  p-2 m-2 object-cover border-2 border-double border-emerald-500 hover:border-white cursor-pointer'
                                 alt={'error'}/>
                        </div>
                        {
                            category.specialities &&
                            category.specialities.map((speciality) =>
                                <div
                                    className='p-2 text-s text-gray-600 border-[1px] border-emerald-500 rtl border-solid rounded-lg m-2 flex flex-row justify-center items-center'>
                                    {speciality.title}
                                    <img src={closeIcon} alt={'error'}
                                         className='w-3 h-3 object-cover mr-4 cursor-pointer'/>
                                </div>
                            )
                        }
                    </div>

                </div>
                <button
                    className='p-4 rounded-lg w-full text-center bg-emerald-500 text-white'>ثبت تغییرات
                </button>
            </div>
            <div
                className={showAddModal ? 'modal fade bg-opacity-50 bg-gray-400 fixed left-0 flex justify-center bottom-0 w-screen h-screen outline-none overflow-x-hidden' : 'hidden'}
                id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog relative top-44 w-4/5 md:w-[530px] pointer-events-none">
                    <div
                        className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div
                            className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                            <div className='flex justify-end px-4'>
                                <img className='h-4 w-4 cursor-pointer' onClick={closeAddModal} src={closeIcon}
                                     alt={'error'}/>
                            </div>
                            <h5 className="text-xl font-medium leading-normal text-gray-800"
                                id="exampleModalLabel">اضافه کردن تخصص</h5>
                        </div>
                        <div className='w-full flex  p-5 items-center justify-center'>
                            <div>
                                <div onClick={openAddModal}
                                     className='p-2 mx-2 py-1 rounded-lg bg-emerald-500 text-white object-cover border-2 border-double border-emerald-500 hover:border-white cursor-pointer'>
                                    ثبت
                                </div>
                            </div>
                            <div className='w-4/5 rtl'>
                                <select
                                    className="block py-2.5 px-0  text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                    <option selected className='bg-emerald-500'>یک تخصص را انتخاب کنید</option>
                                    {
                                        optionSpecialities &&
                                        optionSpecialities.map((speciality) => <option>{speciality.title}</option>)
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardCategoryEdit;