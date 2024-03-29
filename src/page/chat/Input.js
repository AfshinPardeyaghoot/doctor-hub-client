import uploadImageIcon from '../../static/icon/upload-image.png'
import uploadFileIcon from '../../static/icon/upload-file.png'
import {useState} from "react";

function Input({sendMessage, sendFileMessage}) {

    const [message, setMessage] = useState();
    const handleSendMessage = () => {
        sendMessage(message)
    }
    const handleMessageChange = (msg) => {
        setMessage(msg);
    }
    const handleImageChange = (e) => {
        if (e.target.files) {
            sendFileMessage(e.target.files[0], 'IMAGE');
        }
    }

    const handleFileChange = (e) => {
        if (e.target.files) {
            sendFileMessage(e.target.files[0], 'FILE');
        }
    }


    return (
        <div
            className={'h-[65px] bg-white items-center justify-between p-[150x] border-t-[1px] flex border-gray-300 border border-solid'}>
            <input type="file" className="hidden" id="file" onChange={handleFileChange}/>
            <label htmlFor="file">
                <img className="h-6 w-10 cursor-pointer" src={uploadFileIcon} alt="error"/>
            </label>
            <input type="file" className="hidden" id="image" onChange={handleImageChange}/>
            <label htmlFor="image">
                <img className="h-10 w-10 cursor-pointer" src={uploadImageIcon} alt="error"/>
            </label>

            <input onChange={(e) => handleMessageChange(e.target.value)}
                   className="border-[1px] max-h-36 rounded-lg border-solid border-gray-300 mx-2 placeholder:text-gray-400 py-2 w-full outline-none text-[18px] text-gray-700 bg-gray-200"
                   type="text" placeholder="Type something..."/>
            <div className="flex justify-center gap-1">
                <button onClick={handleSendMessage}>
                    <svg
                        className="w-10 h-10 fill-current text-green-400 hover:text-green-700 hover:transition-all hover:scale-110"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000"
                        stroke-width="1" stroke-linecap="round" stroke-linejoin="miter">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_iconCarrier">
                            <polygon points="3 3 20 12 3 21 6 12 3 3" fill="#059cf7" opacity="0.1"></polygon>
                            <polygon points="3 3 20 12 3 21 6 12 3 3"></polygon>
                            <line x1="10" y1="12" x2="6" y2="12"></line>
                        </g>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Input;