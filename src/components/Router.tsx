import { Route, Routes } from "react-router-dom";
import { Empresa } from "../pages/Empresa";
import { Home } from "../pages/Home";
import { Solucoes } from "../pages/Solucoes";

export function Router() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/empresa" element={<Empresa />} />
            <Route path="/solucoes" element={<Solucoes />} />
        </Routes>
    )
}