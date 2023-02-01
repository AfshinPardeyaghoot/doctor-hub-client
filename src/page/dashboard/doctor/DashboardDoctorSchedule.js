import closeIcon from "../../../static/icon/close2.png";


function DashboardDoctorSchedule({schedule}) {
    return (
        <div
            className="w-full bg-white h-14 flex flex-row justify-around items-center text-gray-800 text-[14px] my-2 border-gray-300 border-solid border-[1px]  rounded">
            <div className="w-full flex flex-row justify-start items-center pl-3">
                <img src={closeIcon} alt={'error'}
                     className='w-3 h-3 object-cover mr-4 cursor-pointer'/>
                <div className="px-2">
                    {schedule.startHour}
                </div>
                -
                <div className='px-2'>
                    {schedule.endHour}
                </div>
            </div>
            <div className="w-1/3 flex justify-end pr-5">
                {schedule.day}
            </div>
        </div>
    )
}

export default DashboardDoctorSchedule;