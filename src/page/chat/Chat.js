import Messages from "./Messages";
import Input from "./Input";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import ApiRoutes from "../../config/ApiRoutes";
import useAuthRequest from "../../hook/useAuthRequest";
import axios from "axios";
import saveAuthenticationTokens from "../../method/saveAuthenticationTokens";

let stompClient = null;

function Chat() {

    const [fetchConsultationReq] = useAuthRequest();
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

    useEffect(() => {
        connect();
    }, [user])


    useEffect(() => {
        const fetchUserData = async () => {
            fetchConsultationReq({
                url: ApiRoutes.FETCH_CONSULTATION + '/' + id,
                method: "GET"
            }).then(res => {
                const {id, doctor, user} = res.data;
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
        if (user.id != null)
            stompClient.subscribe(
                "/consultation/" + id + "/user/" + user.id,
                onMessageReceived
            );
    };

    const onError = (err) => {

    };

    const onMessageReceived = (msg) => {
        let {body} = msg
        setMessages(prevMessage => [...prevMessage, body])
    };

    const sendMessage = (msg) => {
        if (msg.trim() !== "") {
            const message = {
                consultationId: id,
                receiverId: secondUser.id,
                isOwner: true,
                contentType: 'TEXT',
                content: msg
            }

            stompClient.send("/app/chat.sendMessage", {}, JSON.stringify(
                message
            ));

            const newMessages = [...messages];
            newMessages.push(JSON.stringify(message));
            setMessages(newMessages);
        }
    };

    return (
        <div className="flex justify-center items-center">
            <div className="max-w-screen-lg bg-gray-100 shadow border-1px border-solid border-white w-full h-[100vh]">
                <div className="h-[65px] p-3 bg-green-400 flex items-center justify-end text-white rounded-b-lg">
                    {secondUser && <span className="font-bold mr-4 text-m text-green-900">
                        {secondUser.username}
                    </span>}
                    {secondUser && secondUser.profileImage && <span>
                        <img className="h-12 w-12 rounded-full object-cover outline-2 outline-green-800 shadow"
                             src={secondUser.profileImage}
                             alt="this is error"/>
                    </span>}
                </div>
                <Messages messages={messages}/>
                <Input sendMessage={sendMessage}/>
            </div>
        </div>
    )
}

export default Chat;