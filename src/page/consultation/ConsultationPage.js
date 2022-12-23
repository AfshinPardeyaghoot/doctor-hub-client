import {useEffect, useState} from "react";
import useAuthRequest from "../../hook/useAuthRequest";
import ApiRoutes from "../../config/ApiRoutes";
import MainCategory from "../main/MainCategory";
import Consultation from "./Consultation";

function ConsultationPage() {

    const [consultations, setConsultations] = useState();
    const [fetchUserConsultationList] = useAuthRequest();

    useEffect(() => {
        const callFetchConsultationList = async () => {
            fetchUserConsultationList({
                url: ApiRoutes.FETCH_USER_CONSULTATIONS,
                method: 'GET',
                params: {
                    size: 10
                }
            }).then(res => {
                setConsultations(res.data.content)
            }).catch(e => {

                }
            )
        }

        callFetchConsultationList().then()

    }, [])


    return (
        <div>{
            consultations &&
            consultations.map((consultation) => {
                return (
                    <div>
                        <Consultation consultation={consultation}/>
                    </div>
                )
            })
        }
        < /div>)
}

export default ConsultationPage;