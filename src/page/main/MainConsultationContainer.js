import {useNavigate} from "react-router-dom";

function MainConsultationContainer() {

    const navigate = useNavigate();

    return (
        <div className="w-11/12 flex flex-col justify-center items-center my-3 md:hidden">
            <button onClick={() => navigate('/consultations')}
                    className="w-[100%] text-gray-700 hover:text-gray-900 bg-white border-[1px] border-solid border-gray-300 text-l text-center justify-center items-center h-14 rounded">
                مشاوره های من
            </button>
        </div>
    )

}

export default MainConsultationContainer;