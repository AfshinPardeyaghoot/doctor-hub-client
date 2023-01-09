function DoctorProfileInfo({doctor}) {

    return (<div className="w-100 flex flex-col justify-center items-center">
            <img src={doctor && doctor.profileImage}
                 className="avatar h-[6rem] w-[6rem] border-double -mt-10 border-4 border-emerald-500"/>
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