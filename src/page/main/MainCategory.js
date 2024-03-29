import {useNavigate} from "react-router-dom";

function MainCategory({category}) {

    const navigate = useNavigate();


    const categoryId = category.id;
    const categoryTitle = category.fullTitle;

    const goToCategoryDoctorListPage = () => {
        navigate("/doctors", {
            state: {
                categoryTitle,
                categoryId
            }
        })
    }
    return (
        <div>
            <div key={category.id} onClick={goToCategoryDoctorListPage}
                className="flex flex-col h-32 w-[135px] p-3 m-3 justify-center items-center bg-slate-100 md:w-[387px] md:flex-row md:justify-end transform transition duration-300 hover:scale-110 border-[1px] border-solid border-gray-300">
                <img className="h-16 w-16 visible md:invisible md:h-0 md:w-0" src={category.imageDownloadUrl}
                     alt='error'/>
                <div className="text-[13px] p-1 md:invisible md:h-0 md:w-0">{category.title}</div>
                <div className="invisible h-0 w-0 flex flex-col justify-center items-end md:visible md:h-32 md:w-80">
                    <div
                        className="text-m text-gray-800 pr-3 flex items-center h-10 mt-6 mb-2">{category.fullTitle}</div>
                    <div className="text-[13px] text-gray-500 flex h-16 pr-3">{category.description}</div>
                </div>
                <img className="h-0 w-0 md:h-16 md:w-16 invisible md:visible" src={category.imageDownloadUrl}
                     alt='error'/>
            </div>
        </div>
    )
}

export default MainCategory;