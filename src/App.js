import {Route, Routes} from "react-router-dom";
import "./App.css";
import LoginPage from "./page/authentication/login/Login";
import ConfirmLogin from "./page/authentication/confirmLogin/ConfirmLogin";
import Main from "./page/main/Main";
import CategoryPage from "./page/category/CategoryPage";
import DoctorsPage from "./page/doctor/DoctorsPage";
import DoctorProfile from "./page/doctor/profile/DoctorProfile";
import ConsultationPage from "./page/consultation/ConsultationPage";
import Chat from "./page/chat/Chat";
import EditInfo from "./page/editInfo/EditInfo";
import Dashboard from "./page/dashboard/Dashboard";
import DashboardUserEdit from "./page/dashboard/user/DashboardUserEdit";
import DashboardCategoryEdit from "./page/dashboard/category/DashboardCategoryEdit";


function App() {
    return (
        <div className="App bg-gray-100 appFont">
            <Routes>
                <Route path="/" element={<Main/>}></Route>
                <Route path="/login" element={<LoginPage/>}></Route>
                <Route path="/confirmLogin" element={<ConfirmLogin/>}></Route>
                <Route path="/categories" element={<CategoryPage/>}></Route>
                <Route path="/doctors" element={<DoctorsPage/>}></Route>
                <Route path="/doctor" element={<DoctorProfile/>}></Route>
                <Route path="/consultations" element={<ConsultationPage/>}></Route>
                <Route path="/chat" element={<Chat/>}></Route>
                <Route path="/editInfo" element={<EditInfo/>}></Route>
                <Route path='/dashboard' element={<Dashboard/>}></Route>
                <Route path='/dashboard/edit-user' element={<DashboardUserEdit/>}/>
                <Route path='/dashboard/edit-category' element={<DashboardCategoryEdit/>}/>
            </Routes>
        </div>
    );
}

export default App;
