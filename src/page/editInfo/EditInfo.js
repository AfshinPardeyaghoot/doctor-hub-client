import {useEffect, useState} from "react";
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
        }
        setFirstName(firstName);
    }

    const handleLastNameChange = () => {
        if (lastName === '') {
            setHasLastNameError(true)
            setErrorMsg('نام خانوادگی خود را وارد کنید.')
        }
        setLastName(lastName)
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
        <div className="flex flex-col justify-center items-start p-5">
            <input className='w-full bg-n text-end border-[1px] border-solid border-gray-300 p-4' type={"text"}
                   onChange={(e) => handleFirstNameChange(e.target.value)}
                   defaultValue={user.firstName}/>
            <input type={"text"}
                   onChange={(e) => handleLastNameChange(e.target.value)}
                   defaultValue={user.lastName}/>
            <input type={"text"} value={user.phone}/>
            <button>ثبت تغییرات</button>
        </div>
    )
}

export default EditInfo;