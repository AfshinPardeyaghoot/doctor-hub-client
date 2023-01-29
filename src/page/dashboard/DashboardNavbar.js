import userWhiteIcon from "../../static/icon/user.png";
import doctorWhiteIcon from "../../static/icon/doctor-white.png";
import specialityIcon from "../../static/icon/speciality.png";
import categoryIcon from "../../static/icon/category.png";


function DashboardNavbar({
                             isDoctorsSelected,
                             isUsersSelected,
                             isSpecialitiesSelected,
                             isCategoriesSelected,
                             setSpecialitiesSelected,
                             setDoctorsSelected,
                             setUsersSelected,
                             setCategoriesSelected
                         }) {

    const doctorIconStyle = isDoctorsSelected ? ' h-7 w-7 ' : ' h-6 w-6 ';
    const userIconStyle = isUsersSelected ? ' h-7 w-7 ' : ' h-6 w-6 ';
    const specialityIconStyle = isSpecialitiesSelected ? ' h-7 w-7 ' : ' h-6 w-6 ';
    const categoryIconStyle = isCategoriesSelected ? ' h-6 w-6 ' : ' h-5 w-5 opacity-75';

    const doctorStyle = isDoctorsSelected ? ' my-3 h-[50px] w-[90%] text-white text-m font-bold shadow-emerald-500 cursor-pointer bg-emerald-400 rounded-lg shadow-lg shadow-emerald-700  flex flex-row'
        : ' h-[50px] w-[90%] my-3 text-gray-200 text-m  cursor-pointer rounded-lg  flex flex-row';

    const specialityStyle = isSpecialitiesSelected ? 'my-3 h-[50px] w-[90%] text-white text-m font-bold shadow-emerald-500 cursor-pointer bg-emerald-400 rounded-lg shadow-lg shadow-emerald-700  flex flex-row '
        : ' h-[50px] w-[90%] my-3 text-gray-200 text-m  cursor-pointer rounded-lg  flex flex-row ';

    const userStyle = isUsersSelected ? ' my-3 h-[50px] w-[90%] text-white text-m font-bold shadow-emerald-500 cursor-pointer bg-emerald-400 rounded-lg shadow-lg shadow-emerald-700 flex flex-row '
        : 'h-[50px] w-[90%] my-3 text-gray-200 text-m  cursor-pointer rounded-lg   flex flex-row ';

    const categoryStyle = isCategoriesSelected ? ' my-3 h-[50px] w-[90%]  text-white text-m font-bold shadow-emerald-500 cursor-pointer bg-emerald-400 rounded-lg shadow-lg shadow-emerald-700 flex flex-row '
        : ' h-[50px] w-[90%] my-3 text-gray-200 text-m cursor-pointer rounded-lg  flex flex-row ';

    const selectUser = () => {
        setSpecialitiesSelected(false)
        setDoctorsSelected(false)
        setUsersSelected(true)
        setCategoriesSelected(false)
    }

    const selectDoctor = () => {
        setSpecialitiesSelected(false)
        setDoctorsSelected(true)
        setUsersSelected(false)
        setCategoriesSelected(false)
    }

    const selectSpeciality = () => {
        setSpecialitiesSelected(true)
        setDoctorsSelected(false)
        setUsersSelected(false)
        setCategoriesSelected(false)
    }

    const selectCategory = () => {
        setSpecialitiesSelected(false)
        setDoctorsSelected(false)
        setUsersSelected(false)
        setCategoriesSelected(true)
    }

    return (
        <>
            <div
                className='min-w-[180px]  bg-emerald-500 h-full flex flex-col justify-center items-center border-emerald-500 border-[1px] border-solid rounded-l-3xl'>
                <div
                    className={userStyle + ' items-start justify-start rtl p-2 '} onClick={selectUser}>
                    <img src={userWhiteIcon} className={'mx-3' + userIconStyle}/>
                    کاربران
                </div>
                <div
                    className={doctorStyle + ' items-start justify-start rtl p-2'} onClick={selectDoctor}>
                    <img src={doctorWhiteIcon} className={'mx-3' + doctorIconStyle}/>
                    پزشکان
                </div>
                <div
                    className={categoryStyle + ' items-start justify-start rtl p-2 '} onClick={selectCategory}>
                    <img src={categoryIcon} className={'mx-3 ' + categoryIconStyle}/>
                    دسته بندی ها
                </div>
                <div
                    className={specialityStyle + ' items-start justify-start rtl p-2'} onClick={selectSpeciality}>
                    <img src={specialityIcon} className={'mx-3' + specialityIconStyle}/>
                    تخصص ها
                </div>
            </div>
        </>
    )
}

export default DashboardNavbar;