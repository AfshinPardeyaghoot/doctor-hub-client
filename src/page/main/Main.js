import Navbar from "../navbar/Navbar";
import MainSpecialityListContainer from "./MainSpecialityListContainer";

function Main() {
    return (
        <div className="h-screen bg-slate-100 w-screen">
            <Navbar></Navbar>
            <div className="flex justify-center">
                <MainSpecialityListContainer/>
                <div className="flex justify-center items-center">
                </div>
            </div>
        </div>
    )
}

export default Main;