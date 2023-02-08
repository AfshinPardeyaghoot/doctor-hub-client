import useAuthRequest from "../../../hook/useAuthRequest";
import {useEffect, useState} from "react";
import ApiRoutes from "../../../config/ApiRoutes";
import DashboardCategory from "./DashboardCategory";

function DashboardCategoryList({search, setIsFirst, setIsLast, page, setTotalPage}) {
    const [fetchCategoriesReq] = useAuthRequest();
    const [deleteCategoryReq] = useAuthRequest();
    const [categories, setCategories] = useState([])
    const [categoriesCount, setCategoriesCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            fetchCategoriesReq({
                url: ApiRoutes.FETCH_CATEGORIES,
                method: 'GET',
                params: {
                    search: search ? search : null,
                    page: page,
                    size: 8
                }

            }).then(res => {
                setCategories(res.data.content)
                setCategoriesCount(res.data.numberOfElements)
                setIsLast(res.data.last)
                setIsFirst(res.data.first)
                setTotalPage(res.data.totalPages)
            })
        }

        fetchData().then(res => {
        })
    }, [search, page])


    const deleteCategory = (id) => {
        deleteCategoryReq({
            url: ApiRoutes.FETCH_CATEGORIES + '/' + id,
            method: 'DELETE',
        }).then(res => {
            setCategories([...categories.filter(category => category.id !== id)])
        })
    }

    return (
        <div
            className='min-h-[80%] max-h-[80%]'>
            {
                categories && categories.map((category, index) => <DashboardCategory index={index} category={category}
                                                                                     deleteCategoryAction={deleteCategory}
                                                                                     size={categoriesCount}/>)
            }
        </div>
    )

}

export default DashboardCategoryList;