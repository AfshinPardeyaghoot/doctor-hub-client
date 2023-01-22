import {useEffect, useState} from "react";
import ApiRoutes from "../../config/ApiRoutes";
import useAuthRequest from "../../hook/useAuthRequest";
import DashboardUser from "./DashboardUser";

function DashboardUserList({search, setIsFirst, setIsLast, page, setTotalPage}) {

    const [fetchUsersReq] = useAuthRequest();
    const [users, setUsers] = useState([])
    const [usersCount, setUsersCount] = useState(0);


    useEffect(() => {
        const fetchData = async () => {
            fetchUsersReq({
                url: ApiRoutes.FETCH_ALL_USERS,
                method: 'GET',
                params: {
                    search: search ? search : null,
                    page: page
                }

            }).then(res => {
                setUsers(res.data.content)
                setUsersCount(res.data.numberOfElements)
                setIsLast(res.data.last)
                setIsFirst(res.data.first)
                setTotalPage(res.data.totalPages)
            })
        }

        fetchData().then(res => {
            console.log('data fetched!')
        })
    }, [search, page])

    console.log('users.length ' + users.length)


    return (
        <div
            className='min-h-[80%] max-h-[80%]'>
            {
                users && users.map((user, index) => <DashboardUser user={user} index={index} size={usersCount}/>)
            }
        </div>
    )

}

export default DashboardUserList;