import toFarsiNumber from "../../../method/toFarsiNumber";

function DoctorConsultationHistoryInfo({doctor}) {
    return (
        <div
            className="w-[100%] text-gray-700 text-[13px] flex flex-row items-center justify-center  mt-8  border-t-[1px] border-gray-300 border-solid">
            <div className="w-1/3 flex flex-col justify-center items-center h-[100%]">
                <div className='rtl'>
                    {doctor && toFarsiNumber(doctor.rate)} ⭐
                </div>
                <div className="text-gray-500 text-[10px] pt-2">
                    امتیاز
                </div>
            </div>
            <div
                className="w-1/3 flex flex-col justify-center items-center h-[100%] border-x-[1px] border-gray-300 border-solid py-3">
                <div>
                    + {doctor && toFarsiNumber(doctor.consultationCount)}
                </div>
                <div className="text-gray-500 text-[10px] pt-2">
                    مشاوره آنلاین
                </div>
            </div>
            <div className="w-1/3 flex flex-col justify-center items-center h-[100%] py-3">
                <div>
                    {doctor && doctor.gmcNumber}
                </div>
                <div className="text-gray-500 text-[10px] pt-2">
                    شماره نظام پزشکی
                </div>
            </div>
        </div>
    )
}

export default DoctorConsultationHistoryInfo;