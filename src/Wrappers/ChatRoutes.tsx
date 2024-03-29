import {Outlet, Route, Routes} from "react-router-dom";

import AuthWrapper from "@chatWrappers/AuthWrapper.tsx";
import GuestWrapper from "@chatWrappers/GuestWrapper.tsx";

import ChatSystem from "@chatSys/Pages/ChatSystem.tsx";
import Login from "@chatSys/Pages/Auth/Login.tsx";
import Register from "@chatPages/Auth/Register.tsx";

const ChatRoutes = () => {
    return (
        <Routes>
            <Route
                element={
                    <AuthWrapper>
                        <Outlet />
                    </AuthWrapper>
                }
            >
                <Route path="/:id?" element={<ChatSystem />} />
            </Route>

            <Route
                element={
                    <GuestWrapper>
                        <Outlet />
                    </GuestWrapper>
                }
            >
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Route>
        </Routes>
    );
}

export default ChatRoutes;