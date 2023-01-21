function DashboardUser({user, index}) {


    const bgColor = (index % 2 === 0) ? 'bg-emerald-100' : 'bg-gray-100';

    return (
        <>
            <div className={'flex flex-row justify-between px-5 items-center border-solid border-[1px] ' + bgColor}>
                <div
                    className='bg-emerald-300 border-[1px] items-center justify-center border-solid border-emerald-500 p-2 px-4 rounded-lg'>
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