import {useNavigate} from "react-router-dom";
import editIconHover from "../../../static/icon/hoverEdit.png";
import editIcon from "../../../static/icon/edit.png";
import {useState} from "react";

function DashboardUser({user, index, size}) {

    const navigate = useNavigate();
    const [isIconHover, setIsIconHover] = useState(false)
    const navigateUserEditPage = () => {
        navigate("/dashboard/edit-user", {
            state: {
                id: user.id
            }
        })
    }

    const firstElementBorder = index === 0 ? ' border-t rounded-t-2xl border-gray-200 ' : '';
    const lastElementBorder = index === (size - 1) ? ' rounded-b-2xl ' : '';
    const bgColor = (index % 2 === 0) ? 'bg-white ' : 'bg-neutral-100';

    const handleIsIconHover = () => {
        setIsIconHover(!isIconHover)
    }


    return (
        <>
            <div
                className={'flex flex-row justify-between px-5 h-18 items-center border-b border-x border-gray-200 ' + bgColor + firstElementBorder + lastElementBorder}>
                <div onMouseEnter={handleIsIconHover} onMouseLeave={handleIsIconHover} className='p-2'
                     onClick={navigateUserEditPage}>
                    {
                        isIconHover ?
                            <img src={editIconHover} className='w-6 h-6 object-cover transition-all'
                                 alt={'error'}/> :
                            <img src={editIcon} className='w-6 h-6 object-cover transition-all' alt={'error'}/>
                    }
                </div>
                <div className='flex flex-col py-2'>
                    <div className='text-gray-800 text-m px-3 mt-1 rtl w-80 text-start'>{user.username}</div>
                    <div className='text-gray-700 text-s px-3 mt-1 w-80 text-end'>{user.phone}</div>
                </div>
            </div>
        </>
    )
}

export default DashboardUser;