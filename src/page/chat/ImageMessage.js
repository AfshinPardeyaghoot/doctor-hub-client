function ImageMessage({isOwner, content}) {


    return (
        <p className={isOwner ? 'bg-green-600 text-gray-100 p-[5px] rounded-b-xl rounded-l-xl' : 'bg-white p-[5px] rounded-b-xl rounded-r-xl'}>
            <img className={isOwner
                ? 'object-cover rounded-b-2xl rounded-l-2xl w-40 h-40'
                : 'object-cover rounded-b-2xl rounded-r-2xl w-40 h-40'
            }
                 src={content}
                 alt="error"/>
            <div className={isOwner ? 'mt-2 pr-1 text-gray-100 text-[10px] flex items-start justify-end' :
                'mt-2 pl-1 text-gray-500 text-[10px] flex items-end justify-start'}>11:23
            </div>
        </p>
    )
}

export default ImageMessage;