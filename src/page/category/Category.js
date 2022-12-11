import {useNavigate} from "react-router-dom";

function Category({category}) {

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
            <div
                className="flex flex-col items-center justify-center bg-white w-[20rem] md:w-[23rem] mt-5 md:mx-3 md:my-2 transform transition duration-300 hover:scale-110 border-[1px] border-solid border-gray-300"
                onClick={goToCategoryDoctorListPage}>
                <div className="flex p-3 m-3 justify-center items-center w-[19rem] flex-row justify-end">
                    <div className="h-0 w-0 flex flex-col justify-center items-end visible h-32 w-80 mr-2">
                        <div className="text-m text-gray-800 pr-3 flex items-center h-10 mb-2">{category.fullTitle}
                        </div>
                        <div className="text-[12px] text-gray-500 flex h-16 pr-3">{category.description}</div>
                    </div>
                    <img className="w-14 " src={category.imageDownloadUrl} alt='error'/>
                </div>
            </div>
        </div>
    )
}

export default Category;