function Speciality({speciality}) {

    return (
        <div>
            <div className="flex flex-col items-center justify-center bg-white w-[20rem] mt-5">
                <div className="flex p-3 m-3 justify-center items-center w-[19rem] flex-row justify-end">
                    <div className="h-0 w-0 flex flex-col justify-center items-end visible h-32 w-80 mr-2">
                        <div className="text-m text-gray-800 pr-3 flex items-center h-10 mb-2">{speciality.fullTitle}
                        </div>
                        <div className="text-[12px] text-gray-500 flex h-16 pr-3">{speciality.description}</div>
                    </div>
                    <img className="w-14 " src={speciality.imageDownloadUrl} alt='error'/>
                </div>
            </div>
        </div>
    )
}

export default Speciality;