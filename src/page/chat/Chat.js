import Messages from "./Messages";
import Input from "./Input";
import {useLocation} from "react-router-dom";

function Chat() {

    const {state} = useLocation();
    const {id} = state;


    return (
        <div className="flex justify-center items-center">
            <div className="max-w-screen-lg bg-gray-100 shadow border-1px border-solid border-white w-full h-[100vh]">
                <div className="h-[65px] p-3 bg-green-400 flex items-center justify-end text-white rounded-b-lg">
                    <span className="font-bold mr-4 text-m text-green-900">
                        علی باقری
                    </span>
                    <span>
                        <img className="h-12 w-12 rounded-full object-cover outline-2 outline-green-800 shadow"
                             src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600"
                             alt="this is error"/>
                    </span>
                </div>
                <Messages/>
                <Input/>
            </div>
        </div>
    )
}

export default Chat;