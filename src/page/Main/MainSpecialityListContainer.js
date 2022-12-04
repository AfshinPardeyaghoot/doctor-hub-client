import MainSpecialityList from "./MainSpecialityList";

function MainSpecialityListContainer() {
    return (
        <div
            className="flex justify-center shadow bg-white items-center flex-col md:w-11/12 mt-10 md:justify-center md:items-center">
            <div className="md:w-11/12 flex justify-end">
                <div className="text-right w-72 text-gray-700 text-m md:mr-5">
                    مشاوره با پزشک متخصص
                </div>
            </div>
            <MainSpecialityList/>
            <div
                className="md:w-11/12 flex justify-end">
                <a className="text-green-700 text-[12px] rtl mb-5 md:mr-5">مشاهده همه ...</a>
            </div>
        </div>
    )
}

export default MainSpecialityListContainer;