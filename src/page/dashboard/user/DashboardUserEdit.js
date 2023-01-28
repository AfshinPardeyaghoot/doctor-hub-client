import {useLocation, useNavigate} from "react-router-dom";
import useAuthRequest from "../../../hook/useAuthRequest";
import {useEffect, useState} from "react";
import ApiRoutes from "../../../config/ApiRoutes";
import {toast, Toaster} from "react-hot-toast";
import backIcon from "../../../static/icon/back.png";


function DashboardUserEdit() {

    const {state} = useLocation();
    const {id} = state;
    const navigate = useNavigate();
    const [fetchAllRoles] = useAuthRequest();
    const [updateUserInfoReq] = useAuthRequest();
    const [fetchUserFullInfoReq] = useAuthRequest();
    const [roles, setRoles] = useState([]);
    const [user, setUser] = useState({
        phone: null,
        firstName: null,
        lastName: null,
        role: null
    });
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [role, setRole] = useState(null);
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

    const updateUserInfo = () => {
        updateUserInfoReq({
            url: ApiRoutes.UPDATE_USER_BY_ID + '/' + id + '/info/admin',
            method: 'PUT',
            data: {
                firstName: firstName,
                lastName: lastName,
                role: role
            }
        }).then(res => {
            toast.success("اطلاعات با موفقیت ثبت شد.", {
                style: {
                    marginTop: "10px",
                    direction: "rtl",
                    width: "90%"
                },
            });
        })
    }

    const navigateHome = () => {
        navigate('/dashboard')
    }

    function handleRoleSelect(value) {
        console.log(value + ' selected!')
        setRole(value)
    }

    useEffect(() => {
        fetchAllRoles({
            url: ApiRoutes.FETCH_ALL_ROLES,
            method: 'GET'
        }).then(res => {
            setRoles(res.data)
        })
    }, [])

    useEffect(() => {
        fetchUserFullInfoReq({
            url: ApiRoutes.FETCH_USER_BY_ID + '/' + id + '/admin',
            method: 'GET'

        }).then(res => {
            setUser(res.data);
            setFirstName(user.firstName);
            setLastName(user.lastName);
            setRole(user.role);
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
                        ویرایش اطلاعات
                    </div>

                    <label className="w-full flex justify-start text-gray-700 text-[15px] mt-20 mb-2 px-2.5 rtl"
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

                    <label className="w-full flex justify-start text-gray-700 text-[15px] mb-2 px-2.5 pt-10 rtl"
                           htmlFor='phone'>
                        سطح دسترسی<span className='text-red-400 px-1'>*</span>
                    </label>
                    <select id="default" value={role !== null  ? role : user.role} onChange={(e) => handleRoleSelect(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:outline-none transition ease-in-out block w-full p-2.5 py-4 rtl">
                        <option>{role}</option>
                        {
                            roles &&
                            roles.filter(r => r !== role).map((r) => <option value={r}>{r}</option>)
                        }
                    </select>

                </div>
                <button onClick={updateUserInfo}
                        className='p-4 rounded-lg w-full text-center bg-emerald-500 text-white'>ثبت تغییرات
                </button>
            </div>
        </div>
    )
}

export default DashboardUserEdit;