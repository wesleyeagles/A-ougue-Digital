import { Route, Routes } from "react-router-dom";
import { Empresa } from "../pages/Empresa";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";
import { Solucoes } from "../pages/Solucoes";

export function Router() {

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/" element={<Home />} />
            <Route path="/empresa" element={<Empresa />} />
            <Route path="/solucoes" element={<Solucoes />} />
        </Routes>
    )
}