import {useState} from "react";
import Doctor from "./Doctor";

function DoctorList() {


    const [doctors, setDoctor] = useState([
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
        </div>

    )

}

export default DoctorList;