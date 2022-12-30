import TextMessage from "./TextMessage";
import FileMessage from "./FileMessage";
import ImageMessage from "./ImageMessage";

function Message({message}) {
    const {isOwner, contentType} = message;

    return (
        <div className={isOwner ? 'flex gap-[20px] mb-[20px] flex-row-reverse' : 'flex gap-[20px] mb-[20px]'}>
            {!isOwner && <div className="flex flex-col text-gray-500">
                <img className="w-[40px] h-[40px] rounded-full object-cover"
                     src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600"
                     alt="error"/>
            </div>
            }
            <div className="max-w-[80%] text-gray-800 flex flex-col gap-[10px]">
                {
                    contentType === "TEXT" &&
                    <TextMessage message={message}/>
                }
                {
                    contentType === "FILE" &&
                    <FileMessage message={message}/>
                }
                {
                    contentType === "IMAGE" &&
                    <ImageMessage message={message}/>
                }
            </div>
        </div>
    )

}

export default Message;