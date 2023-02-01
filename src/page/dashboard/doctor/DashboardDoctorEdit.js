import {useLocation, useNavigate} from "react-router-dom";
import useAuthRequest from "../../../hook/useAuthRequest";
import {useEffect, useState} from "react";
import ApiRoutes from "../../../config/ApiRoutes";
import {toast, Toaster} from "react-hot-toast";
import backIcon from "../../../static/icon/back.png";
import closeIcon from "../../../static/icon/close2.png";
import addIcon from "../../../static/icon/plus.png";
import uploadImageIcon from "../../../static/icon/edit.png";
import DoctorScheduleList from "../../doctor/profile/DoctorScheduleList";
import DoctorSchedule from "../../doctor/profile/DoctorSchedule";
import DashboardDoctorSchedule from "./DashboardDoctorSchedule";

function DashboardDoctorEdit() {


    const navigate = useNavigate();
    const {state} = useLocation();
    const {id} = state;
    const [updateDoctorReq, {error}] = useAuthRequest();
    const [fetchDoctorInfoReq] = useAuthRequest();
    const [fetchDoctorSchedulesReq] = useAuthRequest();
    const [fetchAllSpecialitiesReq] = useAuthRequest();
    const [optionSpecialities, setOptionSpecialities] = useState();
    const [doctorSchedules, setDoctorSchedules] = useState([]);
    const [doctor, setDoctor] = useState({
        id: null,
        firstName: null,
        lastName: null,
        phone: null,
        description: null,
        gmcNumber: null,
        speciality: null,
        profileImage: null,
    });

    const [firstName, setFirstName] = useState(null);
    const [hasFirstNameError, setHasFirstNameError] = useState(false);

    const [lastName, setLastName] = useState(null);
    const [hasLastNameError, setHasLastNameError] = useState(false);

    const [phone, setPhone] = useState(null);
    const [hasPhoneError, setHasPhoneError] = useState(false);

    const [description, setDescription] = useState(null);
    const [hasDescriptionError, setHasDescriptionError] = useState(false);

    const [gmcNumber, setGmcNumber] = useState(null);
    const [hasGmcNumberError, setHasGmcNumberError] = useState(false);

    const [speciality, setSpeciality] = useState(null);
    const [hasSpecialityError, setHasSpecialityError] = useState(false);

    const [showAddModal, setShowAddModal] = useState(false);

    const [profileImage, setProfileImage] = useState(null);
    const [imageFile, setImageFile] = useState(null);


    const navigateHome = () => {
        navigate('/dashboard')
    }

    const deleteImage = () => {
        setProfileImage(null)
    }

    const addImage = (file) => {
        setImageFile(file)
        const objectUrl = URL.createObjectURL(file)
        setProfileImage(objectUrl)

    }


    const handleFirstNameChange = (value) => {
        if (value === '') {
            setHasFirstNameError(true)
        } else {
            setHasFirstNameError(false)
            setFirstName(value)
        }
    }

    const handleLastNameChange = (value) => {
        if (value === '') {
            setHasLastNameError(true)
        } else {
            setHasLastNameError(false)
            setLastName(value)
        }
    }

    const handlePhoneChange = (value) => {
        if (value === '') {
            setHasPhoneError(true)
        } else {
            setHasPhoneError(false)
            setPhone(value)
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

    const handleGmcNumberChange = (value) => {
        if (value === '') {
            setHasGmcNumberError(true)
        } else {
            setHasGmcNumberError(false)
            setGmcNumber(value)
        }
    }


    useEffect(() => {
        fetchDoctorInfoReq({
            url: ApiRoutes.FETCH_DOCTORS + '/' + id + '/' + 'full',
            method: 'GET'

        }).then(res => {
            setDoctor(res.data)
            setFirstName(doctor.firstName);
            setLastName(doctor.lastName);
            setPhone(doctor.fullTitle);
            setDescription(doctor.description)
            setProfileImage(res.data.profileImage)
            setSpeciality(res.data.speciality)
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

    useEffect(() => {

        const fetchData = async () => {
            fetchDoctorSchedulesReq({
                url: ApiRoutes.FETCH_DOCTOR_SCHEDULES + '/' + id,
                method: "GET",
            }).then(res => {
                setDoctorSchedules(res.data)
            })
        }

        fetchData();
    }, [id])


    return (
        <div className='flex flex-col items-center w-full h-full'>
            <Toaster/>
            <div
                className="flex flex-col justify-between items-start p-5 w-full max-w-screen-lg  mb-10">
                <div className='w-full flex flex-col '>
                    <div className=''>
                        <div onClick={navigateHome}>
                            <img className='w-6 h-6 cursor-pointer' src={backIcon} alt={'error'}/>
                        </div>
                    </div>

                    <div className='mt-5 w-full p-2.5 rtl flex justify-start'>
                        ویرایش پزشک
                    </div>

                    <div className='flex flex-row justify-center my-2'>
                        {profileImage &&
                            <div
                                className='m-3 flex flex-col items-end justify-start p-1'>
                                <img src={profileImage} alt={'error'}
                                     className='h-16 w-16 rounded-full outline-double outline-4 outline-neutral-600 object-cover'/>
                                <input type="file" className="hidden" id="image"
                                       onChange={(e) => addImage(e.target.files[0])}/>
                                <label htmlFor="image"
                                       className={'rounded-full p-1 bg-neutral-600 opacity-90 relative bottom-4'}>
                                    <img className="h-4 w-4 cursor-pointer" src={uploadImageIcon} alt="error"/>
                                </label>
                            </div>

                        }
                    </div>

                    <label className="w-full flex justify-start text-gray-700 text-[15px] mb-1 px-2.5 rtl"
                           htmlFor='firstName'>
                        نام<span className='text-red-400 px-1'>*</span>
                    </label>
                    <input id='firstName'
                           disabled={true}
                           className={!hasFirstNameError ? 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none transition ease-in-out focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 py-2 rtl'
                               : 'bg-gray-50 border border-red-500 text-gray-900 text-sm rounded-lg focus:outline-none transition ease-in-out focus:ring-emerald-500 focus:border-red-500 block w-full p-2.5 py-2 rtl'}
                           type={"text"}
                           onChange={(e) => handleFirstNameChange(e.target.value)}
                           defaultValue={doctor.firstName}/>

                    <div
                        className={hasFirstNameError ? 'w-full flex justify-start rtl px-2.5 py-1 text-[12px] text-red-600' : 'w-full invisible justify-start rtl px-2.5 py-1 text-[12px] text-red-600'}>
                        نام پزشک را وارد کنید!
                    </div>


                    <label className="w-full flex justify-start text-gray-700 text-[15px] mb-1 px-2.5 pt-2 rtl"
                           htmlFor='lastName'>
                        نام خانوادگی<span className='text-red-400 px-1'>*</span>
                    </label>
                    <input id='lastName'
                           className={!hasLastNameError ? 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none transition ease-in-out focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 py-2 rtl'
                               : 'bg-gray-50 border border-red-500 text-gray-900 text-sm rounded-lg focus:outline-none transition ease-in-out focus:ring-emerald-500 focus:border-red-500 block w-full p-2.5 py-2 rtl'}
                           type={"text"}
                           onChange={(e) => handleLastNameChange(e.target.value)}
                           defaultValue={doctor.lastName}/>

                    <div
                        className={hasLastNameError ? 'w-full flex justify-start rtl px-2.5 py-1 text-[12px] text-red-600' : 'w-full invisible justify-start rtl px-2.5 py-1 text-[12px] text-red-600'}>
                        نام خوانوادگی پزشک را وارد کنید!
                    </div>

                    <label className="w-full flex justify-start text-gray-700 text-[15px] mb-1 px-2.5 pt-2 rtl"
                           htmlFor='phone'>
                        شماره تلفن<span className='text-red-400 px-1'>*</span>
                    </label>
                    <input id='phone'
                           className={!hasPhoneError ? 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none transition ease-in-out focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 py-2 rtl'
                               : 'bg-gray-50 border border-red-500 text-gray-900 text-sm rounded-lg focus:outline-none transition ease-in-out focus:ring-emerald-500 focus:border-red-500 block w-full p-2.5 py-2 rtl'}
                           type={"tel"}
                           onChange={(e) => handlePhoneChange(e.target.value)}
                           defaultValue={doctor.phone}/>

                    <div
                        className={hasPhoneError ? 'w-full flex justify-start rtl px-2.5 py-1 text-[12px] text-red-600' : 'w-full invisible justify-start rtl px-2.5 py-1 text-[12px] text-red-600'}>
                        شماره تلفن را وارد کنید!
                    </div>


                    <label className="w-full flex justify-start text-gray-700 text-[15px] mb-1 px-2.5 pt-2 rtl"
                           htmlFor='description'>
                        توضیحات<span className='text-red-400 px-1'>*</span>
                    </label>
                    <textarea id="description" rows="4"
                              className={!hasDescriptionError ? 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none transition ease-in-out focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 py-2 rtl'
                                  : 'bg-gray-50 border border-red-500 text-gray-900 text-sm rounded-lg focus:outline-none transition ease-in-out focus:ring-emerald-500 focus:border-red-500 block w-full p-2.5 py-2 rtl'}
                              placeholder="مثل سوابق ، محل تحصیل و ..."
                              onChange={(e) => handleDescriptionChange(e.target.value)}
                              defaultValue={doctor.description}></textarea>
                    <div
                        className={hasDescriptionError ? 'w-full flex justify-start rtl px-2.5 py-1 text-[12px] text-red-600' : 'w-full invisible justify-start rtl px-2.5 py-1 text-[12px] text-red-600'}>
                        توضیحات را وارد کنید!
                    </div>

                    <label className="w-full flex justify-start text-gray-700 text-[15px] mb-1 px-2.5 pt-2 rtl"
                           htmlFor='description'>
                        تخصص <span className='text-red-400 px-1'>*</span>
                    </label>
                    <div className='w-full rtl flex justify-start px-2.5 mb-5'>
                        <select onChange={(e) => setSpeciality(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none transition ease-in-out focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 py-2 rtl">
                            {
                                optionSpecialities &&
                                optionSpecialities.map((s) =>
                                    <option value={s.id}
                                            selected={(speciality && s.id === speciality.id) ? true : false}>
                                        {s.title}
                                    </option>
                                )
                            }
                        </select>
                    </div>

                    <label className="w-full flex justify-start text-gray-700 text-[15px] mb-1 px-2.5 pt-2 rtl"
                           htmlFor='description'>
                        برنامه هفتگی<span className='text-red-400 px-1'></span>
                    </label>
                    <div className="w-[100%] flex flex-col items-end justify-end px-2.5 mb-10">
                        {doctorSchedules &&
                            doctorSchedules.map((schedule) => {
                                return <DashboardDoctorSchedule schedule={schedule}/>
                            })
                        }
                        <div>
                            <img src={addIcon}
                                 className='w-8 h-8 bg-emerald-500  p-2 m-2 object-cover border-2 border-double border-emerald-500 hover:border-white cursor-pointer'
                                 alt={'error'}/>
                        </div>
                    </div>

                </div>
                <button
                    className='p-4 rounded-lg w-full text-center bg-emerald-500 text-white'>ثبت تغییرات
                </button>
            </div>
            {/*/!*<div*!/*/}
            {/*/!*    className={showAddModal ? 'modal fade bg-opacity-50 bg-gray-400 fixed left-0 flex justify-center bottom-0 w-screen h-screen outline-none overflow-x-hidden' : 'hidden'}*!/*/}
            {/*/!*    id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">*!/*/}
            {/*/!*    <div className="modal-dialog relative top-44 w-4/5 md:w-[530px] pointer-events-none">*!/*/}
            {/*/!*        <div*!/*/}
            {/*/!*            className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">*!/*/}
            {/*/!*            <div*!/*/}
            {/*/!*                className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">*!/*/}
            {/*/!*                <div className='flex justify-end px-4'>*!/*/}
            {/*/!*                    <img className='h-4 w-4 cursor-pointer' onClick={closeAddModal} src={closeIcon}*!/*/}
            {/*/!*                         alt={'error'}/>*!/*/}
            {/*/!*                </div>*!/*/}
            {/*/!*                <h5 className="text-xl font-medium leading-normal text-gray-800"*!/*/}
            {/*/!*                    id="exampleModalLabel">اضافه کردن تخصص</h5>*!/*/}
            {/*/!*            </div>*!/*/}
            {/*/!*            <div className='w-full flex  p-5 items-center justify-center'>*!/*/}
            {/*/!*                <div>*!/*/}
            {/*/!*                    <div onClick={addSpeciality}*!/*/}
            {/*/!*                         className='p-2 mx-2 py-1 rounded-lg bg-emerald-500 text-white object-cover border-2 border-double border-emerald-500 hover:border-white cursor-pointer'>*!/*/}
            {/*/!*                        ثبت*!/*/}
            {/*/!*                    </div>*!/*/}
            {/*/!*                </div>*!/*/}
            {/*/!*                <div className='w-4/5 rtl'>*!/*/}
            {/*/!*                    <select onChange={(e) => handleSelectOptionSpeciality(e.target.value)}*!/*/}
            {/*/!*                            className="block py-2.5 px-0  text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">*!/*/}
            {/*/!*                        <option selected className='bg-emerald-500'>یک تخصص را انتخاب کنید</option>*!/*/}
            {/*/!*                        {*!/*/}
            {/*/!*                            optionSpecialities &&*!/*/}
            {/*/!*                            optionSpecialities.map((speciality) =>*!/*/}
            {/*/!*                                <option value={speciality.id}>*!/*/}
            {/*/!*                                    {speciality.title}*!/*/}
            {/*/!*                                </option>*!/*/}
            {/*/!*                            )*!/*/}
            {/*/!*                        }*!/*/}
            {/*/!*                    </select>*!/*/}
            {/*/!*                </div>*!/*/}
            {/*/!*            </div>*!/*/}
            {/*/!*        </div>*!/*/}
            {/*/!*    </div>*!/*/}
            {/*</div>*/}
        </div>
    )
}

export default DashboardDoctorEdit;