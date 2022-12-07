import {useEffect, useState} from "react";
import useRequest from "../../hook/useRequest";
import ApiRoutes from "../../config/ApiRoutes";
import Category from "./Category";

function CategoryList() {

    const [categories, setCategories] = useState([]);
    const [fetchSpecialitiesReq] = useRequest();


    useEffect(() => {
        const fetchData = async () => {
            fetchSpecialitiesReq({
                url: ApiRoutes.FETCH_CATEGORIES,
                method: "GET",
                params: {
                    page: 0,
                    size: 100
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
        <div className="md:w-[100%] md:flex md:flex-wrap md:justify-end">
            {
                categories.map((category) => {
                    return (
                        <div>
                            <Category category={category}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CategoryList;