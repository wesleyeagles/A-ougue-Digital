import { Box } from "@mui/material";
import { LoginSide } from "../components/LoginSide";

import  FacebookWhite  from '../assets/svg/FacebookWhite'
import  Google  from '../assets/svg/Google'
import { Toast } from "../components/Toast";
import { useDrawerContext } from "../contexts/MainContext";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";





export function Login() {

    const navigate = useNavigate()


    const { handleToast } = useDrawerContext()

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    async function handleLogin() {

        if (email == 'admin@admin.com.br' && pass == 'admin') {
            localStorage.setItem("key", 'admin')
            await navigate('/')
        } else {
            navigate('/login')
        }

    }

    
      
      
    return (
        <Box className="login-gradient w-full md:h-screen py-5 md:py-0 flex justify-center items-center">
            <Box className="w-[95%] md:w-[60rem] md:rounded-none lg:w-[70rem] xl:w-[85rem] md:h-[90%] flex flex-col md:flex-row flex-none bg-white">
                <LoginSide />

                <Box className="flex w-full py-10 md:py-0 md:h-auto flex-col items-center">
                    <Box className="md:mt-[40px] lg:mt-[50px] 2xl:mt-[100px]">
                        <h1 className="login-title-red text-center lg:text-start">
                            faça login em nossa plataforma
                        </h1>
                    </Box>

                    <Box className="flex flex-col sm:flex-row items-center gap-8 md:gap-2 lg:gap-8 mt-8 md:mt-10 lg:mt-10 2xl:mt-16">
                        <Box className="social-login flex items-center px-4 md:px-3 lg:px-5">
                            <a className="cursor-pointer" onClick={handleToast}>
                                <Box className="flex items-center gap-3">
                                    <Box>
                                        <FacebookWhite />
                                    </Box>
                                    <span>
                                        Entrar usando Facebook
                                    </span>
                                </Box>
                            </a>
                        </Box>

                        <Box className="social-login flex items-center px-4 md:px-3 lg:px-5">
                            <a className="cursor-pointer" onClick={handleToast}>
                                <Box className="flex items-center gap-3">
                                    <Box>
                                        <Google />
                                    </Box>
                                    <span>
                                        Entrar usando Google
                                    </span>
                                </Box>
                            </a>
                        </Box>
                    </Box>

                    <Box className="mt-[40px] md:mt-[60px] lg:mt-[50px] 2xl:mt-[100px]">
                        <h1 className="login-title-red">
                            OU
                        </h1>
                    </Box>

                    <Box className="w-full px-5 sm:px-20 md:px-5 lg:px-12 xl:px-24">
                        <form className="w-full" action="">
                            <Box className="input-login w-full">
                                <Box className="input-login-label">
                                    <span>Email</span>
                                </Box>
                                <Box className="input-component w-full">
                                    <input
                                     onChange={event => setEmail(event.target.value)}
                                     placeholder="email@gmail.com" type="email" required/>
                                </Box>
                            </Box>

                            <Box className="input-login w-full mt-5">
                                <Box className="input-login-label">
                                    <span>Senha</span>
                                </Box>
                                <Box className="input-component w-full">
                                    <input 
                                    onChange={event => setPass(event.target.value)}
                                    type="password" required/>
                                </Box>
                            </Box>

                            <Box className="w-full flex justify-end mt-2">
                            <a className="text-red-600 cursor-pointer"  onClick={handleToast}>
                                Esqueceu sua senha?
                            </a>
                             </Box>

                            <Box className="flex flex-col sm:flex-row items-end gap-3 mt-8 sm:mt-0">
                                <Box className="login-button">
                                    <button onClick={handleLogin} type="submit">LOGIN</button>
                                </Box>
                                <Box className="sign-up-text flex gap-1">
                                   <span>Ainda não tem conta?</span>
                                   <Link to='/sign-up'>Cadastre-se</Link> 
                                </Box>
                            </Box>
                        </form>
                    </Box>

                    
                </Box>
            </Box>
          
            <Toast />
            
        </Box>
       
    )
}