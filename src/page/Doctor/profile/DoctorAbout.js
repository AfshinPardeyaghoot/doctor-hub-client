import aboutIcon from "../../../static/icon/about.png";

function DoctorAbout() {
    return (
        <div
            className="w-[100%] py-8 flex flex-col text-gray-700 justify-center items-center pr-2 border-b-[1px] border-solid border-gray-300">
            <div className="w-[100%] flex flex-row items-center justify-end font-semibold">
                <div>درباره پزشک</div>
                <img src={aboutIcon} className="h-5 w-5 mx-3" alt="error"/>
            </div>
            <div
                className="w-[100%] mt-5 text-gray-600 rtl flex justify-end items-center text-[13px] text-right mx-3 px-3 pl-5 tracking-wider">
                شماره نظام پزشکی: ت-6113 برای گرفتن برنامه غذایی و رژیم لطفا درخواست مشاوره متنی دهید تا
                راهنمایی شوید. مشاور تغذیه و تناسب اندام هستم، صاحب امتیاز اولین سیستم مشاوره تغذیه تلفنی در
                کشور. تجویز تخصصی مکمل های ورزشی بدنسازی بانوان. در صورت تمایل اصلاح مزاج و تنطیم برنامه از
                دیدگاه طب سنتی. در حال حاضر تمرکز اصلی کار ما روی تغذیه ورزشی و کاهش وزن بدون گرسنگی هست.
            </div>
        </div>
    )
}

export default DoctorAbout;