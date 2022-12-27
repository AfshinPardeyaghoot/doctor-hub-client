import {useEffect, useState} from "react";
import useRequest from "../../hook/useRequest";
import ApiRoutes from "../../config/ApiRoutes";
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
        <div className="w-[100%] flex flex-wrap justify-center md:justify-end">
            {
                doctors.map((doctor) => {
                    return (
                        <div className="w-[100%] md:w-1/3 md:min-w-[380px]">
                            <MainDoctor
                                doctor={doctor}/>
                        </div>
                    )
                })
            }
        </div>

    )

}

export default MainDoctorList;