import Message from "./Message";
import Consultation from "../consultation/Consultation";

function Messages({messages}) {

    console.log('message size is : ' + messages.length)

    return (
        <div className="h-[calc(100%-125px)] p-[10px] overflow-scroll scroll-smooth bg-green-50">
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