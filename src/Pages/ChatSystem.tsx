import {setActiveChat} from "@chatUtils/helpers.ts";
import Messages from "@chatComponents/Layouts/Messages.tsx";

const ChatSystem = () => {
    setActiveChat("Chat System One");

    return (
        <>
            <div id="chatArea">
                <Messages/>
            </div>
        </>
    )
}

export default ChatSystem;
