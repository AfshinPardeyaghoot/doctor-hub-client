import closeIcon from "../../../static/icon/close2.png";


function DashboardDoctorSchedule({schedule, deleteAction}) {

    const days = [
        {
            "en": "SAT",
            "fa": "شنبه"
        },
        {
            "en": "SUN",
            "fa": "یکشنبه"
        },
        {
            "en": "MON",
            "fa": "دوشنبه"
        },
        {
            "en": "TUE",
            "fa": "سه شنبه"
        },
        {
            "en": "WED",
            "fa": "چهار شنبه"
        },
        {
            "en": "THU",
            "fa": "پنجشنبه"
        },
        {
            "en": "FRI",
            "fa": "جمعه"
        }
    ]

    return (
        <div
            className="w-full bg-white h-14 flex flex-row justify-around items-center text-gray-800 text-[14px] my-2 border-gray-300 border-solid border-[1px]  rounded">
            <div className="w-full flex flex-row justify-start items-center pl-3">
                <img src={closeIcon} alt={'error'} onClick={() => deleteAction(schedule.day)}
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
                {days.find(day => day.en === schedule.day).fa}
            </div>
        </div>
    )
}

export default DashboardDoctorSchedule;