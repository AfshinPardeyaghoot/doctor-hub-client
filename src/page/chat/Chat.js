import Messages from "./Messages";
import Input from "./Input";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import ApiRoutes from "../../config/ApiRoutes";
import useAuthRequest from "../../hook/useAuthRequest";
import axios from "axios";
import saveAuthenticationTokens from "../../method/saveAuthenticationTokens";
import ConsultationRate from "../consultation/ConsultationRate";

let stompClient = null;


function Chat() {

    const [fetchConsultationReq] = useAuthRequest();
    const [fetchChatMessagesReq] = useAuthRequest();
    const [sendChatMessageFileReq] = useAuthRequest();
    const [sendEndConsultationReq] = useAuthRequest();

    const [user, setUser] = useState({
        id: null
    })
    const [secondUser, setSecondUser] = useState({
        id: null, username: null, profileImage: null
    });
    const authUserId = localStorage.getItem('u_uuid');
    const [messages, setMessages] = useState([]);
    const {state} = useLocation();
    const {id} = state;
    const [chatId, setChatId] = useState(null);
    const [isFinished, setIsFinished] = useState(true);
    const [page, setPage] = useState(0);
    const [isLastPage, setIsLastPage] = useState(true);
    const [isDoctor, setIsDoctor] = useState(false)
    const [isRateModalOpen, setIsRateModalOpen] = useState(false);

    useEffect(() => {
        connect();
    }, [user])


    useEffect(() => {
        const fetchUserData = async () => {
            fetchConsultationReq({
                url: ApiRoutes.FETCH_CONSULTATION + '/' + id,
                method: "GET"
            }).then(res => {
                const {id, doctor, user, chat, statusType} = res.data;
                setChatId(chat.id)
                setIsFinished(statusType === 'FINISHED')
                fetchChatMessages(chat.id)
                if (authUserId === user.id) {
                    setSecondUser({
                        id: doctor.id,
                        username: doctor.name,
                        profileImage: doctor.profileImage
                    })
                    setUser({
                        id: user.id
                    })
                } else {
                    setIsDoctor(true)
                    setSecondUser({
                        id: user.id,
                        username: user.username
                    })
                    setUser({
                        id: doctor.id
                    })
                }

            }).catch(e => {

            })
        }

        fetchUserData();

    }, [])

    const fetchChatMessages = async (chatId) => {
        fetchChatMessagesReq({
            url: ApiRoutes.FETCH_CHAT_MESSAGES + '/' + chatId + '/messages',
            method: "GET",
            params: {
                page: page,
                size: 15
            }
        }).then(res => {
            setIsLastPage(res.data.last)
            if (page === 0)
                setMessages(prevMessage => prevMessage.concat(res.data.content).reverse())
            else setMessages(prevMessage => res.data.content.reverse().concat(prevMessage))
        })
    }

    useEffect(() => {
        fetchChatMessages(chatId).then()

    }, [page])


    const connect = () => {
        const Stomp = require("stompjs");
        let SockJS = require("sockjs-client");
        SockJS = new SockJS("http://localhost:9000/ws");
        stompClient = Stomp.over(SockJS);
        const accessTokenExpireAt = localStorage.getItem('accessTokenExpireAt')
        const accessTokenExpireDate = new Date(+accessTokenExpireAt);
        const refreshTokenExpiredAt = localStorage.getItem("refreshTokenExpireAt")
        const refreshTokenExpireDate = new Date(+refreshTokenExpiredAt);
        if ((accessTokenExpireDate < new Date) && (refreshTokenExpireDate > new Date())) {
            const oldRefreshToken = localStorage.getItem("refreshToken")

            const response = axios.get(
                ApiRoutes.BASE_URL + ApiRoutes.REFRESH_ACCESS_TOKEN_URL + oldRefreshToken
            );
            const {id, token} = response.data;
            const {accessToken, accessTokenExpireAt, refreshToken, refreshTokenExpireAt} = token;
            saveAuthenticationTokens(id, accessToken, accessTokenExpireAt, refreshToken, refreshTokenExpireAt)
        }
        const accessToken = localStorage.getItem('accessToken')

        stompClient.connect({'Authorization': `Bearer ${accessToken}`}, onConnected, onError);
    };

    const onConnected = () => {
        if (user.id != null && chatId != null)
            stompClient.subscribe(
                "/chat/" + chatId + "/user/" + user.id,
                onMessageReceived
            );
    };

    const onError = (err) => {

    };

    const handleFinishChat = () => {
        sendEndConsultationReq({
            url: ApiRoutes.SEND_END_CHAT + '/' + chatId + '/end',
            method: 'PUT'

        }).then(res => {
        })

        const message = {
            consultationId: id,
            chatId: chatId,
            isOwner: true,
            receiverId: secondUser.id,
            contentType: 'END_ALERT'
        }

        stompClient.send("/app/chat.sendMessage", {}, JSON.stringify(
            message
        ));
    }

    const onMessageReceived = (msg) => {
        let {body} = msg
        if (JSON.parse(body).contentType === 'END_ALERT') {
            setIsRateModalOpen(true)
            console.log('fucking here end alert')
        } else {
            setMessages(prevMessage => [...prevMessage, JSON.parse(body)])
        }
    };

    const sendFilMessage = (file, contentType) => {
        const chatMessageFilePostDTO = new FormData();
        chatMessageFilePostDTO.append('file', file);
        chatMessageFilePostDTO.append('contentType', contentType);
        chatMessageFilePostDTO.append('receiverId', secondUser.id);
        chatMessageFilePostDTO.append('chatId', chatId);

        sendChatMessageFileReq({
            url: ApiRoutes.SEND_FILE_MESSAGE,
            method: 'POST',
            data: chatMessageFilePostDTO
        }).then(res => {
            const newMessages = [...messages];
            newMessages.push(res.data);
            setMessages(newMessages);
        })
    }


    const sendMessage = (msg) => {
        if (msg.trim() !== "") {
            const message = {
                consultationId: id,
                chatId: chatId,
                isOwner: true,
                receiverId: secondUser.id,
                contentType: 'TEXT',
                content: msg
            }

            stompClient.send("/app/chat.sendMessage", {}, JSON.stringify(
                message
            ));

            const newMessages = [...messages];
            newMessages.push(message);
            setMessages(newMessages);
            window.scrollTo(0, window.innerHeight)
        }
    };

    return (
        <div className="flex justify-center items-center">
            {isRateModalOpen && <ConsultationRate consultationId={id} setIsRateModalOpen={isRateModalOpen}/>}
            <div
                className="max-w-screen-lg shadow border-1px border-solid border-white w-full h-[100vh]">
                <div
                    className={(isDoctor && !isFinished) ? 'h-[65px] p-3 bg-emerald-500 flex justify-between items-center text-white rounded-b-lg' : 'h-[65px] p-3 bg-emerald-500 flex justify-end items-center text-white rounded-b-lg'}>
                    {isDoctor && !isFinished &&
                        < button className="relative rounded-lg bg-emerald-200 text-s text-red-600 p-2"
                                 onClick={handleFinishChat}>اتمام مشاوره
                        </button>}
                    <div className="flex items-center">
                        {secondUser && <span className="font-bold mr-4 text-m text-green-900">
                    {secondUser.username}
                        </span>}
                        {secondUser && secondUser.profileImage && <span>
                        <img className="h-12 w-12 rounded-full object-cover outline-2 outline-green-800 shadow"
                             src={secondUser.profileImage}
                             alt="this is error"/>
                        </span>}
                    </div>
                </div>
                <Messages isFinished={isFinished} messages={messages} page={page} setPage={setPage}
                          isLastPage={isLastPage}/>
                {!isFinished &&
                    <Input sendMessage={sendMessage} sendFileMessage={sendFilMessage}/>
                }


            </div>
        </div>
    )
}

export default Chat;