import Message from "./Message";
import Consultation from "../consultation/Consultation";
import {useRef} from "react";

function Messages({messages, page, setPage, isLastPage}) {

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
             className="h-[calc(100%-125px)] p-[10px] overflow-auto scroll-smooth bg-green-50">
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