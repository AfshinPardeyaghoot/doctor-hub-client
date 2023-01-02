function TextMessage({message}) {
    const {isOwner, content} = message
    return (
        <p className={isOwner ? 'bg-green-600 text-gray-100 p-[5px] rounded-b-2xl px-3 rounded-l-2xl' : 'bg-white p-[5px] px-3 rounded-b-2xl rounded-r-2xl'}>
            <div className={isOwner ? 'relative b-0 r-0 text-gray-100 text-[10px] flex items-start justify-end' :
                'relative b-0 r-0 text-gray-500 text-[10px] flex items-end justify-start'}>11:23
            </div>
        </p>
    )
}

export default TextMessage;