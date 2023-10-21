import {FC, useEffect, useState} from "react";
import type {LayoutProps} from "@chatTypes/general.ts";
import { UserAuthContext } from "@chatSys/Hooks/useAuth";
import {LOGIN_TOKEN} from "@chatSys/env";

const AuthStateWrapper: FC<LayoutProps> = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const token = localStorage.getItem(LOGIN_TOKEN);

    useEffect(() => {
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <UserAuthContext.Provider value={isLoggedIn}>
            {children}
        </UserAuthContext.Provider>
    );
};

export default AuthStateWrapper;