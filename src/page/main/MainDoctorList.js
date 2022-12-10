import MainDoctor from "./MainDoctor";
import useRequest from "../../hook/useRequest";
import {useEffect, useState} from "react";
import ApiRoutes from "../../config/ApiRoutes";

function MainDoctorList() {
    const [doctors, setDoctors] = useState([]);
    const [fetchSpecialitiesReq] = useRequest();


    useEffect(() => {
        const fetchData = async () => {
            fetchSpecialitiesReq({
                url: ApiRoutes.FETCH_DOCTORS,
                method: "GET",
                params: {
                    page: 0,
                    size: 4
                }
            }).then(res => {
                console.log('doctors ' + JSON.stringify(res.data.content))
                setDoctors(res.data.content)
            }).catch(e => {

                }
            )
        }

        fetchData();
    }, [])

    return (
        <div className="bg-white bg-white flex flex-wrap justify-end w-11/12 my-5 md:w-11/12 md:items-end">
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