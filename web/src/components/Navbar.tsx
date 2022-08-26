import { Box } from "@mui/material";
import { Container } from '../components/Container'
import { Link } from "react-router-dom";


export function Navbar() {



    return (
        <Box bgcolor="#081f28" display="flex" height={70} alignItems="center">
            <Container>
                <Box className="items-center" display="flex" >
                    <Box flex={1}>
                       <Link className="w-max flex" to="/">
                            <img className="w-[150px]" src="https://uploaddeimagens.com.br/images/003/970/215/full/LOGO_A%C3%87OUGUE_BRANCO.png?1659709167" alt="" />
                        </Link> 
                    </Box>

                    <Box>
                        <nav className="flex gap-8">
                            <Link className="text-white" to="/empresa">Entrar</Link>
                            <Link className="text-white" to="/solucoes">Cadastre-se</Link>

                        </nav>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}