function MainSpeciality({speciality}) {
    return (
        <div>
            <div className="flex flex-col h-32 w-32 p-3 m-3 justify-center items-center bg-slate-100 hover:shadow-xl md:w-96 md:flex-row md:justify-end">
                <img className="h-16 w-16 visible md:invisible md:h-0 md:w-0" src={speciality.imageDownloadUrl} alt='error'/>
                <div className="text-[13px] p-1 md:invisible md:h-0 md:w-0">{speciality.title}</div>
                <div className="invisible h-0 w-0 flex flex-col justify-center items-end md:visible md:h-32 md:w-80">
                    <div className="text-m text-gray-800 pr-3 flex items-center h-10 mt-6 mb-2">{speciality.fullTitle}</div>
                    <div className="text-[13px] text-gray-500 flex h-16 pr-3">{speciality.description}</div>
                </div>
                <img className="h-0 w-0 md:h-16 md:w-16 invisible md:visible" src={speciality.imageDownloadUrl} alt='error'/>
            </div>
        </div>
    )
}

export default MainSpeciality;