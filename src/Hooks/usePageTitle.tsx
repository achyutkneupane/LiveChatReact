import {useEffect, useState} from "react";

export const usePageTitle = () => {
    const [pageTitle, setPageTitle] = useState<string | null>(null);
    const [activeChatBox, setActiveChatBox] = useState<string | null>(null);

    useEffect(() => {
        setPageTitle(activeChatBox);
        console.log(activeChatBox);
    }, [activeChatBox]);

    useEffect(() => {
        document.title = pageTitle ? pageTitle : "Live Chat";
    }, [pageTitle]);

    return {
        pageTitle,
        setPageTitle,
        activeChatBox,
        setActiveChatBox
    };
}