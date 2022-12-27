import aboutIcon from "../../../static/icon/about.png";

function DoctorAbout({description}) {
    return (
        <div
            className="w-[100%] py-8 flex flex-col text-gray-700 justify-center items-center pr-2 border-b-[1px] md:border-t-[1px] border-solid border-gray-300">
            <div className="w-[100%] flex flex-row items-center justify-end font-semibold">
                <div>درباره پزشک</div>
                <img src={aboutIcon} className="h-5 w-5 mx-3" alt="error"/>
            </div>
            <div
                className="w-[100%] mt-5 text-gray-600 rtl flex justify-end items-center text-[13px] text-right mx-3 px-3 pl-5 tracking-wider">
                {description}
            </div>
        </div>
    )
}

export default DoctorAbout;