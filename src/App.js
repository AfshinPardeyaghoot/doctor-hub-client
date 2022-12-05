import {Route, Routes} from "react-router-dom";
import "./App.css";
import LoginPage from "./page/authentication/login/Login";
import ConfirmLogin from "./page/authentication/confirmLogin/ConfirmLogin";
import Main from "./page/main/Main";
import SpecialityPage from "./page/specialites/SpecialityPage";

function App() {
    return (
        <div className="App bg-gray-100">
            <Routes>
                <Route path="/" element={<Main/>}></Route>
                <Route path="/login" element={<LoginPage/>}></Route>
                <Route path="/confirmLogin" element={<ConfirmLogin/>}></Route>
                <Route path="/specialities" element={<SpecialityPage/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
