import HOne from "@chatComponents/Typography/HOne.tsx";
import InputText from "@chatComponents/Forms/InputText.tsx";
import InputPassword from "@chatComponents/Forms/InputPassword.tsx";
import Button from "@chatComponents/Forms/Button.tsx";
import {loginUser} from "@chatUtils/fetchers/authFetcher.ts";

const Login = () => {
    const handleLogin = () => loginUser({username: "admin", password: "admin"});
    return (
        <div className="w-screen h-screen flex bg-primary justify-center items-center select-none">
            <div className="bg-white p-8 rounded-2xl flex flex-col gap-2">
                <HOne className="text-center">Login</HOne>
                <InputText placeholder="Username" type="text" />
                <InputPassword placeholder="Password" />
                <Button onClick={() => handleLogin()}>Login</Button>
            </div>
        </div>
    )
}

export default Login;