import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import "./App.css";
import Navbar from "./pages/navbar/component/Navbar";
import LoginPage from "./pages/authentication/login/component/Login";
import ConfirmLogin from "./pages/authentication/confirmLogin/ConfirmLogin";

function App() {
    return (
        <div className="App bg-gray-100">
            <Navbar></Navbar>
            <Routes>
                <Route path="/login" element={<LoginPage/>}></Route>
                <Route path="/confirmLogin" element={<ConfirmLogin></ConfirmLogin>}></Route>
            </Routes>
        </div>
    );
}

export default App;
