import Message from "./Message";

function Messages() {

    const message1 = {
        isOwner: false,
        contentType: "TEXT"
    }

    const message2 = {
        isOwner: true,
        contentType: "FILE"
    }

    const message3 = {
        isOwner: false,
        contentType: "FILE"
    }

    const message4 = {
        isOwner: false,
        contentType: "IMAGE"
    }

    const message5 = {
        isOwner: true,
        contentType: "IMAGE"
    }


    return (
        <div className="h-[calc(100%-125px)] p-[10px] overflow-scroll bg-green-200">
            <Message message={message1}/>
            <Message message={message4}/>
            <Message message={message2}/>
            <Message message={message1}/>
            <Message message={message5}/>
            <Message message={message2}/>
            <Message message={message3}/>
            <Message message={message5}/>
            <Message message={message4}/>
            <Message message={message5}/>
        </div>
    )
}

export default Messages;