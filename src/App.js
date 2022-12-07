import {Route, Routes} from "react-router-dom";
import "./App.css";
import LoginPage from "./page/authentication/login/Login";
import ConfirmLogin from "./page/authentication/confirmLogin/ConfirmLogin";
import Main from "./page/main/Main";
import CategoryPage from "./page/category/CategoryPage";
import Doctor from "./page/Doctor/Doctor";
import DoctorsPage from "./page/Doctor/DoctorsPage";


function App() {
    return (
        <div className="App bg-gray-100">
            <Routes>
                <Route path="/" element={<Main/>}></Route>
                <Route path="/login" element={<LoginPage/>}></Route>
                <Route path="/confirmLogin" element={<ConfirmLogin/>}></Route>
                <Route path="/categories" element={<CategoryPage/>}></Route>
                <Route path="/doctors" element={<DoctorsPage/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
