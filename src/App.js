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
import {Toaster} from "react-hot-toast";
import Dashboard from "./page/dashboard/Dashboard";


function App() {
    return (
        <div className="App bg-gray-100 appFont">
            <Toaster/>
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
                <Route path={'/dashboard'} element={<Dashboard/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
