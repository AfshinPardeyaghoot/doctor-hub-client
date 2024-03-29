import TextMessage from "./TextMessage";
import FileMessage from "./FileMessage";
import ImageMessage from "./ImageMessage";

function Message({message, ref, id}) {
    const {isOwner, content, contentType, fileName} = message;


    return (
        <div ref={ref} id={id}
             className={isOwner ? 'flex gap-[20px] text-s min-w-[60px] mb-[10px] flex-row-reverse' : 'flex gap-[20px] mb-[10px]'}>
            {!isOwner && <div className="flex flex-col text-gray-500">
            </div>
            }
            <div className="max-w-[80%] text-gray-800 flex flex-col gap-[10px]">
                {
                    contentType === "TEXT" &&
                    <TextMessage isOwner={isOwner} content={content}/>
                }
                {
                    contentType === "FILE" &&
                    <FileMessage isOwner={isOwner} content={content} filename={fileName}/>
                }
                {
                    contentType === "IMAGE" &&
                    <ImageMessage isOwner={isOwner} content={content}/>
                }
            </div>
        </div>
    )

}

export default Message;