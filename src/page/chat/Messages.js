import Message from "./Message";
import Consultation from "../consultation/Consultation";

function Messages({messages}) {


    return (
        <div className="h-[calc(100%-125px)] p-[10px] overflow-scroll bg-green-50">
            {
                messages &&
                messages.map((message) => {
                    return (
                        <Message message={message}/>
                    )
                })
            }
        </div>
    )
}

export default Messages;