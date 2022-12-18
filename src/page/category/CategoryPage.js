import Navbar from "../navbar/Navbar";
import CategoryList from "./CategoryList";

function CategoryPage() {


    return (
        <div>
            <div className="flex flex-col">
                <Navbar/>
                <div className="flex flex-col">
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex flex-col items-end w-4/5  h-24 justify-center bg-white mt-5  border-[1px] border-solid border-gray-300">
                            <div className="text-gray-800 text-l p-1 mx-2 xl:mx-8">
                                مشاوره پزشکی آنلاین
                            </div>
                            <div className="text-gray-600 text-m p-1 mx-2 xl:mx-5">
                                دریافت مشاوره از بهترین متخصصین
                            </div>
                        </div>
                        {/*<div className="my-10 bg-red-600 w-4/5 flex justify-center items-center">*/}
                            <CategoryList/>
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryPage;