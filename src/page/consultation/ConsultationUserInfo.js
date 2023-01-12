import convertMilliesToJalali from "../../method/convertMilliesToJalali";
import scheduleIcon from "../../static/icon/schedule.png";

function ConsultationUserInfo({consultation}) {

    const {id, user, consultationType, createdAt} = consultation;
    const username = user.username ? user.username : user.phone;

    return (
        <div
            className="flex flex-row justify-end items-center h-32  w-11/12 xl:h-32"
            key={id}>
            <div className="flex flex-row h-[80%] justify-end items-end justify-between  w-[98%] xl:pr-6">
                <div className="flex flex-col h-[100%] justify-start items-start xl:pr-6">
                    <div
                        className="flex items-end h-1/2 justify-end pl-6 md:pl-12  mb-5 mt-2 text-gray-600 text-[12px] xl:text-[14px] rtl">
                        <div
                            className="bg-gray-400 w-24 py-1 text-m rounded text-white justify-center items-start text-center flex">
                            مشاوره {consultationType.title}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col h-[80%] justify-center xl:pr-6">
                    <div
                        className="h-1/3 flex items-center  justify-end pr-3 text-gray-800 text-s xl:text-[18px] appFont">
                        {username}
                    </div>
                    <div
                        className="h-1/3 w-[100%] flex items-start justify-end pr-1 text-gray-600 text-[12px] xl:text-[14px]">
                        {convertMilliesToJalali(createdAt)}
                        <img src={scheduleIcon} className="h-4 w-4 mx-3" alt="error"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConsultationUserInfo;