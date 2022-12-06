import MainSpeciality from "./MainSpeciality";
import MainDoctor from "./MainDoctor";

function MainDoctorList() {
    const doctors = [
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
    ]

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