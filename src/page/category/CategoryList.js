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
        <div className="w-4/5 flex justify-center items-center md:flex flex-wrap md:justify-end border-solid border-[1px] border-gray-300 bg-slate-100 b-t-0 pb-6">
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