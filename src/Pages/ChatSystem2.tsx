import {thePageTitle} from "@chatHooks/usePageTitle.ts";
import {Link} from "react-router-dom";

const ChatSystem2 = () => {
    thePageTitle("Chat System Two");
    return (
        <>
            <Link to="/">Go to Chat System One</Link>
        </>
    )
}

export default ChatSystem2;
