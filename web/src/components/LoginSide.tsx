import { Box, Heading } from "@chakra-ui/react";

import { GrInstagram, GrFacebookOption, GrYoutube, GrLinkedinOption } from 'react-icons/gr'

export function LoginSide() {
    return (
        
                <Box className="w-full sm:h-[200px] flex-none bg-table px-10 sm:px-20 md:px-7 lg:px-14" borderTopRadius={7}>
                <Box h='100%' display='flex' alignItems='center' justifyContent='space-between'>
                    <Box h='100%' display='flex' alignItems='center'>
                    <img className="w-[300px] md:w-[200px] lg:w-[250px] 2xl:w-[300px]" src="https://uploaddeimagens.com.br/images/003/970/215/full/LOGO_A%C3%87OUGUE_BRANCO.png?1659709167" alt="" />
                    </Box> 

                    <Box>
                        <Heading as='h2' size='md' noOfLines={1} color='white'>
                            Visite nossas redes sociais
                        </Heading>   
                        <Box display='flex' gap={2} justifyContent='center' marginTop={5}>
                            <a target='_blank' href="">
                                <Box bgColor='white' padding={2} borderRadius={100}>
                                <GrInstagram size={20} color='red'/>
                                </Box>
                            </a>

                            <a target='_blank' href="">
                                <Box bgColor='white' padding={2} borderRadius={100}>
                                <GrFacebookOption size={20} color='red'/>
                                </Box>
                            </a>

                            <a target='_blank' href="">
                                <Box bgColor='white' padding={2} borderRadius={100}>
                                <GrLinkedinOption size={20} color='red'/>
                                </Box>
                            </a>

                            <a target='_blank' href="">
                                <Box bgColor='white' padding={2} borderRadius={100}>
                                <GrYoutube size={20} color='red'/>
                                </Box>
                            </a>
                        </Box>
                    </Box>                   
                </Box>
                </Box>
           
    )
}