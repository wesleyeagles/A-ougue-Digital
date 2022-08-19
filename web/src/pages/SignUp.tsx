import { Box } from "@mui/material";
import { FormEvent, useRef, useState } from "react";
import ReactInputMask from "react-input-mask";
import { Link } from "react-router-dom";
import { LoginSide } from "../components/LoginSide";
import { useCreateAccountMutation } from "../graphql/generated";

export function SignUp() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [adress, setAdress] = useState('')
    const [n, setN] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [district, setDistrict] = useState('')
    const [cpf, setCpf] = useState('')
    const [userCep, setCep] = useState('')
    const [password, setPassword] = useState('')
    const [userSlug, setUserSlug] = useState('')

    const cepInput = useRef<HTMLInputElement>(null)

    
    const checkCEP = (e: any) => {
        e.preventDefault()

        const cep = cepInput?.current?.value;
        console.log(typeof cep)
        console.log(cep);
        fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
          console.log(data);
          // register({ name: 'address', value: data.logradouro });
          setAdress(data.logradouro);
          setState(data.uf)
          setCity(data.localidade)
          setDistrict(data.bairro)
        });
      }

    const [ createAccount ] = useCreateAccountMutation()

    const handleAccountCreate = (e: FormEvent) => {
        e.preventDefault()

        createAccount({
            variables: {
                email: email,
                password: password,
                nomeCompleto: name,
                endereco: adress,
                n: n,
                estado: state,
                cpf: cpf,
                cidade: city,
                bairro: district,
                userSlug: userSlug,
            }
        })
    }

    


    const handleSetName = (e: any) => {
        setName(e.target.value)

        setUserSlug(e.target.value.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,''))
    }



    return (
        <Box className="login-gradient w-full md:h-screen py-5 md:py-0 flex justify-center items-center">
            <Box className="w-[95%] md:w-[60rem] md:rounded-none lg:w-[70rem] xl:w-[85rem] md:h-[90%] flex flex-col md:flex-row flex-none bg-white">
                <LoginSide />

                <Box className="flex w-full flex-col px-3 sm:px-6 py-10 md:py-0 md:px-5 lg:px-10 xl:px-14">
                    <Box className="md:mt-[40px] lg:mt-[50px] 2xl:mt-[100px]">
                        <h1 className="login-title-red">
                            Cadastre-se
                        </h1>
                    </Box>

                    <Box className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-5 md:gap-2 lg:gap-2 xl:gap-3 2xl:gap-5 mt-10">
                        <Box className="flex items-center gap-2">
                            <Box className="border border-red-600 rounded-full w-[45px] h-[45px] flex justify-center items-center step-number text-[#FF0000]">
                                1
                            </Box>

                            <Box className="step-text text-[#FF0000]">
                                Identificação
                            </Box>
                        </Box>

                        <Box className="bg-[#BFBFBF] ml-6 sm:ml-0 h-[40px] sm:h-[1px] mt-[3px] w-[1px] sm:w-[40px] md:w-[10px] lg:w-[40px] xl:w-[80px] 2xl:w-[120px]">

                        </Box>

                        <Box className="flex items-center gap-2">
                            <Box className="border border-[#BFBFBF] rounded-full w-[45px] h-[45px] flex justify-center items-center step-number text-[#BFBFBF]">
                                2
                            </Box>

                            <Box className="step-text text-[#BFBFBF]">
                                Pagamento
                            </Box>
                        </Box>

                        <Box className="bg-[#BFBFBF] ml-6 sm:ml-0 h-[40px] sm:h-[1px] mt-[3px] w-[1px] sm:w-[40px] md:w-[10px] lg:w-[40px] xl:w-[80px] 2xl:w-[120px]">

                        </Box>

                        <Box className="flex items-center gap-2">
                            <Box className="border border-[#BFBFBF] rounded-full w-[45px] h-[45px] flex justify-center items-center step-number text-[#BFBFBF]">
                                3
                            </Box>

                            <Box className="step-text text-[#BFBFBF]">
                                Compra realizada
                            </Box>
                        </Box>
                    </Box>

                    <Box>
                        <form action="">
                            <Box className="flex gap-3">
                            <Box className="input-login w-[49%] mt-5">
                                <Box className="input-login-label flex justify-between">
                                    <span>Nome completo</span>
                                </Box>
                                <input hidden value={userSlug} type="text" />
                                <Box className="input-component w-full">
                                    <input
                                    value={name}
                                    onChange={handleSetName}
                                    type="text" required/>
                                </Box>
                            </Box>
                            <Box className="input-login w-[49%] mt-5">
                                <Box className="input-login-label">
                                    <span>Seu email</span>
                                </Box>
                                <Box className="input-component w-full">
                                    <input
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    type="email" required/>
                                </Box>
                            </Box> 
                            </Box>

                            <Box className="flex flex-wrap sm:flex-nowrap gap-3">
                            <Box className="input-login w-[48%] sm:w-[38%] mt-5">
                                <Box className="input-login-label">
                                    <span>CEP</span>
                                </Box>
                                <Box className="input-component w-full flex gap-3">
                                    <input
                                    ref={cepInput}
                                    onChange={checkCEP}
                                    type="text" required/>
                                    <Box className="check-cep-button">
                                    <button onClick={checkCEP}>
                                    Buscar
                                    </button>
                                    </Box>
                                </Box>
                            </Box> 
                            <Box className="input-login w-full sm:w-[40%] mt-5">
                                <Box className="input-login-label">
                                    <span>Endereço</span>
                                </Box>
                                <Box className="input-component w-full">
                                    <input
                                    disabled
                                    value={adress}
                                    onChange={e => setAdress(e.target.value)}
                                    type="adress" required/>
                                </Box>
                            </Box>
                            <Box className="input-login w-[48%] sm:w-[19%] mt-5">
                                <Box className="input-login-label">
                                    <span>N°</span>
                                </Box>
                                <Box className="input-component w-full">
                                    <input
                                    value={n}
                                    onChange={e => setN(e.target.value)}
                                    type="adress" required/>
                                </Box>
                            </Box>
                            
                            </Box>

                            <Box className="flex flex-wrap sm:flex-nowrap gap-3">
                            <Box className="input-login w-[48%] sm:w-[10%] mt-5">
                                <Box className="input-login-label">
                                    <span>Estado</span>
                                </Box>
                                <Box className="input-component w-full">
                                    <input
                                        disabled
                                        value={state}
                                        onChange={e => setState(e.target.value)}
                                        type='text'
                                    />
                                </Box>
                            </Box>
                            <Box className="input-login w-[48%] sm:w-[35%] mt-5">
                                <Box className="input-login-label">
                                    <span>Cidade</span>
                                </Box>
                                <Box className="input-component w-full">
                                    <input
                                        disabled
                                        value={city}
                                        onChange={e => setCity(e.target.value)}
                                        type='text'
                                    />
                                </Box>
                            </Box>
                            <Box className="input-login w-[48%] sm:w-[35%] mt-5">
                                <Box className="input-login-label">
                                    <span>Bairro</span>
                                </Box>
                                <Box className="input-component w-full">
                                    <input
                                        disabled
                                        value={district}
                                        onChange={e => setDistrict(e.target.value)}
                                        type='text'
                                    />
                                </Box>
                            </Box>
                            <Box className="input-login w-full sm:w-[42%] mt-5">
                                <Box className="input-login-label">
                                    <span>CPF</span>
                                </Box>
                                <Box className="input-component w-full">
                                    <ReactInputMask
                                    maskChar={null}
                                    mask='999.999.999-99'
                                    value={cpf}
                                    onChange={e => setCpf(e.target.value)}
                                    type="tel" required/>
                                </Box>
                            </Box> 
                            </Box>

                            <Box className="flex gap-3">
                            <Box className="input-login w-[49%] mt-5">
                                <Box className="input-login-label">
                                    <span>Senha</span>
                                </Box>
                                <Box className="input-component w-full">
                                    <input
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    type="password" required/>
                                </Box>
                            </Box>
                            <Box className="input-login w-[49%] mt-5">
                                <Box className="input-login-label">
                                    <span>Confirmar senha</span>
                                </Box>
                                <Box className="input-component w-full">
                                    <input
                                    type="password" required/>
                                </Box>
                            </Box> 
                            </Box>

                            <Box className="w-full flex justify-end mt-5">
                            <Box className="flex flex-col sm:flex-row-reverse items-end gap-3">
                                <Box className="login-button">
                                    <button onClick={handleAccountCreate} type="submit">AVANÇAR</button>
                                </Box>
                                <Box className="sign-up-text flex gap-1">
                                   <span>Já possui conta?</span>
                                   <Link to='/login'>Faça o login</Link> 
                                </Box>
                            </Box>
                            </Box>
                        </form>
                    </Box>
                </Box>
            </Box>
        </Box>
      
    )
}