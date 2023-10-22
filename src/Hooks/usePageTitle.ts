import {createContext, useContext, useEffect} from "react";

export interface PageContextProps {
    setPageTitle: (title: string) => void;
}

export const PageContext = createContext<PageContextProps | null>(null);
export const usePageTitle = () => useContext(PageContext);

export const thePageTitle = (title: string) => {
    const theHook = usePageTitle();
    useEffect(() => {
        theHook && theHook.setPageTitle(title);
    }, []);
}

export const updatePageTitle = (title: string) => {
    document.title = title;
}