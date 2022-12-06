import Navbar from "../navbar/Navbar";
import MainSpecialityListContainer from "./MainSpecialityListContainer";
import MainSpecialityList from "./MainSpecialityList";
import MainDoctorList from "./MainDoctorList";

function Main() {
    return (
        <div className="h-screen bg-slate-100 w-screen">
            <Navbar></Navbar>
            <div className="flex justify-center flex-col items-center">
                <MainSpecialityListContainer/>
                <div
                    className="flex justify-center w-11/12 shadow bg-white items-center flex-col md:w-11/12 mt-10 py-4 mb-14 md:justify-center md:items-center">
                    <div className="md:w-11/12 flex justify-end">
                        <div
                            className="text-right w-72 text-gray-700 text-m md:mr-5 h-16 flex items-center justify-end">
                            پزشکان آماده همراهی شما
                        </div>
                    </div>
                    <MainDoctorList/>
                    <div
                        className="md:w-11/12 flex justify-end">
                        <a className="text-green-700 text-[12px] rtl  md:mr-5">مشاهده همه ...</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;