import MainSpecialityList from "./MainSpecialityList";
import {useNavigate} from "react-router-dom";

function MainSpecialityListContainer() {
    const navigate = useNavigate();

    return (
        <div
            className="flex justify-center w-11/12 shadow bg-white items-center flex-col md:w-11/12 mt-10 md:justify-center md:items-center">
            <div className="md:w-11/12 flex justify-end">
                <div className="text-right w-72 text-gray-700 text-m md:mr-5 h-16 flex items-center justify-end">
                    مشاوره با پزشک متخصص
                </div>
            </div>
            <MainSpecialityList/>
            <div
                className="md:w-11/12 flex justify-end" onClick={() => navigate("/specialities")}>
                <a className="text-green-700 text-[12px] rtl mb-5 md:mr-5">مشاهده همه ...</a>
            </div>
        </div>
    )
}

export default MainSpecialityListContainer;