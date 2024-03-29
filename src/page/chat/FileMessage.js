import FileMessageIcon from '../../static/icon/file-message.png'

function FileMessage({isOwner, content, filename}) {
    return (
        <div
            className={isOwner ? 'bg-emerald-600 text-gray-100 p-[5px] rounded-t-xl rounded-l-xl' : 'bg-white p-[5px] rounded-t-xl rounded-r-xl'}>
            <a className="flex flex-row justify-center items-center gap-1" href={content}>
                <img className="h-12 w-12 object-cover" src={FileMessageIcon} alt="error"/>
                <div className="justify-center items-center">{filename}</div>
            </a>
            <div className={isOwner ? 'text-gray-100 text-[10px] flex items-start justify-end p-1' :
                'text-gray-500 text-[10px] flex items-end justify-start p-1'}>11:23
            </div>
        </div>
    )
}

export default FileMessage;