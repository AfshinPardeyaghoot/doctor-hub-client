import {useEffect, useState} from "react";
import DashboardNavbar from "./DashboardNavbar";
import DashboardUserList from "./DashboardUserList";
import DashboardUserPage from "./DashboardUserPage";

function Dashboard() {


    const [isDoctorsSelected, setDoctorsSelected] = useState(false);
    const [isUsersSelected, setUsersSelected] = useState(true);
    const [isSpecialitiesSelected, setSpecialitiesSelected] = useState(false);


    return (
        <div className='flex justify-center items-start flex-row  w-full h-full'>
            {
                isUsersSelected
                && <DashboardUserPage/>
            }
            <DashboardNavbar isDoctorsSelected={isDoctorsSelected} setDoctorsSelected={setDoctorsSelected}
                             isUsersSelected={isUsersSelected} setUsersSelected={setUsersSelected}
                             isSpecialitiesSelected={isSpecialitiesSelected}
                             setSpecialitiesSelected={setSpecialitiesSelected}/>
        </div>
    )
}

export default Dashboard;