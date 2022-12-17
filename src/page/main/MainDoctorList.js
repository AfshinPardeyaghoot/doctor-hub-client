import {useEffect, useState} from "react";
import useRequest from "../../hook/useRequest";
import ApiRoutes from "../../config/ApiRoutes";
import Doctor from "../Doctor/Doctor";
import MainDoctor from "./MainDoctor";

function MainDoctorList() {

    const [doctors, setDoctors] = useState([]);
    const [fetchDoctorsReq] = useRequest();

    useEffect(() => {
        const fetchData = async () => {
            fetchDoctorsReq({
                url: ApiRoutes.FETCH_DOCTORS,
                method: "GET",
                params: {
                    page: 0,
                    size: 5
                }
            }).then(res => {
                setDoctors(doctors.concat(res.data.content))
            }).catch(e => {

                }
            )
        }

        fetchData();
    }, [])

    return (
        <div className="w-[100%]">
            {
                doctors.map((doctor) => {
                    return (
                        <div>
                            <MainDoctor doctor={doctor}/>
                        </div>
                    )
                })
            }
        </div>

    )

}

export default MainDoctorList;