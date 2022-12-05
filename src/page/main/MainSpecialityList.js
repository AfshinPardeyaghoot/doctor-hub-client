import MainSpeciality from "./MainSpeciality";
import {useEffect, useState} from "react";
import useRequest from "../../hook/useRequest";
import ApiRoutes from "../../config/ApiRoutes";

function MainSpecialityList() {

    const [specialities, setSpecialities] = useState([]);
    const [fetchSpecialitiesReq] = useRequest();


    useEffect(() => {
        const fetchData = async () => {
            fetchSpecialitiesReq({
                url: ApiRoutes.FETCH_SPECIALITIES,
                method: "GET",
                params: {
                    page: 0,
                    size: 4
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
        <div className="bg-white bg-white w-[21rem] flex flex-wrap justify-end md:w-11/12">

            {
                specialities.map((speciality) => {
                    return (
                        <div>
                            <MainSpeciality speciality={speciality}/>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default MainSpecialityList;