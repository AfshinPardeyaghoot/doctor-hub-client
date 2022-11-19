import { Route, Routes} from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/authentication/login/Login";
import ConfirmLogin from "./pages/authentication/confirmLogin/ConfirmLogin";
import Main from "./pages/Main/Main";

function App() {
    return (
        <div className="App bg-gray-100">
            <Routes>
                <Route path="/" element={<Main/>}></Route>
                <Route path="/login" element={<LoginPage/>}></Route>
                <Route path="/confirmLogin" element={<ConfirmLogin/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
