import { Route, Routes } from "react-router-dom";
import { Empresa } from "../pages/Empresa";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";
import { Solucoes } from "../pages/Solucoes";
import { User } from "../pages/User";

export function Router() {

    return (
        <Routes>
            <Route path="/login" element={<Login email={""} password={""} userSlug={""} />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/" element={<Home email={""} password={""} />} />

            
            <Route path="/user/:userSlug" element={<User />} />
            
            <Route path="/empresa" element={<Empresa />} />
            <Route path="/solucoes" element={<Solucoes email={""} password={""} />} />
        </Routes>
    )
}