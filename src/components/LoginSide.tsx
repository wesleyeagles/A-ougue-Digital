import { Box } from "@mui/material";

import  Instagram  from '../assets/svg/Instagram'
import  Facebook  from '../assets/svg/Facebook'
import  Linkedin  from '../assets/svg/Linkedin'
import  Youtube  from '../assets/svg/Youtube'

export function LoginSide() {
    return (
        
                <Box className="w-full h-[550px] sm:h-[500px] md:h-auto md:w-[300px] lg:w-[380px] xl:w-[480px] flex-none bg-table px-10 sm:px-20 md:px-7 lg:px-14">
                    <Box className="mt-[60px] md:mt-[40px] lg:mt-[50px] 2xl:mt-[100px]">
                    <h1 className="login-title">
                        BEM VINDO AO
                    </h1>
                    <Box className="w-full flex justify-center mt-[30px]">
                        <img className="w-[300px] md:w-[200px] lg:w-[300px]" src="https://uploaddeimagens.com.br/images/003/970/215/full/LOGO_A%C3%87OUGUE_BRANCO.png?1659709167" alt="" />
                    </Box>
                    </Box>

                    <Box className="mt-[50px] md:mt-[50px] lg:mt-[90px]">
                        <p className="login-text">
                        Lorem ipsum dolor sit amet, consectetur  adipiscing 
                        elit. Nam sed enim a sapien porta  rutrum. Pellentes
                        que erat dolor, ornare in arcu non, commodo feugiat 
                        ligula. Pellentesque tincidunt vel augue id tincidunt. 
                        Etiam ullamcorper i
                        </p>
                    </Box>

                    <Box className="flex justify-center mt-10 md:mt-[180px] lg:mt-[70px] 2xl:mt-[190px]">
                        <h2 className="login-social-text">
                            Acompanhe nossas redes sociais
                        </h2>
                    </Box>

                    <Box className="flex gap-4 items-center justify-center w-full mt-3">
                        <Box>
                            <a target='_blank' href="">
                                <Instagram/>
                            </a>
                        </Box>

                        <Box>
                            <a target='_blank' href="">
                                <Facebook />
                            </a>
                        </Box>

                        <Box>
                            <a target='_blank' href="">
                                <Linkedin />
                            </a>
                        </Box>

                        <Box>
                            <a target='_blank' href="">
                                <Youtube />
                            </a>
                        </Box>
                    </Box>
                </Box>
           
    )
}