import {Link} from "react-router-dom";
import {setActiveChat} from "@chatUtils/helpers.ts";

const ChatSystem2 = () => {
    setActiveChat("Chat System Two");
    return (
        <>
            <Link to="/">Go to Chat System One</Link>
        </>
    )
}

export default ChatSystem2;
