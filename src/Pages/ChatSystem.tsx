import {Link} from "react-router-dom";
import {setActiveChat} from "@chatUtils/helpers.ts";

const ChatSystem = () => {

    setActiveChat("Chat System One");

    // clearInterval(setInterval(() => {
    //     if (pageTitle === "Notification found") {
    //         setPageTitle(activeChatBox);
    //     } else {
    //         setPageTitle("Notification found");
    //     }
    // }, 1000));

    return (
        <>
            <Link to="/two">Go to Chat System Two</Link>
        </>
    )
}

export default ChatSystem;
