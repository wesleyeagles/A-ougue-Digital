import { useEffect, useState } from "react"
import { IState } from '../../Types/StateType'

export const useEstados = () => {
    const [estados, setEstados] = useState<IState[]>([])


useEffect(() => {
    fetch('https://brasilapi.com.br/api/ibge/uf/v1')
    .then((response) => response.json())
    .then((data) => setEstados(data))
}, [])

    return {
        estados
    };

}