import {Link} from "react-router-dom";
import {thePageTitle} from "@chatHooks/usePageTitle.ts";

const ChatSystem = () => {
    thePageTitle("Chat System One");
    return (
        <>
            <Link to="/two">Go to Chat System Two</Link>
        </>
    )
}

export default ChatSystem;
