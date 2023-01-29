import {useState} from "react";
import removeIconHover from "../../../static/icon/hoverRemove.png";
import removeIcon from "../../../static/icon/remove.png";
import editIconHover from "../../../static/icon/hoverEdit.png";
import editIcon from "../../../static/icon/edit.png";
import {useNavigate} from "react-router-dom";

function DashboardCategory({category, index, size}) {

    const navigate = useNavigate();
    const [isIconHover, setIsIconHover] = useState(false)
    const [isRemoveHover, setIsRemoveHove] = useState(false)
    const firstElementBorder = index === 0 ? ' border-t rounded-t-2xl border-gray-200 ' : '';
    const lastElementBorder = index === (size - 1) ? ' rounded-b-2xl ' : '';
    const bgColor = (index % 2 === 0) ? 'bg-white ' : 'bg-neutral-100';

    const handleIsIconHover = () => {
        setIsIconHover(!isIconHover)
    }

    const handleRemoveIconHover = () => {
        setIsRemoveHove(!isRemoveHover)
    }

    const navigateEditPage = () => {
        navigate("/dashboard/edit-category", {
            state: {
                id: category.id
            }
        })
    }


    return (
        <>
            <div key={category.id}
                 className={'flex flex-row justify-between px-5 h-18 items-center border-b border-x border-gray-200 ' + bgColor + firstElementBorder + lastElementBorder}>
                <div
                    className='text-neutral-700 items-center flex flex-row justify-center pt-2  rounded-lg cursor-pointer'>
                    <div onMouseEnter={handleRemoveIconHover} onMouseLeave={handleRemoveIconHover} className='p-2'>
                        {
                            isRemoveHover ?
                                <img src={removeIconHover} className='w-6 h-6 object-cover transition-all'
                                     alt={'error'}/> :
                                <img src={removeIcon} className='w-6 h-6 object-cover transition-all' alt={'error'}/>
                        }
                    </div>
                    <div onMouseEnter={handleIsIconHover} onMouseLeave={handleIsIconHover} onClick={navigateEditPage} className='p-2'>
                        {
                            isIconHover ?
                                <img src={editIconHover} className='w-6 h-6 object-cover transition-all'
                                     alt={'error'}/> :
                                <img src={editIcon} className='w-6 h-6 object-cover transition-all' alt={'error'}/>
                        }
                    </div>

                </div>
                <div className='flex flex-row py-2 my-2 items-center justify-center'>
                    <div className='text-gray-700 text-s px-3 mt-1 w-80 text-end'>{category.name}</div>
                    <div className='text-gray-800 text-m px-3 mt-1 rtl w-80 text-start pr-6'>{category.fullTitle}</div>
                    <div>
                        <img src={category.imageDownloadUrl} className={'object-cover h-12 w-12'}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardCategory;