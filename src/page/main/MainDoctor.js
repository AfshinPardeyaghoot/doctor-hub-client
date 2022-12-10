function MainDoctor({doctor}) {

    const doctorSpeciality = doctor.speciality;

    return (
        <div>
            <div className="bg-slate-100 mb-5 pb-2 flex flex-col justify-center items-center rounded md:mx-3">
                <div className="flex flex-row justify-end mx-2 items-center h-36 md:w-96 w-72" key={doctor.id}>
                    <div className="flex flex-col h-[60%] justify-end items-end w-[100%]">
                        <div className="h-1/3 flex items-center w-11/12 justify-end pr-3 text-gray-800 text-m">
                            {doctor.name}
                        </div>
                        <div className="h-1/3 w-[100%] flex items-start justify-end pr-3 text-gray-600 text-[12px]">
                            {/*{doctorSpeciality.title}*/}
                        </div>
                        <div
                            className="h-1/3 flex justify-center items-end w-[100] flex-row text-gray-600 text-[12px] pr-3">
                            <div className="w-20">
                                ۴.۷ ⭐
                            </div>
                            <div className="w-20 rtl">
                                + ۳۰ مشاوره
                            </div>
                        </div>
                    </div>
                    <div className="pr-3">
                        <img
                            className="h-16 w-16 bg-cover md:h-[5rem] md:w-[6rem] rounded-full border-4 border-green-400 border-double avatar"
                            src={doctor.profileImage} alt="error"/>
                    </div>
                </div>
                <div className="h-10 w-[95%] bg-green-400 text-center text-white flex justify-center items-center rounded">
                    دریافت مشاوره
                </div>
            </div>
        </div>
    )
}

export default MainDoctor;