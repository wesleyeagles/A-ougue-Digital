import { Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useFindUserQuery, useMonthSubscriptionMutation } from "../generated/graphql";

export function Month() {

    const {data, loading} = useFindUserQuery()
    const [monthSubscriptionMutation] = useMonthSubscriptionMutation()
    const navigate = useNavigate()

    
    async function monthSub() {

        
        if (!data) {
            console.log("User not authenticated")
        } else {

            console.log("Usuário encontrado")
            await monthSubscriptionMutation({
                variables: {
                    userId: data.me!.id
                }
            })
        }
        
    }

    useEffect(() => {
        monthSub()

        setTimeout(() => {
            navigate('/user')
          }, 3000)
    }, [data])

    
    


    return (
        <>
        <Text>
            Pagamento efetuado com sucesso, você será redirecionado para plataforma em 3 segundos
        </Text>
        </>
    )
}