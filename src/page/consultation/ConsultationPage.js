import {useEffect, useState} from "react";
import useAuthRequest from "../../hook/useAuthRequest";
import ApiRoutes from "../../config/ApiRoutes";
import Consultation from "./Consultation";

function ConsultationPage() {

    const [consultations, setConsultations] = useState([]);
    const [page, setPage] = useState(0);
    const [isLastPage, setIsLastPage] = useState(true)
    const [fetchUserConsultationList] = useAuthRequest();

    const handlePageNumber = () => {
        setPage(page + 1);
    }

    useEffect(() => {
        const callFetchConsultationList = async () => {
            fetchUserConsultationList({
                url: ApiRoutes.FETCH_USER_CONSULTATIONS,
                method: 'GET',
                params: {
                    size: 10,
                    page: page
                }
            }).then(res => {
                setConsultations(consultations.concat(res.data.content))
                setIsLastPage(res.data.last)
            }).catch(e => {

                }
            )
        }

        callFetchConsultationList().then()

    }, [page])


    return (
        <div className="w-full">
            <div className="flex justify-center w-[100%] px-1 flex-col items-center">
                <div className="w-full flex flex-col justify-center items-center max-w-screen-lg">
                    <div
                        className="py-4 text-l text-gray-700 border-[1px] border-gray-200 border-solid w-[95%] bg-white mt-4 rounded shadow">
                        مشاوره ها
                    </div>
                    <div className="flex flex-col w-[95%] justify-center items-center">
                        {
                            consultations &&
                            consultations.map((consultation) => {
                                return (
                                    <div className="w-[98%] max-w-screen-lg">
                                        <Consultation consultation={consultation}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            {
                !isLastPage &&
                <div className="w-[100%] flex items-center justify-end pr-8 my-6 max-w-screen-lg">
                    <button onClick={handlePageNumber}
                            className="bg-white text-green-400 hover:text-green-600 text-s w-36 py-1 rounded border-[1px] border-solid border-green-400 hover:border-green-600">
                        نمایش بیشتر
                    </button>
                </div>
            }
        < /div>)
}

export default ConsultationPage;