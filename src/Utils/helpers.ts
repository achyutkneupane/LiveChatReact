import {usePageTitle} from "@chatHooks/usePageTitle.tsx";
import {useEffect} from "react";
import {LOGIN_TOKEN} from "@chatSys/env";

export const fullName = (firstName? : string, middleName? : string, lastName? : string) => {
    return `${firstName!} ${middleName ? middleName + " " : ""}${lastName!}`;
}

export const setActiveChat = (title: string) => {
    const boxHook = usePageTitle();
    useEffect(() => {
        boxHook.setActiveChatBox(title);
    }, []);
}

export const setTitle = (title: string) => {
    const boxHook = usePageTitle();
    useEffect(() => {
        boxHook.setPageTitle(title);
    }, []);
}

export const logout = () => {
    localStorage.removeItem(LOGIN_TOKEN);
    window.location.reload();
}