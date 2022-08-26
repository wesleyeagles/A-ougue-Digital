import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDrawerContext } from "../contexts/MainContext";
import { Container } from "./Container";

export function UserHeader() {

    const { setIsDrawerOpen } = useDrawerContext()


    return (
        <Box className="w-full bg-[#081f28] h-[80px] flex items-center">
            <Container>
                <Box className="flex items-center">
                    <Box className="flex-1">
                        <Link className="w-max flex" to="/">
                            <img className="w-[150px]" src="https://uploaddeimagens.com.br/images/003/970/215/full/LOGO_A%C3%87OUGUE_BRANCO.png?1659709167" alt="" />
                        </Link> 
                    </Box>

                    <Box onClick={() => setIsDrawerOpen(true)} role='button' className="flex items-center gap-2">
                        <Box className="bg-red-600 rounded-full w-[45px] h-[45px] overflow-hidden">
                            <img className="w-full h-full" src="https://media-exp1.licdn.com/dms/image/C4E03AQFwbiv0z0XD0g/profile-displayphoto-shrink_100_100/0/1625141515463?e=1665619200&v=beta&t=ekCJrrrIFOb_XBxUWINylyak87p4Inx_6_lf70ZvfeE" alt="profile-pic" />
                        </Box>
                    </Box>

                    <Box></Box>
                </Box>
            </Container>
        </Box>
    )
}

