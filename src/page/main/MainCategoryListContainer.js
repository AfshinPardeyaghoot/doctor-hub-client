import MainCategoryLIst from "./MainCategoryLIst";
import {useNavigate} from "react-router-dom";

function MainCategoryListContainer() {
    const navigate = useNavigate();

    return (
        <div
            className="flex justify-center w-11/12 shadow bg-white items-center flex-col md:w-11/12 mt-10 md:justify-center md:items-center">
            <div className="w-[100%] flex justify-end">
                <div className="text-right w-[100%] text-gray-700 text-m mr-8 md:pt-2 h-16 flex items-center justify-end">
                    مشاوره با پزشک متخصص
                </div>
            </div>
            <MainCategoryLIst/>
            <div
                className="w-[100%] h-16 flex justify-start items-center" onClick={() => navigate("/categories")}>
                <a className="text-green-700 text-[12px] rtl mb-5 ml-10">مشاهده همه ...</a>
            </div>
        </div>
    )
}

export default MainCategoryListContainer;