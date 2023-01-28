import {useState} from "react";
import DashboardNavbar from "./DashboardNavbar";
import DashboardUserPage from "./user/DashboardUserPage";
import DashboardSpecialityPage from "./speciality/DashboardSpecialityPage";

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
            {
                isSpecialitiesSelected
                && <DashboardSpecialityPage/>

            }
            <DashboardNavbar isDoctorsSelected={isDoctorsSelected} setDoctorsSelected={setDoctorsSelected}
                             isUsersSelected={isUsersSelected} setUsersSelected={setUsersSelected}
                             isSpecialitiesSelected={isSpecialitiesSelected}
                             setSpecialitiesSelected={setSpecialitiesSelected}/>
        </div>
    )
}

export default Dashboard;