import Navbar from "../navbar/Navbar";
import MainSpecialityList from "./MainSpecialityList";

function Main() {
    return (
        <div className="h-screen bg-gray-100 w-screen">
            <Navbar></Navbar>
            <div className="flex justify-center">
                <div
                    className="flex justify-center bg-yellow-200 items-center flex-col md:w-[90%] md:justify-center md:items-center">
                    <div>
                        <div className="text-right w-72 text-gray-700 text-m ">
                            مشاوره با پزشک متخصص
                        </div>
                    </div>
                    <MainSpecialityList/>
                    <a className="text-green-700">مشاهده همه ...</a>
                </div>
                <div className="flex justify-center items-center">

                </div>
            </div>
        </div>
    )
}

export default Main;