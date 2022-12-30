import {useNavigate} from "react-router-dom";
import apiAuthRoles from "../config/ApiAuthRoles";


const useAuthNavigate = (ApiAuthRoles, role, url, state) => {

    const navigate = useNavigate();

    const authNavigate = (ApiAuthRoles, role, url, state) => {
        if (ApiAuthRoles.includes(role)) {
            navigate(url, {
                state: state
            })
        } else {
            navigate("/");
        }
    }

    return authNavigate(apiAuthRoles, role, url, state);
}

export default useAuthNavigate;