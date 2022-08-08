import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { LoginSide } from "../components/LoginSide";

export function SignUp() {
    return (
        <Box className="login-gradient w-full h-screen flex justify-center items-center">
            <Box className="w-[85rem] h-[50rem] flex flex-none bg-white">
                <LoginSide />

                <Box className="flex w-full flex-col px-14">
                    <Box className="mt-[100px]">
                        <h1 className="login-title-red">
                            Cadastre-se
                        </h1>
                    </Box>

                    <Box className="flex items-center gap-5 mt-10">
                        <Box className="flex items-center gap-2">
                            <Box className="border border-red-600 rounded-full w-[45px] h-[45px] flex justify-center items-center step-number text-[#FF0000]">
                                1
                            </Box>

                            <Box className="step-text text-[#FF0000]">
                                Identificação
                            </Box>
                        </Box>

                        <Box className="bg-[#BFBFBF] h-[1px] mt-[3px] w-[120px]">

                        </Box>

                        <Box className="flex items-center gap-2">
                            <Box className="border border-[#BFBFBF] rounded-full w-[45px] h-[45px] flex justify-center items-center step-number text-[#BFBFBF]">
                                2
                            </Box>

                            <Box className="step-text text-[#BFBFBF]">
                                Pagamento
                            </Box>
                        </Box>

                        <Box className="bg-[#BFBFBF] h-[1px] mt-[3px] w-[120px]">

                        </Box>

                        <Box className="flex items-center gap-2">
                            <Box className="border border-[#BFBFBF] rounded-full w-[45px] h-[45px] flex justify-center items-center step-number text-[#BFBFBF]">
                                3
                            </Box>

                            <Box className="step-text text-[#BFBFBF]">
                                Compra realizada
                            </Box>
                        </Box>
                    </Box>

                    <Box>
                        <form action="">
                            <Box className="flex gap-3">
                            <Box className="input-login w-[49%] mt-5">
                                <Box className="input-login-label">
                                    <span>Nome completo</span>
                                </Box>
                                <Box className="input-component w-full">
                                    <input
                                    type="text" required/>
                                </Box>
                            </Box>
                            <Box className="input-login w-[49%] mt-5">
                                <Box className="input-login-label">
                                    <span>Seu email</span>
                                </Box>
                                <Box className="input-component w-full">
                                    <input
                                    type="email" required/>
                                </Box>
                            </Box> 
                            </Box>

                            <Box className="flex gap-3">
                            <Box className="input-login w-[49%] mt-5">
                                <Box className="input-login-label">
                                    <span>Endereço</span>
                                </Box>
                                <Box className="input-component w-full">
                                    <input
                                    type="adress" required/>
                                </Box>
                            </Box>
                            <Box className="input-login w-[16%] mt-5">
                                <Box className="input-login-label">
                                    <span>N°</span>
                                </Box>
                                <Box className="input-component w-full">
                                    <input
                                    type="adress" required/>
                                </Box>
                            </Box>
                            <Box className="input-login w-[34%] mt-5">
                                <Box className="input-login-label">
                                    <span>Complemento</span>
                                </Box>
                                <Box className="input-component w-full">
                                    <input
                                    type="text" required/>
                                </Box>
                            </Box> 
                            </Box>

                            <Box className="flex gap-3">
                            <Box className="input-login w-[20%] mt-5">
                                <Box className="input-login-label">
                                    <span>Estado</span>
                                </Box>
                                <Box className="input-component w-full">
                                    <select name="" id="">
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                    </select>
                                </Box>
                            </Box>
                            <Box className="input-login w-[35%] mt-5">
                                <Box className="input-login-label">
                                    <span>Cidade</span>
                                </Box>
                                <Box className="input-component w-full">
                                    <select name="" id="">
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                    </select>
                                </Box>
                            </Box>
                            <Box className="input-login w-[42%] mt-5">
                                <Box className="input-login-label">
                                    <span>CPF</span>
                                </Box>
                                <Box className="input-component w-full">
                                    <input
                                    type="tel" required/>
                                </Box>
                            </Box> 
                            </Box>

                            <Box className="flex gap-3">
                            <Box className="input-login w-[49%] mt-5">
                                <Box className="input-login-label">
                                    <span>Senha</span>
                                </Box>
                                <Box className="input-component w-full">
                                    <input
                                    type="password" required/>
                                </Box>
                            </Box>
                            <Box className="input-login w-[49%] mt-5">
                                <Box className="input-login-label">
                                    <span>Confirmar senha</span>
                                </Box>
                                <Box className="input-component w-full">
                                    <input
                                    type="password" required/>
                                </Box>
                            </Box> 
                            </Box>

                            <Box className="w-full flex justify-end mt-5">
                            <Box className="flex flex-row-reverse items-end gap-3">
                                <Box className="login-button">
                                    <button type="submit">AVANÇAR</button>
                                </Box>
                                <Box className="sign-up-text flex gap-1">
                                   <span>Já possui conta?</span>
                                   <Link to='/login'>Faça o login</Link> 
                                </Box>
                            </Box>
                            </Box>
                        </form>
                    </Box>
                </Box>
            </Box>
        </Box>
      
    )
}