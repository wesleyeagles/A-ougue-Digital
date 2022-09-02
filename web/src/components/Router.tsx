import { Route, Routes } from "react-router-dom";
import { Checkout } from "../pages/Checkout";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Month } from "../pages/Month";
import { SignUp } from "../pages/SignUp";
import { User } from "../pages/User";

export function Router() {

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/checkout" element={<Checkout/>} />


            <Route path="/user/month/payment-sucess" element={<Month />} />

        </Routes>
    )
}