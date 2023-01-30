import useAuthRequest from "../../../hook/useAuthRequest";
import {useEffect, useState} from "react";
import ApiRoutes from "../../../config/ApiRoutes";
import DashboardCategory from "../category/DashboardCategory";
import DashboardDoctor from "./DashboardDoctor";
import doctor from "../../doctor/Doctor";

function DashboardDoctorList({search, setIsFirst, setIsLast, page, setTotalPage}){

    const [fetchDoctorsReq] = useAuthRequest();
    const [doctors, setDoctors] = useState([])
    const [doctorsCount, setDoctorsCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            fetchDoctorsReq({
                url: ApiRoutes.FETCH_DOCTORS,
                method: 'GET',
                params: {
                    name: search ? search : null,
                    page: page,
                    size: 8
                }

            }).then(res => {
                setDoctors(res.data.content)
                setDoctorsCount(res.data.numberOfElements)
                setIsLast(res.data.last)
                setIsFirst(res.data.first)
                setTotalPage(res.data.totalPages)
            })
        }

        fetchData().then(res => {
        })
    }, [search, page])

    return (
        <div
            className='min-h-[80%] max-h-[80%]'>
            {
                doctors && doctors.map((doctor, index) => <DashboardDoctor index={index} doctor={doctor}
                                                                                     size={doctorsCount}/>)
            }
        </div>
    )

}

export default DashboardDoctorList;