function DashboardUser({user, index, size}) {


    const firstElementBorder = index === 0 ? ' border-t rounded-t-2xl border-gray-200 ' : '';
    const lastElementBorder = index === (size - 1) ? ' rounded-b-2xl ' : '';
    const bgColor = (index % 2 === 0) ? 'bg-white ' : 'bg-neutral-100';

    return (
        <>
            <div
                className={'flex flex-row justify-between px-5 h-18 items-center border-b border-x border-gray-200 ' + bgColor + firstElementBorder + lastElementBorder}>
                <div
                    className='bg-emerald-400 text-neutral-700 border-[1px] items-center justify-center border-double border-emerald-300 p-2 px-4 rounded-lg hover:border-white hover:bg-emerald-500 cursor-pointer'>
                    ویرایش
                </div>
                <div className='flex flex-col py-1'>
                    <div className='text-gray-800 text-m px-3 py-1'>{user.username}</div>
                    <div className='text-gray-800 text-m px-3 py-1'>{user.phone}</div>
                </div>
            </div>
        </>
    )
}

export default DashboardUser;