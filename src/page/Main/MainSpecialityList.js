import MainSpeciality from "./MainSpeciality";

function MainSpecialityList() {

    const specialities = [
        {
            'title': 'متخصص داخلی',
            'fullTitle':'مشاوره با متخصص بیماری های داخلی',
            'description':'دیابت ، فشارخون ، ریه ، گوارش ، غدد ، رماتیسم',
            'image': 'http://localhost:9000/api/v1/file/download/d91827de-c64e-4e56-a4b0-8cb9ccfd4222'
        },
        {
            'title': 'روانپزشک',
            'fullTitle':'مشاوره با متخصص روانپزشک',
            'description':'درمان و پیشگیری مشکلات روحی ، عاطفی و زفتاری',
            'image': 'http://localhost:9000/api/v1/file/download/d91827de-c64e-4e56-a4b0-8cb9ccfd4222'
        },
        {
            'title': 'متخصص داخلی',
            'fullTitle':'مشاوره با متخصص بیماری های داخلی',
            'description':'دیابت ، فشارخون ، ریه ، گوارش ، غدد ، رماتیسم',
            'image': 'http://localhost:9000/api/v1/file/download/d91827de-c64e-4e56-a4b0-8cb9ccfd4222'
        },
        {
            'title': 'روانپزشک',
            'fullTitle':'مشاوره با متخصص روانپزشک',
            'description':'درمان و پیشگیری مشکلات روحی ، عاطفی و زفتاری',
            'image': 'http://localhost:9000/api/v1/file/download/d91827de-c64e-4e56-a4b0-8cb9ccfd4222'
        }
    ]


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