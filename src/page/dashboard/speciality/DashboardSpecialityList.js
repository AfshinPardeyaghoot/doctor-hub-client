import useAuthRequest from "../../../hook/useAuthRequest";
import {useEffect, useState} from "react";
import ApiRoutes from "../../../config/ApiRoutes";
import DashboardSpeciality from "./DashboardSpeciality";

function DashboardSpecialityList({search, setIsFirst, setIsLast, page, setTotalPage, setSpeciality, setShowEditModal}) {
    const [fetchSpecialitiesReq] = useAuthRequest();
    const [specialities, setSpecialities] = useState([])
    const [specialitiesCount, setSpecialitiesCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            fetchSpecialitiesReq({
                url: ApiRoutes.FETCH_ALL_SPECIALITIES,
                method: 'GET',
                params: {
                    search: search ? search : null,
                    page: page
                }

            }).then(res => {
                setSpecialities(res.data.content)
                setSpecialitiesCount(res.data.numberOfElements)
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
                specialities && specialities.map((speciality, index) => <DashboardSpeciality speciality={speciality} setShowEditModal={setShowEditModal}
                                                                                             index={index} setSpeciality={setSpeciality}
                                                                                             size={specialitiesCount}/>)
            }
        </div>
    )

}

export default DashboardSpecialityList;