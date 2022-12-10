import Navbar from "../navbar/Navbar";
import DoctorList from "./DoctorList";
import {useState} from "react";
import {useLocation} from "react-router-dom";

function DoctorsPage() {

    const {state} = useLocation();
    let categoryId, categoryTitle;
    if (state) {
        categoryTitle = state.categoryTitle;
        categoryId = state.categoryId;
    }
    const [isFilterBoxOpen, setIsFilterBoxOpen] = useState(false);
    const [doctorName, setDoctorName] = useState();

    const handleIsFilterBoxOpen = () => {
        setIsFilterBoxOpen(!isFilterBoxOpen);
    }

    return (
        <div>
            <div className="flex flex-col">
                <Navbar/>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-center w-11/12  xl:w-3/4">
                        <div className="flex flex-col items-end  h-24 xl:h-32 justify-center bg-white mt-5 w-11/12">
                            <div className="text-gray-600 text-xs p-1 mx-2 mt-5">
                                مشاوره با {categoryTitle ? categoryTitle : 'متخصص'}
                            </div>
                            <div className="text-gray-800 text-[16px] pb-2 mx-2 xl:text-[20px] xl:my-3">
                                لیست بهترین متخصص {categoryTitle ? categoryTitle : 'ها'}

                            </div>
                            <div className="text-gray-600 text-m p-1 mx-2 w-1/2">
                            </div>
                        </div>
                        <div
                            className="w-[100%] flex flex-col justify-center items-center xl:flex-row xl:items-start xl:justify-center">
                            <div className="w-[100%] pt-5 flex justify-center xl:w-4/12">
                                <div className="w-11/12 flex justify-center flex-col items-center bg-white pb-5">
                                    <div
                                        className="w-11/12 text-right text-[16px] text-gray-800 px-5 h-8 mt-3 flex items-center justify-end"
                                        onClick={handleIsFilterBoxOpen}>
                                        فیلتر
                                    </div>
                                    {isFilterBoxOpen &&
                                        <hr className="border-gray-300 w-[100%]"/>

                                    }
                                    {isFilterBoxOpen &&
                                        <div
                                            className="flex flex-col w-11/12 text-[14px] mt-5 justify-end items-end pr-5">
                                            <div className="w-11/12 flex items-center justify-end text-gray-700 mb-3">
                                                نام پزشک
                                            </div>
                                            <input type="text" className="w-4/5 bg-gray-100 h-10" about="جستجوی پزشک"
                                                   onChange={(e) => setDoctorName(e.target.value)}/>
                                            <button
                                                className="w-4/5 bg-green-400 text-white h-10 my-3 rounded border-double border-2 border-green-400 hover:border-white">
                                                اعمال فیلتر
                                            </button>
                                        </div>}
                                </div>
                            </div>
                            <div className="my-10 w-11/12 xl:w-7/12 xl:my-5">
                                <DoctorList categoryId={categoryId} doctorName={doctorName}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorsPage;