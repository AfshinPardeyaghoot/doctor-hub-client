import Messages from "./Messages";
import Input from "./Input";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import ApiRoutes from "../../config/ApiRoutes";
import useAuthRequest from "../../hook/useAuthRequest";

function Chat() {

    const [fetchConsultationReq] = useAuthRequest();
    const [secondUser, setSecondUser] = useState({
        username: null, profileImage: null
    });
    const authUserId = localStorage.getItem('u_uuid');
    const [messages, setMessages] = useState([]);
    const {state} = useLocation();
    const {id} = state;
    let stompClient = null;

    useEffect(()=> {
        connect();
    }, [id])


    useEffect(() => {
        const fetchUserData = async () => {
            fetchConsultationReq({
                url: ApiRoutes.FETCH_CONSULTATION + '/' + id,
                method: "GET"
            }).then(res => {
                const {id, doctor, user} = res.data;
                if (authUserId === user.id) {
                    setSecondUser({
                        username: doctor.name,
                        profileImage: doctor.profileImage
                    })
                } else {
                    setSecondUser({
                        username: user.username
                    })
                }

            }).catch(e => {

            })
        }

        fetchUserData();
    }, [])

    const connect = () => {
        console.log('in connect method !')
        const Stomp = require("stompjs");
        let SockJS = require("sockjs-client");
        SockJS = new SockJS("http://localhost:9000/ws");
        stompClient = Stomp.over(SockJS);
        stompClient.connect({}, onConnected, onError);
    };

    const onConnected = () => {
        console.log('**connected**')
        stompClient.subscribe(
            "/user/" + id + "/queue/messages",
            onMessageReceived
        );
    };

    const onError = (err) => {
        console.log('fucking error ecoured '+err);
    };

    const onMessageReceived = (msg) => {
        alert('message received : ' + msg)
    };

    const sendMessage = (msg) => {
        if (msg.trim() !== "") {
            const message = {};
            stompClient.send("/app/chat", {}, JSON.stringify(message));
            const newMessages = [...messages];
            newMessages.push(message);
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
                <Messages/>
                <Input/>
            </div>
        </div>
    )
}

export default Chat;