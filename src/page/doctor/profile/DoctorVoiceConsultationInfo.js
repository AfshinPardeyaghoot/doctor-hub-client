import voiceChatIcon from "../../../static/icon/voice-chat.png";
import listItemIcon from "../../../static/icon/list-item.png";
import toFarsiNumber from "../../../method/toFarsiNumber";
import insertComma from "../../../method/insertationComma";

function DoctorVoiceConsultationInfo({price, id}) {
    return (
        <div
            className="w-[100%] text-gray-700 text-[15px] flex flex-col justify-end items-center border-gray-300 border-[1px] border-solid md:border-x-0 md:border-b-0">
            <div className="flex flex-row justify-end font-semibold items-center w-[100%] mt-5 mb-2 pr-3">
                <div>
                    مشاوره صوتی
                </div>
                <img className="h-5 w-5 mx-3" src={voiceChatIcon} alt="icon not loaded"/>
            </div>
            <div className="w-[100%] text-gray-700 text-[13px]">
                <ul className="w-[100%] flex flex-col justify-end items-center list-disc pr-5 pb-5 ">
                    <li className="w-[100%] flex flex-row justify-end items-center mt-3">
                        شروع تماس بلافاصله بعد از ثبت درخواست
                        <img src={listItemIcon} className="h-3 w-3 mx-2"/>
                    </li>
                    <li className="w-[100%] flex flex-row justify-end items-center mt-3">
                        پایان توافقی
                        <img src={listItemIcon} className="h-3 w-3 mx-2"/>
                    </li>
                </ul>
            </div>
            <div
                className="w-[95%] text-gray-700 bg-slate-100 h-10 border-[1px] border-gray-300 border-solid flex justify-center items-center rounded-t-lg rtl">
                {insertComma(toFarsiNumber(price))} تومان
            </div>
            <button
                className="w-[95%] text-white rounded-b-lg bg-emerald-500 border-2 border-double border-emerald-500 hover:border-white h-10 flex items-center justify-center mb-8">
                شروع مشاوره
            </button>
        </div>
    )
}

export default DoctorVoiceConsultationInfo;