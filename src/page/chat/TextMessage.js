function TextMessage({isOwner, content}) {
    return (
        <p className={isOwner ? 'bg-emerald-600 rtl text-gray-100 p-[5px] text-start rounded-t-2xl px-3 rounded-l-2xl' : 'bg-white p-[5px] px-3 text-end rounded-t-2xl rtl rounded-r-2xl'}>{content}
            <div className={isOwner ? 'relative b-0 r-0 text-gray-100 text-[9px] flex items-start justify-end' :
                'relative b-0 r-0 text-gray-500 text-[9px] flex items-end justify-start'}>11:23
            </div>
        </p>
    )
}

export default TextMessage;