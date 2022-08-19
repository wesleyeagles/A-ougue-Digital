import { CoPresent } from "@mui/icons-material"
import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { DrawerMenu } from "../components/DrawerMenu"
import { UserHeader } from "../components/UserHeader"
import { useGetUserByEmailQuery } from "../graphql/generated"

export function User() {

    const navigate = useNavigate()

    const { userSlug } = useParams<{userSlug: string}>()

    const [accountEmail, setAccountEmail] = useState<string>('')

    console.log(accountEmail)

    const { data } = useGetUserByEmailQuery(

        {
            variables: {
                email: accountEmail
            }
        }
    )

     useEffect(() => {
        setAccountEmail(localStorage.getItem('accountEmail') || '')
      }, [])


      if (data) {
        if (userSlug != data.account?.userSlug) {
            navigate('/login')
            console.log("Deslogado")
        } else {

            console.log("Logado")
        }
      }
      
     
    return (
        <Box>
        <UserHeader />
        <DrawerMenu />
        </Box>

    )
}