function MainSpeciality({speciality}) {
    return (
        // <div>
        //     <div className="h-28 w-[20rem] bg-white rounded flex flex-row justify-center items-center shadow p-5 m-5">
        //         <div className="flex flex-col justify-end items-center">
        //             <div className="h-8 w-48 text-[12px] text-end text-gray-800 text-bold">{speciality.title}</div>
        //             <div className="text-[12px] text-end mr-3 pr-3  text-gray-600">{speciality.description}</div>
        //         </div>
        //         <img className="h-12 w-12" src={speciality.image} alt={speciality.title}/>
        //     </div>
        // </div>
        <div>
            <div className="flex flex-col h-32 w-32 p-3 m-3 justify-center items-center bg-gray-100 shadow md:w-96 bg-red-100 md:flex-row md:justify-end">
                <img className="h-16 w-16 visible md:invisible md:h-0 md:w-0" src={speciality.image} alt='error'/>
                <div className="text-[13px] p-1 md:invisible md:h-0 md:w-0">{speciality.title}</div>
                <div className="invisible h-0 w-0 flex flex-col justify-center items-end md:visible md:h-32 md:w-80">
                    <div className="text-m text-gray-800 pr-3 flex items-center h-10 mt-6 mb-2">{speciality.fullTitle}</div>
                    <div className="text-[13px] text-gray-500 flex h-16 pr-3">{speciality.description}</div>
                </div>
                <img className="h-0 w-0 md:h-16 md:w-16 invisible md:visible" src={speciality.image} alt='error'/>
            </div>
        </div>
    )
}

export default MainSpeciality;