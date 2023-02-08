import {useNavigate} from "react-router-dom";
import useAuthRequest from "../../../hook/useAuthRequest";
import {useEffect, useState} from "react";
import ApiRoutes from "../../../config/ApiRoutes";
import {toast, Toaster} from "react-hot-toast";
import backIcon from "../../../static/icon/back.png";
import uploadImageIcon from "../../../static/icon/edit.png";
import DashboardDoctorSchedule from "./DashboardDoctorSchedule";
import addIcon from "../../../static/icon/plus.png";
import closeIcon from "../../../static/icon/close2.png";

function DashboardDoctorAdd() {


    const navigate = useNavigate();
    const [updateDoctorReq, {error}] = useAuthRequest();
    const [sendUpdateSchedulesReq] = useAuthRequest();
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

    const [price, setPrice] = useState(null);
    const [hasPriceError, setHasPriceError] = useState(false);

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

    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();
    const [day, setDay] = useState('SAT');

    const addSchedule = () => {
        setDoctorSchedules([...doctorSchedules.filter(schedule => schedule.day !== day), {
            startHour: startTime,
            endHour: endTime,
            day: day
        }])
        setShowAddModal(false)
    }

    const deleteSchedule = (d) => {
        setDoctorSchedules([...doctorSchedules.filter(schedule => schedule.day !== d)])
    }


    const navigateHome = () => {
        navigate('/dashboard')
    }

    const handleDayChange = (value) => {
        setDay(value)
    }
    const closeAddModal = () => {
        setShowAddModal(false)
    }

    const openAddModal = () => {
        setShowAddModal(true)
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

    const handlePrice = (value) => {
        if (value === '') {
            setHasPriceError(true)
        } else {
            setHasPriceError(false)
            setPrice(value)
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

    const handleStartTimeChange = (value) => {
        setStartTime(value)
    }

    const handleEndTimeChange = (value) => {
        setEndTime(value)
    }

    useEffect(() => {
        fetchAllSpecialitiesReq({
            url: ApiRoutes.FETCH_ALL_SPECIALITIES + '/all',
            method: 'GET'
        }).then(res => {
            setOptionSpecialities(res.data)
        })
    }, [])

    const checkValuesNotEmpty = () => {
        if (firstName === null || firstName === '') {
            setHasFirstNameError(true)
            errorToast('نام را وارد کنید!')
            return true;
        } else if (lastName === null || lastName === '') {
            setHasLastNameError(true)
            errorToast('نام خانوادگی را وارد کنید!')
            return true;
        } else if (gmcNumber === null || gmcNumber === '') {
            setHasGmcNumberError(true)
            errorToast('شماره نظام پزشکی را وارد کنید!')
            return true;
        } else if (description === null || description === '') {
            setHasDescriptionError(true)
            errorToast('توضیحات را وارد کنید!')
            return true;
        } else if (phone === null || phone === '') {
            setHasPhoneError(true)
            errorToast('شماره را وارد کنید!')
            return true;
        } else if (profileImage === null) {
            errorToast('تصویر پروفایل را وارد کنید!')
            return true;
        } else if (speciality === null) {
            errorToast('تخصص را وارد کنید!')
            return true;
        } else
            return false;
    }

    const errorToast = (msg) => {
        toast.error(msg, {
            style: {
                marginTop: "10px",
                direction: "rtl",
                width: "90%"
            },
        });
    }

    const applyAdd = () => {

        const hasError = checkValuesNotEmpty();

        if (!hasError) {
            const data = new FormData();
            data.append('phone', phone);
            data.append('firstname', firstName);
            data.append("price", price)
            data.append('lastname', lastName)
            data.append('description', description)
            data.append('gmcNumber', gmcNumber)
            data.append('specialityId', speciality)

            if (imageFile)
                data.append('profileImage', imageFile)

            updateDoctorReq({
                url: ApiRoutes.FETCH_DOCTORS,
                method: 'POST',
                data: data
            }).then(res => {
                const doctorID = res.data.id;
                updateDoctorReq({
                    url: ApiRoutes.FETCH_DOCTORS + '/' + doctorID + '/schedules',
                    method: 'PUT',
                    data: {
                        "schedules": doctorSchedules
                    }
                }).then(res => {
                }).catch(exp => {
                })
                toast.success("اطلاعات با موفقیت ثبت شد.", {
                    style: {
                        marginTop: "10px",
                        direction: "rtl",
                        width: "90%"
                    },
                });
            }).catch(exp => {
                toast.error(error, {
                    style: {
                        marginTop: "10px",
                        direction: "rtl",
                        width: "90%"
                    },
                });
            })
        }
    }


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
                        اضافه کردن پزشک
                    </div>

                    <div className='flex flex-row justify-center my-2'>
                        {profileImage ?
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
                            </div> :
                            <div
                                className='m-3 flex flex-col items-end justify-start p-1'>
                                <div
                                    className='h-16 w-16 text-gray-400 text-[12px]  flex items-center rounded-full outline-double outline-4 outline-neutral-600 object-cover'>
                                    عکس پروفایل
                                </div>

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
                           className={!hasFirstNameError ? 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none transition ease-in-out focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 py-2 rtl'
                               : 'bg-gray-50 border border-red-500 text-gray-900 text-sm rounded-lg focus:outline-none transition ease-in-out focus:ring-emerald-500 focus:border-red-500 block w-full p-2.5 py-2 rtl'}
                           type={"text"}
                           onChange={(e) => handleFirstNameChange(e.target.value)}
                    />

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
                    />
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
                    />
                    <div
                        className={hasPhoneError ? 'w-full flex justify-start rtl px-2.5 py-1 text-[12px] text-red-600' : 'w-full invisible justify-start rtl px-2.5 py-1 text-[12px] text-red-600'}>
                        شماره تلفن را وارد کنید!
                    </div>

                    <label className="w-full flex justify-start text-gray-700 text-[15px] mb-1 px-2.5 pt-2 rtl"
                           htmlFor='gmcNumber'>
                        کد نظام پزشکی<span className='text-red-400 px-1'>*</span>
                    </label>
                    <input id='gmcNumber'
                           className={!hasGmcNumberError ? 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none transition ease-in-out focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 py-2 rtl'
                               : 'bg-gray-50 border border-red-500 text-gray-900 text-sm rounded-lg focus:outline-none transition ease-in-out focus:ring-emerald-500 focus:border-red-500 block w-full p-2.5 py-2 rtl'}
                           type={"text"}
                           onChange={(e) => handleGmcNumberChange(e.target.value)}
                    />
                    <div
                        className={hasGmcNumberError ? 'w-full flex justify-start rtl px-2.5 py-1 text-[12px] text-red-600' : 'w-full invisible justify-start rtl px-2.5 py-1 text-[12px] text-red-600'}>
                        شماره نظام پزشکی را وارد کنید!
                    </div>

                    <label className="w-full flex justify-start text-gray-700 text-[15px] mb-1 px-2.5 pt-2 rtl"
                           htmlFor='price'>
                        هزینه مشاوره متنی<span className='text-red-400 px-1'>*</span>
                    </label>
                    <input id='price'
                           className={!hasPriceError ? 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none transition ease-in-out focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 py-2 rtl'
                               : 'bg-gray-50 border border-red-500 text-gray-900 text-sm rounded-lg focus:outline-none transition ease-in-out focus:ring-emerald-500 focus:border-red-500 block w-full p-2.5 py-2 rtl'}
                           type={"number"}
                           onChange={(e) => handlePrice(e.target.value)}
                    />
                    <div
                        className={hasPriceError ? 'w-full flex justify-start rtl px-2.5 py-1 text-[12px] text-red-600' : 'w-full invisible justify-start rtl px-2.5 py-1 text-[12px] text-red-600'}>
                        هزینه مشاوره پزشک را وارد کنید!
                    </div>

                    <label className="w-full flex justify-start text-gray-700 text-[15px] mb-1 px-2.5 pt-2 rtl"
                           htmlFor='description'>
                        توضیحات<span className='text-red-400 px-1'>*</span>
                    </label>
                    <textarea id="description" rows="4"
                              className={!hasDescriptionError ? 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none transition ease-in-out focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 py-2 rtl'
                                  : 'bg-gray-50 border border-red-500 text-gray-900 text-sm rounded-lg focus:outline-none transition ease-in-out focus:ring-emerald-500 focus:border-red-500 block w-full p-3.5 py-2 rtl'}
                              placeholder="مثل سوابق ، محل تحصیل و ..."
                              onChange={(e) => handleDescriptionChange(e.target.value)}
                    ></textarea>
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
                                    <option value={s.id}>
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
                                return <DashboardDoctorSchedule schedule={schedule} deleteAction={deleteSchedule}/>
                            })
                        }
                        <div>
                            <img src={addIcon} onClick={openAddModal}
                                 className='w-8 h-8 bg-emerald-500  p-2 m-2 object-cover border-2 border-double border-emerald-500 hover:border-white cursor-pointer'
                                 alt={'error'}/>
                        </div>
                    </div>

                </div>
                <button
                    onClick={applyAdd}
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
                                id="exampleModalLabel">اضافه کردن برنامه هفتگی</h5>
                        </div>
                        <div className='w-full flex  p-5 items-center flex-col rtl '>
                            <div className='flex flex-col items-center '>
                                <div className={'my-2'}>
                                    <label
                                        className={'mx-3 border-[1px] text-gray-600 border-solid border-gray-300 rounded-lg p-1 bg-gray-100'}>روز</label>
                                    <select className={'px-3 rounded-lg'}
                                            onChange={(e) => handleDayChange(e.target.value)}>
                                        <option value={'SAT'} selected={true}>شنبه</option>
                                        <option value={'SUN'}>یکشنبه</option>
                                        <option value={'MON'}>دوشنبه</option>
                                        <option value={'TUE'}>سه شنبه</option>
                                        <option value={'WED'}>چهارشنبه</option>
                                        <option value={'THU'}>پنجشنبه</option>
                                        <option value={'FRI'}>جمعه</option>
                                    </select>
                                </div>
                                <div className='my-2'>
                                    <label htmlFor="startTime"
                                           className={'mx-3 border-[1px] text-gray-600 border-solid border-gray-300 rounded-lg p-1 bg-gray-100'}>شروع</label>
                                    <input type="time" id="startTime"
                                           onChange={(e) => handleStartTimeChange(e.target.value)}/>
                                </div>
                                <div className='my-2'>
                                    <label htmlFor="endTime"
                                           className={'mx-3 mx-3 border-[1px] text-gray-600 border-solid border-gray-300 rounded-lg p-1 bg-gray-100'}>پایان</label>
                                    <input type="time" id="endTime"
                                           onChange={(e) => handleEndTimeChange(e.target.value)}/>
                                </div>
                                <div onClick={addSchedule}
                                     className={'p-1  w-full mt-5 text-white px-4 rounded-lg bg-emerald-500 border-2 border-double border-emerald-500 hover:border-white'}>
                                    ثبت
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardDoctorAdd;