import {useEffect, useState} from "react";
import useAuthRequest from "../../hook/useAuthRequest";
import ApiRoutes from "../../config/ApiRoutes";
import Consultation from "./Consultation";

function ConsultationPage() {

    const [consultations, setConsultations] = useState([]);
    const [finishedConsultations, setFinishedConsultations] = useState([]);
    const [page, setPage] = useState(0);
    const [isLastPage, setIsLastPage] = useState(true)
    const [fetchUserConsultationList] = useAuthRequest();
    const [isHistoryOpen, setHistoryOpen] = useState(false);

    const handlePageNumber = () => {
        setPage(page + 1);
    }

    const showConsultationHistory = () => {
        setHistoryOpen(true);
    }

    const closeConsultationHistory = () => {
        setHistoryOpen(false)
    }

    useEffect(() => {
        const callFetchConsultationList = async () => {
            fetchUserConsultationList({
                url: ApiRoutes.FETCH_USER_CONSULTATIONS,
                method: 'GET',
                params: {
                    size: 10,
                    page: 0,
                    status: 'IN_PROCESS'
                }
            }).then(res => {
                setConsultations(consultations.concat(res.data.content))
            }).catch(e => {

                }
            )
        }

        callFetchConsultationList().then()

    }, [page])

    useEffect(() => {
        const callFetchConsultationList = async () => {
            fetchUserConsultationList({
                url: ApiRoutes.FETCH_USER_CONSULTATIONS,
                method: 'GET',
                params: {
                    size: 10,
                    page: page,
                    status: 'FINISHED'
                }
            }).then(res => {
                setFinishedConsultations(finishedConsultations.concat(res.data.content))
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
                        className="py-4 bg-emerald-500 text-l text-neutral-100 border-[1px] border-gray-200 border-solid w-[95%] bg-white mt-4 rounded shadow">
                        مشاوره ها
                    </div>
                    <div className="text-gray-700 w-[95%] border-[1px] border-solid border-gray-300 border-y-0">
                        <button onClick={showConsultationHistory}
                                className={isHistoryOpen ? 'w-1/2 transition-all shadow bg-white rounded-b-2xl border-[1px] border-solid border-emerald-500 py-1 bg-emerald-500 text-white' : 'w-1/2 bg-white rounded-b-2xl border-[1px] border-solid bg-neutral-50 py-1'}>سوابق
                            مشاوره
                        </button>
                        <button onClick={closeConsultationHistory}
                                className={isHistoryOpen ? 'w-1/2 bg-white transition-all rounded-b-2xl border-[1px] border-solid bg-neutral-50 py-1' : 'w-1/2 bg-white rounded-b-2xl border-[1px] border-solid border-emerald-500 py-1 bg-emerald-500 text-white'}>مشاوره
                            های در جریان
                        </button>
                    </div>
                    <div
                        className="flex min-h-[85vh]  flex-col w-[95%] justify-start pt-3 pb-10 items-end border-[1px] border-t-0 border-solid border-gray-300">
                        {   !isHistoryOpen &&
                            consultations &&
                            consultations.map((consultation) => {
                                return (
                                    <div className="w-[98%] max-w-screen-lg">
                                        <Consultation consultation={consultation}/>
                                    </div>
                                )
                            })
                        }
                        {   isHistoryOpen &&
                            finishedConsultations &&
                            finishedConsultations.map((consultation) => {
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