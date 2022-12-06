function Doctor({doctor}) {
    return (
        <div>
            <div className="flex flex-row justify-end m-2 bg-slate-100 rounded items-center h-24 md:w-96 w-72">
                <div className="flex flex-col h-[100%] justify-end items-end w-[100%]">
                    <div className="h-1/2 flex items-end w-11/12 justify-end pr-3 text-gray-800 text-m">
                        {doctor.name}
                    </div>
                    <div className="h-1/2 w-[100%] flex items-center justify-end pr-3 text-gray-600 text-[12px]">
                        {doctor.description}
                    </div>
                </div>
                <div className="pr-3">
                    <img className="h-16 w-16 md:h-16 md:w-20 rounded-full border-4 border-green-400 border-double"
                         src={doctor.profileImage} alt="error"/>
                </div>
            </div>
        </div>
    )
}

export default Doctor;