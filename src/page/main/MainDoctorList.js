import MainDoctor from "./MainDoctor";
import useRequest from "../../hook/useRequest";
import {useEffect, useState} from "react";
import ApiRoutes from "../../config/ApiRoutes";

function MainDoctorList() {
    const [doctors, setDoctors] = useState([
        {
            'name': 'افشین پرده یافوت',
            'description': 'دستیار تخصصی قلب ، عروق و فشار خون',
            'profileImage': 'http://localhost:9000/api/v1/file/download/c5139b43-305e-4a48-8c1d-13bf6ad90fc0',
        },
        {
            'name': 'افشین پرده یافوت',
            'description': 'متخصص بیماری های قلب و عروق',
            'profileImage': 'http://localhost:9000/api/v1/file/download/c5139b43-305e-4a48-8c1d-13bf6ad90fc0',
        },
        {
            'name': 'افشین پرده یافوت',
            'description': 'متخصص بیماری های مغز و اعصاب',
            'profileImage': 'http://localhost:9000/api/v1/file/download/c5139b43-305e-4a48-8c1d-13bf6ad90fc0',
        }
    ]);
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
                console.log('doctors '+ JSON.stringify(res.data.content))
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