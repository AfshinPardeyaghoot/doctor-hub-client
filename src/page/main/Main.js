import Navbar from "../navbar/Navbar";
import MainCategoryListContainer from "./MainCategoryListContainer";
import MainDoctorListContainer from "./MainDoctorListContainer";

function Main() {
    return (
        <div className="h-screen bg-slate-100 w-screen">
            <Navbar></Navbar>
            <div className="flex justify-center flex-col items-center">
                <MainCategoryListContainer/>
                <MainDoctorListContainer/>
            </div>
        </div>
    )
}

export default Main;