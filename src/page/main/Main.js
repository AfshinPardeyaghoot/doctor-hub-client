import Navbar from "../navbar/Navbar";
import MainSpecialityListContainer from "./MainSpecialityListContainer";
import MainSpecialityList from "./MainSpecialityList";
import MainDoctorList from "./MainDoctorList";
import MainDoctorListContainer from "./MainDoctorListContainer";

function Main() {
    return (
        <div className="h-screen bg-slate-100 w-screen">
            <Navbar></Navbar>
            <div className="flex justify-center flex-col items-center">
                <MainSpecialityListContainer/>
                <MainDoctorListContainer/>
            </div>
        </div>
    )
}

export default Main;