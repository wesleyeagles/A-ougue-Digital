import {Box, Divider, Drawer} from "@mui/material"
import { Link } from "react-router-dom"
import { useDrawerContext } from "../contexts/MainContext"

import {FiShoppingCart} from 'react-icons/fi'

export function DrawerMenu() {

    const { isDrawerOpen, setIsDrawerOpen } = useDrawerContext()

    return (
        <Drawer anchor='right' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
            <Box className="w-[240px] h-[60%]">
                <Box className="user-name flex items-center justify-between px-4 mt-4 mb-4">
                    <Box className="w-[15%]">
                    <Box className="rounded-full w-[65px] h-[65px] overflow-hidden">
                        <img className="w-full h-full" src="https://media-exp1.licdn.com/dms/image/C4E03AQFwbiv0z0XD0g/profile-displayphoto-shrink_100_100/0/1625141515463?e=1665619200&v=beta&t=ekCJrrrIFOb_XBxUWINylyak87p4Inx_6_lf70ZvfeE" alt="profile-pic" />
                    </Box>
                    </Box>

                    <Box className="flex flex-col w-[60%]">
                    </Box>
                </Box>

                <Divider/>

                <Box className="px-4 mt-4 mb-4 inline-block">
                    <Link className="block mb-3" to=''>
                        Editar perfil
                    </Link>
                    <Link className="block mb-3" to=''>
                        Configurações da conta
                    </Link>
                    <Link className="block mb-3" to=''>
                        Assinaturas
                    </Link>
                    <Link className="block mb-3" to=''>
                        Histórico de compras
                    </Link>
                </Box>

                <Divider/>

                <Box className="px-4 mt-4 mb-4 inline-block">
                    <Link className="block mb-3" to=''>
                        Ajuda
                    </Link>
                    <Link className="block" to='/login'>
                        Sair
                    </Link>
                </Box>

                <Divider/>

                
                <Box className={`flex h-full items-end`}>
                    <Box className="w-full h-[40px] flex justify-center items-center bg-table">
                        <Link className="uppercase font-extrabold amplesoft-medium flex gap-2 items-center" to=''>
                        <FiShoppingCart size={20}/> Fazer assinatura 
                        </Link>
                    </Box>
                </Box>

                
            </Box>
        </Drawer>
    )
}