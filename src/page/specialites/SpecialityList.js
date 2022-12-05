import {useEffect, useState} from "react";
import useRequest from "../../hook/useRequest";
import ApiRoutes from "../../config/ApiRoutes";
import MainSpeciality from "../main/MainSpeciality";
import Speciality from "./Speciality";

function SpecialityList() {

    const [specialities, setSpecialities] = useState([]);
    const [fetchSpecialitiesReq] = useRequest();


    useEffect(() => {
        const fetchData = async () => {
            fetchSpecialitiesReq({
                url: ApiRoutes.FETCH_SPECIALITIES,
                method: "GET",
                params: {
                    page: 0,
                    size: 100
                }
            }).then(res => {
                setSpecialities(res.data.content)
            }).catch(e => {

                }
            )
        }

        fetchData();
    }, [])

    return (
        <div>
            {
                specialities.map((speciality) => {
                    return (
                        <div>
                            <Speciality speciality={speciality}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SpecialityList;