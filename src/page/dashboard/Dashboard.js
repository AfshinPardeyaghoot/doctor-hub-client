import {useEffect, useState} from "react";
import DashboardNavbar from "./DashboardNavbar";
import useAuthRequest from "../../hook/useAuthRequest";
import ApiRoutes from "../../config/ApiRoutes";
import DashboardUser from "./DashboardUser";

function Dashboard() {


    const [isDoctorsSelected, setDoctorsSelected] = useState(false);
    const [isUsersSelected, setUsersSelected] = useState(true);
    const [isSpecialitiesSelected, setSpecialitiesSelected] = useState(false);

    const [fetchUsersReq] = useAuthRequest();

    const [users, setUser] = useState([
        {
            id: null,
            username: null,
            phone: null
        }
    ])

    useEffect(() => {
        fetchUsersReq({
            url: ApiRoutes.FETCH_ALL_USERS,
            method: 'GET'
        }).then(res => {
            setUser(res.data.content)
        })
    }, [])


    return (
        <div className='flex justify-center items-start flex-row  w-full h-full'>
            <div className='w-full h-full mx-3'>
                <div className='rounded-2xl w-full h-24 mt-5 justify-center items-center flex'>
                    <form className='w-[100%]'>
                        <label htmlFor="default-search"
                               className="text-sm font-medium text-gray-900 sr-only">Search</label>
                        <div className="relative">
                            <button type="submit"
                                    className="text-white absolute left-2.5 bottom-2.5 bg-emerald-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">جستجو
                            </button>
                            <input type="search" id="default-search"
                                   className="block rtl w-full p-4 pl-10 text-sm text-black border border-emerald-200 rounded-lg bg-emerald-400 focus:ring-emerald-500 focus:outline-none focus:border-emerald-500"
                                   placeholder="جستجو بر اساس نام ، شماره و ..." required>
                            </input>
                        </div>
                    </form>
                </div>
                <div className='overflow-scroll scroll-smooth'>
                    {
                        users && users.map((user, index) => <DashboardUser user={user} index={index}/>)
                    }
                </div>
                <div className="flex flex-col items-center">
                    <div className="inline-flex mt-2 xs:mt-0">
                        <button
                            className="px-4 py-2 text-sm font-medium bg-emerald-500 text-gray-100 rounded-l hover:bg-emerald-600 ">
                            قبلی
                        </button>
                        <button
                            className="px-4 py-2 text-sm font-medium bg-emerald-500 text-gray-100 border-0 border-l border-emerald-700 rounded-r hover:bg-emerald-600 ">
                            بعدی
                        </button>
                    </div>
                </div>

            </div>
            <DashboardNavbar isDoctorsSelected={isDoctorsSelected} setDoctorsSelected={setDoctorsSelected}
                             isUsersSelected={isUsersSelected} setUsersSelected={setUsersSelected}
                             isSpecialitiesSelected={isSpecialitiesSelected}
                             setSpecialitiesSelected={setSpecialitiesSelected}/>
        </div>
    )
}

export default Dashboard;