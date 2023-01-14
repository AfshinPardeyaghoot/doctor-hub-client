import {useEffect, useState} from "react";
import backIcon from '../../static/icon/back.png';
import useAuthRequest from "../../hook/useAuthRequest";
import ApiRoutes from "../../config/ApiRoutes";

function EditInfo() {

    const [fetchUserFullInfoReq] = useAuthRequest();
    const [user, setUser] = useState({
        phone: null,
        firstName: null,
        lastName: null,
    });
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [hasFirstNameError, setHasFirstNameError] = useState(false);
    const [hasLastNameError, setHasLastNameError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const handleFirstNameChange = (firstName) => {
        if (firstName === '') {
            setHasFirstNameError(true)
            setErrorMsg('نام خود را وارد کنید.')
        } else {
            setHasFirstNameError(false)
            setFirstName(firstName);
        }
    }

    const handleLastNameChange = (lastName) => {
        if (lastName === '') {
            setHasLastNameError(true)
            setErrorMsg('نام خانوادگی خود را وارد کنید.')
        } else {
            setHasLastNameError(false)
            setLastName(lastName)
        }
    }

    useEffect(() => {
        fetchUserFullInfoReq({
            url: ApiRoutes.FETCH_USER_FULL_INFO,
            method: 'GET'

        }).then(res => {
            setUser(res.data);
            setFirstName(user.firstName);
            setLastName(user.lastName);
        })

    }, [])

    return (
        <div className='flex flex-col items-center w-full h-full'>
            <div className="flex flex-col justify-between items-start p-5 w-full max-w-screen-lg h-full">
                <div className='w-full flex flex-col'>
                    <div className=''>
                        <a className='w-2 h-2'>
                            <img className='w-6 h-6' src={backIcon} alt={'error'}/>
                        </a>
                    </div>

                    <label className="w-full flex justify-start text-gray-700 text-[15px] mt-24 mb-2 px-2.5 rtl"
                           htmlFor='firstName'>
                        نام<span className='text-red-400 px-1'>*</span>
                    </label>
                    <input id='firstName'
                           className={!hasFirstNameError ? 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none transition ease-in-out focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 py-4 rtl'
                               : 'bg-gray-50 border border-red-500 text-gray-900 text-sm rounded-lg focus:outline-none transition ease-in-out focus:ring-emerald-500 focus:border-red-500 block w-full p-2.5 py-4 rtl'}
                           type={"text"}
                           onChange={(e) => handleFirstNameChange(e.target.value)}
                           defaultValue={user.firstName}/>

                    <div
                        className={hasFirstNameError ? 'w-full flex justify-start rtl px-2.5 py-1 text-[12px] text-red-600' : 'w-full invisible justify-start rtl px-2.5 py-1 text-[12px] text-red-600'}>نام
                        خود را وارد
                        کنید.
                    </div>


                    <label className="w-full flex justify-start text-gray-700 text-[15px] mb-2 px-2.5 pt-5 rtl"
                           htmlFor='lastName'>
                        نام خانوادگی<span className='text-red-400 px-1'>*</span>
                    </label>
                    <input id='lastName'
                           className={!hasLastNameError ? 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none transition ease-in-out focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 py-4 rtl'
                               : 'bg-gray-50 border border-red-500 text-gray-900 text-sm rounded-lg focus:outline-none transition ease-in-out focus:ring-emerald-500 focus:border-red-500 block w-full p-2.5 py-4 rtl'}
                           type={"text"}
                           onChange={(e) => handleLastNameChange(e.target.value)}
                           defaultValue={user.lastName}/>

                    <div
                        className={hasLastNameError ? 'w-full flex justify-start rtl px-2.5 py-1 text-[12px] text-red-600' : 'w-full invisible justify-start rtl px-2.5 py-1 text-[12px] text-red-600'}>
                        نام خانوادگی خود را وارد کنید.
                    </div>

                    <label className="w-full flex justify-start text-gray-700 text-[15px] mb-2 px-2.5 pt-5 rtl"
                           htmlFor='phone'>
                        شماره تلفن<span className='text-red-400 px-1'>*</span>
                    </label>
                    <input id='phone' readOnly
                           className={'bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:outline-none transition ease-in-out block w-full p-2.5 py-4 rtl'}
                           type={"text"}
                           defaultValue={user.phone}/>

                </div>
                <button className='p-4 rounded-lg w-full text-center bg-emerald-500 text-white'>ثبت تغییرات</button>
            </div>
        </div>
    )
}

export default EditInfo;