import userWhiteIcon from "../../static/icon/user.png";
import doctorWhiteIcon from "../../static/icon/doctor-white.png";
import specialityIcon from "../../static/icon/speciality.png";

function DashboardNavbar({isDoctorsSelected, isUsersSelected, isSpecialitiesSelected, setSpecialitiesSelected, setDoctorsSelected, setUsersSelected}) {

    const doctorIconStyle = isDoctorsSelected ? ' h-7 w-7 ' : ' h-6 w-6 ';
    const userIconStyle = isUsersSelected ? ' h-7 w-7 ' : ' h-6 w-6 ';
    const specialityIconStyle = isSpecialitiesSelected ? ' h-7 w-7 ' : ' h-6 w-6 ';

    const doctorStyle = isDoctorsSelected ? 'p-2 my-3 h-[50px] w-[90%] text-white text-m font-bold shadow-emerald-500 cursor-pointer bg-emerald-400 rounded-lg shadow-lg shadow-emerald-700 px-3 flex flex-row justify-center items-center'
        : 'p-2 h-[50px] w-[90%] my-3 text-gray-200 text-m  cursor-pointer rounded-lg  px-3 flex flex-row justify-center items-center';

    const specialityStyle = isSpecialitiesSelected ? 'p-2 my-3 h-[50px] w-[90%] text-white text-m font-bold shadow-emerald-500 cursor-pointer bg-emerald-400 rounded-lg shadow-lg shadow-emerald-700 px-3 flex flex-row justify-center items-center'
        : 'p-2 h-[50px] w-[90%] my-3 text-gray-200 text-m  cursor-pointer rounded-lg  px-3 flex flex-row justify-center items-center';

    const userStyle = isUsersSelected ? 'p-2 my-3 h-[50px] w-[90%] text-white text-m font-bold shadow-emerald-500 cursor-pointer bg-emerald-400 rounded-lg shadow-lg shadow-emerald-700 px-3 flex flex-row justify-center items-center'
        : 'p-2 h-[50px] w-[90%] my-3 text-gray-200 text-m  cursor-pointer rounded-lg  px-3 flex flex-row justify-center items-center';

    const selectUser = () => {
        setSpecialitiesSelected(false)
        setDoctorsSelected(false)
        setUsersSelected(true)
    }

    const selectDoctor = () => {
        setSpecialitiesSelected(false)
        setDoctorsSelected(true)
        setUsersSelected(false)
    }

    const selectSpeciality = () => {
        setSpecialitiesSelected(true)
        setDoctorsSelected(false)
        setUsersSelected(false)
    }

    return (
        <>
            <div
                className='min-w-[180px] bg-emerald-500 h-full flex flex-col justify-center items-center border-emerald-500 border-[1px] border-solid rounded-l-3xl'>
                <div
                    className={userStyle} onClick={selectUser}>
                    <img src={userWhiteIcon} className={'mx-3 ' + userIconStyle}/>
                    کاربران
                </div>
                <div
                    className={doctorStyle} onClick={selectDoctor}>
                    <img src={doctorWhiteIcon} className={'mx-3 ' + doctorIconStyle}/>
                    پزشکان
                </div>
                <div
                    className={specialityStyle} onClick={selectSpeciality}>
                    <img src={specialityIcon} className={'mx-3 ' + specialityIconStyle}/>
                    تخصص ها
                </div>
            </div>
        </>
    )
}

export default DashboardNavbar;