function ImageMessage({message}) {
    const {isOwner} = message

    return (
        <p className={isOwner ? 'bg-green-600 text-gray-100 p-[5px] rounded-b-2xl rounded-l-2xl' : 'bg-white p-[5px] rounded-b-2xl rounded-r-2xl'}>
            <img className={isOwner
                ? 'object-cover rounded-b-2xl rounded-l-2xl w-40 h-40'
                : 'object-cover rounded-b-2xl rounded-r-2xl w-40 h-40'
            }
                 src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH_VDaGfxQ_cPhkgDPyoxXJgnnKHzEw7kdg&usqp=CAU'}
                 alt="error"/>
            <div className={isOwner ? 'mt-2 pr-1 text-gray-100 text-[10px] flex items-start justify-end' :
                'mt-2 pl-1 text-gray-500 text-[10px] flex items-end justify-start'}>11:23
            </div>
        </p>
    )
}

export default ImageMessage;