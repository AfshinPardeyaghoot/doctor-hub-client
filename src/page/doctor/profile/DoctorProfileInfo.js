import listItemIcon from "../../../static/icon/list-item.png";
import listItemIconBlack from "../../../static/icon/list-item-black.png";

function DoctorProfileInfo({doctor, isOnline}) {

    let profileBorderColor = isOnline ? 'border-emerald-500' : 'border-gray-500';
    let availabilityText = isOnline ? 'در دسترس' : 'خارج از دسترس';
    let availabilityStyle = isOnline ? 'bg-emerald-100 text-emerald-700 border-solid border-emerald-300' : 'bg-grey-100 text-gray-700 border-solid border-gray-300';
    let availabilityIcon = isOnline ? listItemIcon : listItemIconBlack;


    return (<div className="w-100 flex flex-col justify-center items-center w-full">
            <div className='w-full flex justify-center'>
                <div className='w-1/3'></div>
                <div className='w-1/3 flex justify-center'>
                    <img src={doctor && doctor.profileImage}
                         className={'avatar h-[6rem] w-[6rem] border-double -mt-10 border-4 ' + profileBorderColor}/>
                </div>
                <div className='w-1/3 flex justify-end pr-3 items-center text-[10px]'>
                    <div
                        className={'border-[1px] items-center flex  p-1 rounded-lg ' + availabilityStyle}>
                        <img src={availabilityIcon} className="h-3 w-3 mx-2 text-gray-50"/>
                        {availabilityText}
                    </div>
                </div>
            </div>
            <div className="w-[100%] text-gray-800 text-[23px] flex justify-center items-center mt-5">
                {doctor && doctor.name}
            </div>
            <div className="w-[100%] text-gray-600 text-[15px] flex justify-center items-center mt-3">
                {doctor && doctor.speciality.title}
            </div>
        </div>
    )
}

export default DoctorProfileInfo;