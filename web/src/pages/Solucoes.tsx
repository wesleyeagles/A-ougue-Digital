import { useEffect } from "react";
import { useGetUsersQuery } from "../graphql/generated";

interface UserProps {
        
    email: string;
    password: string;
}

export function Solucoes(props: UserProps) {

    const { data } = useGetUsersQuery()

    if (!data) {
        return (
            <div>
                Carregando
            </div>
        )
    }

    return (
        <div>
        {data.accounts.map(account => {
            return (
                <div className="flex flex-col w-full mb-5">

                <div>
                <span>Email: </span>
                <span>{account.email}</span>  
                </div>

                <div>
                <span>Senha: </span>{account.password}  
                </div>

                </div>
            )
        })}
        </div>

        
    )
}