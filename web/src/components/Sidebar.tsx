import { Box } from "@mui/material";
import { useDrawerContext } from "../contexts/MainContext";
import InputMask from 'react-input-mask';

export function Sidebar() {

    

    

    const {percentage, percentage2, percentage3, percentage4, percentage5, percentage6, percentage7, percentage8, percentage9, percentage10, percentage11, percentage12, percentage13, percentage14, percentage15, percentage16, percentage17, percentage18, percentage19,
           total, total2, total3, total4, total5, total6, total7, total8, total9, total10, total11, total12, total13, total14, total15, total16, total17, total18, total19,
           weightLost,
           percentageLost,
           custoKGLost,
           totalPrice,
           totalProfitInteger,
           totalProfit,
           ST,
           CustoKGFormated,
           totalCost,
           cost,
           labelStyled,
           keyPressed,
           sidebarOpen
    
    } = useDrawerContext()
    return (
        <Box className={`bg-table h-full max-h-[100vh] overflow-y-auto overflow-x-hidden 2xl:w-[400px] 2xl:p-6 duration-200 ${sidebarOpen? 'sm:w-[390px] md:w-[340px] lg:w-[340px] xl:w-[350px]  p-6 sidebar-open' : 'w-0 p-0'}`}>

        <Box className={`duration-1000 delay-300 2xl:opacity-100 ${sidebarOpen? 'opacity-100' : 'opacity-0'}`}>
        <Box className="mb-10">

        <label htmlFor="">
        <span className="text-white text-lg font-bold">Adicione abaixo o preço do KG do boi</span>

        <Box className="input-container mt-5">
        <InputMask  
                value={cost}
                maskChar={null}
                mask='99.99'
                onChange={keyPressed}
                placeholder=""
                className="bg-transparent outline-none text-white w-full border rounded-md h-[35px] px-3 border-white mt-2"
              
        />
        <label className={`${labelStyled? 'label-active' : ''}`}>Preço do KG</label>
        </Box>

        </label>
        </Box>

        <Box className="mb-10">
            <table className="w-full">
                    <tr>
                        <th colSpan={3}>Custo</th>
                    </tr>
            

                <tr>
                    <td>ICMS</td>
                    <td>Custo KG</td>
                    <td>Custo Total</td>
                </tr>

                <tr>
                    <td>{ST.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</td>
                    <td>{CustoKGFormated.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</td>
                    <td>{totalCost.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</td>
                </tr>
            </table>
        </Box>
        
        <Box className="mb-10">
            <table className="w-full">
                    <tr>
                        <th colSpan={3}>Perda</th>
                    </tr>
            

                <tr>
                    <td>Peso</td>
                    <td>%</td>
                    <td>Custo KG</td>
                </tr>

                <tr>
                    <td>{weightLost.toFixed(3) + " KG"}</td>
                    <td>{percentageLost.toFixed(2) + "%"}</td>
                    <td>{custoKGLost.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</td>
                </tr>
            </table>
        </Box>

        <Box className="mb-10">
            <table className="w-full">
                    <tr>
                        <th colSpan={3}>Total</th>
                    </tr>
            

                <tr>
                    <td>Margem Lucro</td>
                    <td>%</td>
                    <td>Bruto Total</td>
                </tr>

                <tr>
                    <td>{totalProfitInteger.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</td>
                    <td>{totalProfit + "%"}</td>
                    <td>{totalPrice.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</td>
                </tr>
            </table>
        </Box>
        <Box>
            <table className="w-full">
                <tr>
                <th>Corte</th>
                <th>%</th>
                <th>R$ Total</th>
                </tr>

                <tr>
                <td>Agulha</td>
                <td>{(percentage * 100).toFixed(2) + "%"}</td>
                <td>{total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</td>
                </tr>

                <tr>
                <td>Ponta de Peito</td>
                <td>{(percentage2 * 100).toFixed(2) + "%"}</td>
                <td>{total2.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</td>
                </tr>

                <tr>
                <td>Costela Dianteiro</td>
                <td>{(percentage3 * 100).toFixed(2) + "%"}</td>
                <td>{total3.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</td>
                </tr>

                <tr>
                <td>Paleta S/Osso</td>
                <td>{(percentage4 * 100).toFixed(2) + "%"}</td>
                <td>{total4.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</td>
                </tr>

                <tr>
                <td>Moida 2ª</td>
                <td>{(percentage5 * 100).toFixed(2) + "%"}</td>
                <td>{total5.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</td>
                </tr>

                <tr>
                <td>Chuleta</td>
                <td>{(percentage6 * 100).toFixed(2) + "%"}</td>
                <td>{total6.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</td>
                </tr>

                <tr>
                <td>Vazio</td>
                <td>{(percentage7 * 100).toFixed(2) + "%"}</td>
                <td>{total7.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</td>
                </tr>

                <tr>
                <td>Patinho</td>
                <td>{(percentage8 * 100).toFixed(2) + "%"}</td>
                <td>{total8.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</td>
                </tr>

                <tr>
                <td>Coxão de Fora</td>
                <td>{(percentage9 * 100).toFixed(2) + "%"}</td>
                <td>{total9.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</td>
                </tr>

                <tr>
                <td>Tatu</td>
                <td>{(percentage10 * 100).toFixed(2) + "%"}</td>
                <td>{total10.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</td>
                </tr>

                <tr>
                <td>Coxão Mole</td>
                <td>{(percentage11 * 100).toFixed(2) + "%"}</td>
                <td>{total11.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</td>
                </tr>

                <tr>
                <td>Maminha</td>
                <td>{(percentage12 * 100).toFixed(2) + "%"}</td>
                <td>{total12.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</td>
                </tr>

                <tr>
                <td>Alcatra</td>
                <td>{(percentage13 * 100).toFixed(2) + "%"}</td>
                <td>{total13.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</td>
                </tr>

                <tr>
                <td>Picanha</td>
                <td>{(percentage14 * 100).toFixed(2) + "%"}</td>
                <td>{total14.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</td>
                </tr>

                <tr>
                <td>Filé</td>
                <td>{(percentage15 * 100).toFixed(2) + "%"}</td>
                <td>{total15.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</td>
                </tr>

                <tr>
                <td>Costela</td>
                <td>{(percentage16 * 100).toFixed(2) + "%"}</td>
                <td>{total16.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</td>
                </tr>

                <tr>
                <td>Costela Minga</td>
                <td>{(percentage17 * 100).toFixed(2) + "%"}</td>
                <td>{total17.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</td>
                </tr>

                <tr>
                <td>Fraldinha</td>
                <td>{(percentage18 * 100).toFixed(2) + "%"}</td>
                <td>{total18.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</td>
                </tr>

                <tr>
                <td>Osso Buco</td>
                <td>{(percentage19 * 100).toFixed(2) + "%"}</td>
                <td>{total19.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</td>
                </tr>

            </table>
        </Box>
        </Box>
        </Box>
    )
}