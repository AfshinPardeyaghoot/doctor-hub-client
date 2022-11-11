import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/navbar/component/Navbar";
import LoginPage from "./pages/loginPage/component/LoginPage";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
