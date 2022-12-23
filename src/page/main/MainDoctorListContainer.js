import MainDoctorList from "./MainDoctorList";
import {useNavigate} from "react-router-dom";
import DoctorList from "../Doctor/DoctorList";

function MainDoctorListContainer() {

    const navigate = useNavigate();

    return (
        <div
            className="flex justify-center w-11/12 shadow bg-white items-center flex-col md:w-11/12 md:mt-5 mb-14 md:justify-center md:items-center">
            <div className="w-[100%] flex justify-end items-center">
                <div
                    className="text-right w-72 text-gray-700 text-m mr-8 h-16 flex items-center justify-end mb-2">
                    پزشکان آماده همراهی شما
                </div>
            </div>
            <MainDoctorList/>
            <div
                className="w-[100%] h-16 flex justify-center md:justify-start items-center" onClick={() => navigate("/doctors")}>
                <a className="text-green-700 text-[12px] rtl mb-5 md:ml-10">مشاهده
                    همه ...</a>
            </div>
        </div>
    )
}

export default MainDoctorListContainer;