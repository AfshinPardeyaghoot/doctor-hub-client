import {useState} from "react";
import addIcon from "../../../static/icon/add.png";
import DashboardCategoryList from "./DashboardCategoryList";
import {useNavigate} from "react-router-dom";
import toFarsiNumber from "../../../method/toFarsiNumber";

function DashboardCategoryPage() {

    const navigate = useNavigate();
    const [search, setSearch] = useState();
    const [finalSearch, setFinalSearch] = useState();
    const [isFirstPage, setIsFirstPage] = useState(false);
    const [isLastPage, setIsLastPage] = useState(false);
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);

    const applySearch = () => {
        setPage(0)
        setFinalSearch(search);
    }

    const increasePageNumber = () => {
        setPage(page + 1)
    }

    const decreasePageNumber = () => {
        setPage(page - 1)
    }

    const navigateAddPage = () => {
        navigate('/dashboard/add-category');
    }


    return (
        <div className='w-full h-full mx-3'>
            <div className='rounded-2xl w-full h-24 justify-center items-center flex'>
                <div className='flex items-start justify-center'>
                    <div onClick={navigateAddPage}
                         className='w-62 bg-emerald-500 hover:bg-emerald-700 cursor-pointer text-white justify-center items-center text-m flex flex-row rounded-lg p-1 mx-1 border-[1px] border-double border-emerald-500 hover:border-white'>
                        <img src={addIcon} className='w-10 h-10 object-cover m-1'/>
                        <div className='px-2'>
                            اضافه کردن
                        </div>
                    </div>
                </div>
                <div className='w-[85%]'>
                    <label htmlFor="default-search"
                           className="text-sm font-medium text-gray-900 sr-only">Search</label>
                    <div className="relative">
                        <button onClick={applySearch}
                                className="text-white absolute left-2.5 bottom-2.5 bg-emerald-500 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">جستجو
                        </button>
                        <input type="text"
                               onChange={e => setSearch(e.target.value)}
                               className="block rtl w-full p-4 pl-10 text-sm text-black border border-neutral-200 rounded-lg bg-neutral-200 focus:ring-emerald-500 focus:outline-none focus:border-neutral-500"
                               placeholder="جستجو بر اساس عنوان ، نام " required>
                        </input>
                    </div>
                </div>
            </div>
            <DashboardCategoryList search={finalSearch} page={page} setTotalPage={setTotalPage}
                                   setIsFirst={setIsFirstPage}
                                   setIsLast={setIsLastPage}/>
            <div className="flex flex-col items-center">
                <div className="inline-flex xs:mt-0">
                    <button
                        className="px-4 py-2 text-sm font-medium bg-emerald-500 text-gray-100 rounded-l hover:bg-emerald-600 hover:disabled:bg-emerald-500"
                        disabled={isFirstPage} onClick={decreasePageNumber}>
                        قبلی
                    </button>
                    <button
                        className="px-4 py-2 text-sm font-medium bg-emerald-500 text-gray-100 border-0 border-l border-emerald-700 rounded-r hover:bg-emerald-600 hover:disabled:bg-emerald-500"
                        disabled={isLastPage} onClick={increasePageNumber}>
                        بعدی
                    </button>
                </div>
                <span className="text-[14px]  text-gray-700 mt-3">
                    نمایش صفحه {toFarsiNumber(page + 1)} از {toFarsiNumber(totalPage)}
                </span>
            </div>
        </div>
    )
}

export default DashboardCategoryPage;