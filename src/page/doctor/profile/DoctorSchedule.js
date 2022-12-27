function DoctorSchedule({schedule}) {

    return (
        <div
            className="w-[95%] bg-slate-100 h-14 flex flex-row justify-around items-center text-gray-500 text-[14px] my-2 border-gray-300 border-solid border-[1px] ml-2 rounded">
            <div className="w-2/3 flex flex-row justify-start items-center pl-3">
                <div className="ml-2">
                    {schedule.startHour}
                </div>
                -
                <div>
                    {schedule.endHour}
                </div>
            </div>
            <div className="w-1/3 flex justify-end pr-5">
                {schedule.day}
            </div>
        </div>
    )
}

export default DoctorSchedule;