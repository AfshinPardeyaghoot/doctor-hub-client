import MainDoctorList from "./MainDoctorList";
import {useNavigate} from "react-router-dom";
import DoctorList from "../Doctor/DoctorList";

function MainDoctorListContainer() {

    const navigate = useNavigate();

    return (
        <div
            className="flex justify-center w-11/12 shadow bg-white items-center flex-col md:w-11/12 mt-10 py-4 mb-14 md:justify-center md:items-center">
            <div className="md:w-11/12 w-[100%] flex justify-end items-center">
                <div
                    className="text-right w-72 text-gray-700 text-m mr-5 h-16 flex items-center justify-end">
                    پزشکان آماده همراهی شما
                </div>
            </div>
            <MainDoctorList/>
            <div
                className="md:w-11/12 flex justify-end " onClick={() => navigate("/doctors")}>
                <a className="text-green-700 text-[12px] rtl  md:mr-5  focus:ring-4  focus:outline-none ">مشاهده
                    همه ...</a>
            </div>
        </div>
    )
}

export default MainDoctorListContainer;