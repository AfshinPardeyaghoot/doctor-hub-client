import Message from "./Message";
import {useRef} from "react";

function Messages({messages, page, setPage, isLastPage, isFinished}) {

    const listInnerRef = useRef();

    const onScroll = () => {
        if (listInnerRef.current) {
            const {scrollTop} = listInnerRef.current;
            if (scrollTop === 0 && !isLastPage) {
                setPage(page + 1)
            }
        }
    };


    return (
        <div onScroll={onScroll} ref={listInnerRef}
             className={isFinished ? 'h-[calc(100%-65px)] p-[10px] overflow-auto scroll-smooth bg-neutral-100':'h-[calc(100%-125px)] p-[10px] overflow-auto scroll-smooth bg-neutral-100'}>
            {
                messages &&
                messages.map((message) => {
                    return (
                        <Message message={message}/>
                    )
                })
            }
        </div>
    )
}

export default Messages;