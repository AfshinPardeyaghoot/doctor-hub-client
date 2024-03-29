import MainCategory from "./MainCategory";
import {useEffect, useState} from "react";
import useRequest from "../../hook/useRequest";
import ApiRoutes from "../../config/ApiRoutes";

function MainCategoryLIst() {

    const [categories, setCategories] = useState([]);
    const [fetchSpecialitiesReq] = useRequest();


    useEffect(() => {
        const fetchData = async () => {
            fetchSpecialitiesReq({
                url: ApiRoutes.FETCH_CATEGORIES,
                method: "GET",
                params: {
                    page: 0,
                    size: 4
                }
            }).then(res => {
                setCategories(res.data.content)
            }).catch(e => {

                }
            )
        }

        fetchData();
    }, [])


    return (
        <div className="bg-white bg-white flex flex-wrap justify-center md:justify-end w-[100%] md:pr-5">

            {
                categories.map((category) => {
                    return (
                        <div>
                            <MainCategory category={category}/>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default MainCategoryLIst;