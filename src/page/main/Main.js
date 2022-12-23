import Navbar from "../navbar/Navbar";
import MainCategoryListContainer from "./MainCategoryListContainer";
import MainDoctorListContainer from "./MainDoctorListContainer";
import MainConsultationContainer from "./MainConsultationContainer";
import useCheckLogin from "../../hook/useCheckLogin";
import {useEffect, useState} from "react";

function Main() {

    const [isLogin, setLogin] = useState(false);
    const [checkLogin] = useCheckLogin(setLogin);

    useEffect(() => {
        const callCheckLogin = async () => {
            checkLogin().then()
        }

        callCheckLogin().then();
    }, [])


    return (
        <div className="h-screen bg-slate-100 w-screen">
            <Navbar></Navbar>
            <div className="flex justify-center flex-col items-center">
                <MainCategoryListContainer/>
                {isLogin &&
                    <MainConsultationContainer/>
                }
                <MainDoctorListContainer/>
            </div>
        </div>
    )
}

export default Main;