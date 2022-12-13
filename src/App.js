import {Route, Routes} from "react-router-dom";
import "./App.css";
import LoginPage from "./page/authentication/login/Login";
import ConfirmLogin from "./page/authentication/confirmLogin/ConfirmLogin";
import Main from "./page/main/Main";
import CategoryPage from "./page/category/CategoryPage";
import DoctorsPage from "./page/Doctor/DoctorsPage";
import DoctorProfile from "./page/Doctor/profile/DoctorProfile";


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
            </Routes>
        </div>
    );
}

export default App;
