import {useEffect, useState} from "react";
import Doctor from "./Doctor";
import useRequest from "../../hook/useRequest";
import ApiRoutes from "../../config/ApiRoutes";

function DoctorList({categoryId, doctorName}) {


    const [doctors, setDoctors] = useState([]);
    const [page, setPage] = useState(0);
    const [isLastPage, setIsLastPage] = useState(true)
    const [fetchDoctorsReq] = useRequest();

    const handlePageNumber = () => {
        setPage(page + 1);
    }

    const url = categoryId ? ApiRoutes.FETCH_CATEGORIES_DOCTORS + '/' + categoryId + '/doctors' : ApiRoutes.FETCH_DOCTORS;

    useEffect(() => {
        const fetchData = async () => {
            fetchDoctorsReq({
                url: url,
                method: "GET",
                params: {
                    page: page,
                    size: 5
                }
            }).then(res => {
                setDoctors(doctors.concat(res.data.content))
                setIsLastPage(res.data.last)
            }).catch(e => {

                }
            )
        }

        fetchData();
    }, [page])

    return (
        <div className="w-[100%]">
            {
                doctors.map((doctor) => {
                    return (
                        <div>
                            <Doctor doctor={doctor}/>
                        </div>
                    )
                })
            }
            {
                !isLastPage &&
                <div className="w-[100%] flex items-center justify-end">
                    <button onClick={handlePageNumber}
                            className="bg-green-400 text-white w-36 h-10 rounded border-2 border-double border-green-400 hover:border-white">
                        نمایش بیشتر
                    </button>
                </div>
            }

        </div>

    )

}

export default DoctorList;