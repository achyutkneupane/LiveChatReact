import moment from "moment";
import {useEffect, useRef, useState} from "react";

interface MessageProps {
    message: string;
    time: string;
    isMe: boolean;
}

const staticMsgs: MessageProps[] = [
    {
        message: "Hello Alice",
        time: "2021-10-10 12:01:00",
        isMe: false,
    }, {
        message: "Hello Bob",
        time: "2021-10-10 12:02:12",
        isMe: true,
    }, {
        message: "How are you?",
        time: "2021-10-10 12:02:48",
        isMe: true,
    }, {
        message: "I am fine",
        time: "2021-10-10 12:03:14",
        isMe: false,
    }, {
        message: "How are you?",
        time: "2021-10-10 12:03:51",
        isMe: false,
    }, {
        message: "I am fine",
        time: "2021-10-10 12:05:16",
        isMe: true,
    }, {
        message: "By the way, I am Charlie",
        time: "2021-10-10 12:08:23",
        isMe: false,
    }, {
        message: "Ohh! Ok. Nice to talk to you",
        time: "2021-10-10 12:09:12",
        isMe: true,
    }, {
        message: "Bob told me about you",
        time: "2021-10-10 12:09:45",
        isMe: true,
    }, {
        message: "Oh really? What did he say?",
        time: "2021-10-10 12:10:12",
        isMe: false,
    }, {
        message: "He said you are a good person",
        time: "2021-10-10 12:10:45",
        isMe: true,
    }, {
        message: "Ohh! Thank you",
        time: "2021-10-10 12:11:12",
        isMe: false,
    }, {
        message: "You are welcome",
        time: "2021-10-10 12:11:45",
        isMe: true,
    }, {
        message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci alias aliquam asperiores atque autem, beatae blanditiis consequatur cumque cupiditate deserunt doloremque doloribus earum eos error esse eum eveniet excepturi explicabo facere fugiat fugit hic illo illum in incidunt ipsum iure iusto laborum libero magnam magni maiores maxime minus molestiae nam natus nesciunt nihil nisi nobis nostrum numquam odio officiis omnis pariatur perferendis perspiciatis placeat praesentium provident quae quas quasi quia quibusdam quisquam quod quos ratione recusandae rem repellat reprehenderit rerum saepe sapiente sequi similique sint soluta sunt suscipit tempora tenetur totam ullam ut vel veniam veritatis voluptas voluptate voluptates voluptatum. Accusantium adipisci alias aliquam asperiores atque autem, beatae blanditiis consequatur cumque cupiditate deserunt doloremque doloribus earum eos error esse eum eveniet excepturi explicabo facere fugiat fugit hic illo illum in incidunt ipsum iure iusto laborum libero magnam magni maiores maxime minus molestiae nam natus nesciunt nihil nisi nobis nostrum numquam odio officiis omnis pariatur perferendis perspiciatis placeat praesentium provident quae quas quasi quia quibusdam quisquam quod quos ratione recusandae rem repellat reprehenderit rerum saepe sapiente sequi similique sint soluta sunt suscipit tempora tenetur totam ullam ut vel veniam veritatis voluptas voluptate voluptates voluptatum.",
        time: "2023-10-23 12:11:45",
        isMe: false
    }, {
        message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci alias aliquam asperiores atque autem, beatae blanditiis consequatur cumque cupiditate deserunt doloremque doloribus earum eos error esse eum eveniet excepturi explicabo facere fugiat fugit hic illo illum in incidunt ipsum iure iusto laborum libero magnam magni maiores maxime minus molestiae nam natus nesciunt nihil nisi nobis nostrum numquam odio officiis omnis pariatur perferendis perspiciatis placeat praesentium provident quae quas quasi quia quibusdam quisquam quod quos ratione recusandae rem repellat reprehenderit rerum saepe sapiente sequi similique sint soluta sunt suscipit tempora tenetur totam ullam ut vel veniam veritatis voluptas voluptate voluptates voluptatum. Accusantium adipisci alias aliquam asperiores atque autem, beatae blanditiis consequatur cumque cupiditate deserunt doloremque doloribus earum eos error esse eum eveniet excepturi explicabo facere fugiat fugit hic illo illum in incidunt ipsum iure iusto laborum libero magnam magni maiores maxime minus molestiae nam natus nesciunt nihil nisi nobis nostrum numquam odio officiis omnis pariatur perferendis perspiciatis placeat praesentium provident quae quas quasi quia quibusdam quisquam quod quos ratione recusandae rem repellat reprehenderit rerum saepe sapiente sequi similique sint soluta sunt suscipit tempora tenetur totam ullam ut vel veniam veritatis voluptas voluptate voluptates voluptatum.",
        time: "2023-10-23 12:11:51",
        isMe: true
    }
];

const Messages = () => {

    const [messages, setMessages] = useState<MessageProps[]>([]);
    const [message, setMessage] = useState<string>("");


    const messagesArea = useRef(null);

    const navbarHeight = document.getElementById("navbar")?.clientHeight;
    const sendMessageAreaHeight = document.getElementById("sendMessageArea")?.clientHeight;
    const style = {
        height: `calc(100vh - ${navbarHeight}px)`,
        paddingBottom: `${sendMessageAreaHeight! + 20}px`,
    };

    useEffect(() => {
        setMessages(staticMsgs);
    }, []);

    useEffect(() => {
        const messagesAreaElement = messagesArea.current as unknown as HTMLElement;
        messagesAreaElement.scrollTop = messagesAreaElement.scrollHeight;
    }, [messages]);

    const sendMessage = () => {
        if (message.trim() === "") {
            return;
        }

        const newMessage: MessageProps = {
            message: message,
            time: new Date().toISOString(),
            isMe: true,
        };

        setMessages([...messages, newMessage]);
        setMessage("");
    }

    return (
        <>
            <div className="overflow-y-auto scroll-smooth" style={style} ref={messagesArea}>
                <div className="flex flex-col-reverse gap-2 p-4">
                    {
                        messages.sort((a, b) => {
                            return new Date(b.time).getTime() - new Date(a.time).getTime();
                        }).map((message, index) => {
                            return (
                                <div key={index}
                                     className={`flex flex-col gap-1 ${message.isMe ? "items-end" : "items-start"}`}>
                                    <div
                                        className={`flex flex-col gap-1 border border-primary rounded-xl px-3 py-2 max-w-xl ${message.isMe ? "items-end text-primary bg-gray-50" : "items-start bg-primary text-white"}`}>
                                        <p className={`text-sm text-justify ${message.isMe ? "text-right" : "text-left"}`}>{message.message}</p>
                                        <p className={`text-xs ${message.isMe ? "text-right text-gray-500" : "text-left text-gray-300"}`}>
                                            {/*difference in time*/}
                                            {moment(message.time).fromNow()}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="absolute w-full bottom-0 border">
                    <div className="flex items-center justify-between h-16 border-t border-gray-200 bg-white gap-2 px-4"
                         id="sendMessageArea">
                        <div className="flex items-center justify-between w-full">
                            <input type="text"
                                   className="w-full h-10 p-2 border border-gray-200 rounded-md outline-none focus:border-primary"
                                   placeholder="Type a message" value={message}
                                   onChange={(e) => setMessage(e.target.value)}
                                   onKeyUp={(e) => {
                                       if (e.key === "Enter") {
                                           sendMessage();
                                       }
                                   }}
                                   autoFocus={true}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="w-10 h-10 bg-primary rounded-full flex justify-center items-center text-xs text-white"
                                onClick={() => sendMessage()}>
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Messages;