import Navbar from "../navbar/Navbar";
import SpecialityList from "./SpecialityList";

function SpecialityPage() {


    return (
        <div>
            <div className="flex flex-col">
                <Navbar/>
                <div className="flex flex-col">
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex flex-col items-end w-[20rem] h-24 justify-center bg-white mt-5 md:w-11/12">
                            <div className="text-gray-800 text-l p-1 mx-2">
                                مشاوره پزشکی آنلاین
                            </div>
                            <div className="text-gray-600 text-m p-1 mx-2">
                                دریافت مشاوره از بهترین متخصصین
                            </div>
                        </div>
                        <div className="my-10 md:w-11/12">
                            <SpecialityList/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialityPage;