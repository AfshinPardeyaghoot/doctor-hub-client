import useAuthRequest from "./useAuthRequest";
import ApiRoutes from "../config/ApiRoutes";

const useCheckLogin = (setLogin) => {


    const [getUserInfoReg] = useAuthRequest()

    const checkLogin = async () => {
        await getUserInfoReg({
            url: ApiRoutes.USER_INFO_URL,
            method: "GET"
        }).then(res => {
            setLogin(true)
            return true;
        }).catch(e => {
            setLogin(false)
            return false;
        });
    }

    return [checkLogin];

}

export default useCheckLogin;