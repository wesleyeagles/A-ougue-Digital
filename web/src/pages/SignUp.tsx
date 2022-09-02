import { Button, HStack, Input, InputGroup, InputLeftElement, InputRightElement, Skeleton, Stack, Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { ErrorMessage, Form, Formik, useFormik, yupToFormErrors } from "formik";
import { AiOutlineUser } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { LoginSide } from "../components/LoginSide";
import { Select } from '@chakra-ui/react'
import { useEffect, useRef, useState } from "react";
import { useEstados } from "../assets/hooks/useStates";
import { useCidades } from '../assets/hooks/useCities'
import { MdPassword } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
import { InputField } from "../components/InputField";




type Errors = {
    name?: string
    email?: string
    password?: string
    confirmpassword?: string
    state?: string
    city?: string
    adress?: string
    number?: string
}



export function SignUp() {

   

    const navigate = useNavigate()

    const {estados} = useEstados()
    const [selectedState, setSelectedState] = useState('')
    const [selectedCity, setSelectedCity] = useState('')
    const {cidades, loading: loadingCidades} = useCidades({ uf: selectedState})
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const handleStateChange = (e: any) => {
        setSelectedState(e.target.value)

    }

    const handleCityChange = (e:any) => {
        setSelectedCity(e.target.value)
    }


    const [createUser, { data, loading }] = useRegisterMutation()

    async function register(values: { username: string, name: string; email: string; password: string; confirmpassword: string; state: string; city: string; adress: string; }) {
        console.log("Erro")

        const response = await createUser({
            variables: { options: values}
            });

            if (response.data?.register.errors) {
                console.log("Errors")
            } else if (response.data?.register.user) {
                navigate('/login')
            }

            console.log(response.data?.register.errors)
            console.log(response.data?.register.user)
    }

      const estadoRef = useRef<any>(null)
      const cidadeRef = useRef<any>(null)

      



    return (
        <Box className="login-gradient w-full md:h-screen py-5 md:py-0 flex justify-center items-center">
            <Box className="w-[95%] md:w-[60rem] md:rounded-none lg:w-[44rem] xl:w-[55rem] md:h-[85%] flex flex-col md:flex-col flex-none bg-white" borderRadius={2}>
                <LoginSide />

                <Box className="flex w-full flex-col px-3 sm:px-6 py-10 md:py-0 md:px-5 lg:px-10 xl:px-14">
                    <Box className="md:mt-[40px] lg:mt-[50px] 2xl:mt-[100px]">
                        <h1 className="login-title-red">
                            Cadastre-se
                        </h1>
                    </Box>

          

                    <Box>
                        <Formik
                         initialValues={{ username: '', name: '', email: '', password: '', state: '', city: '', adress: '' }}
                         onSubmit={async (values, {setErrors}) => {
                            const response = await createUser({
                                variables: { options: {
                                    username: values.username,
                                    name: values.name,
                                    email: values.email,
                                    password: values.password,
                                    state: selectedState,
                                    city: selectedCity,
                                    adress: values.adress
                                } }
                            })

                            if (response.data?.register.errors) {
                                setErrors(toErrorMap(response.data.register.errors));
                              } else if (response.data?.register.user) {
                                // worked
                                navigate("/login");
                              }
                            }}
                        >
                        <Form>
                        <Box display='flex' justifyContent='space-between'>
                            </Box>
                            <Stack>
                                <HStack>
                                <InputGroup>
                                    <InputField type='text' name="username" placeholder="Username" label=''/>
                                </InputGroup>
                                
                                <InputGroup marginTop={0}> 
                                <InputField name="name" placeholder="Nome Completo" label=''/>
                                </InputGroup>
                                </HStack>

                   

                            <Box display='flex' justifyContent='space-between'>
                            </Box>
                            <HStack>
                                <InputGroup>
                                    <Select name="state" ref={estadoRef} h='45px' w={{md: '214px', lg: '277px', xl: '322px', '2xl': '380px'}} onChange={handleStateChange} placeholder='Selecione seu estado'>
                                        {estados.map(estado => 
                                        <option value={estado.sigla}>{estado.nome}</option>
                                        )}
                                    </Select>
                                </InputGroup>
                                <InputGroup marginTop={0}> 
                                    
                                    <Skeleton isLoaded={!loadingCidades}>
                                    <Select name="city" ref={cidadeRef} h='45px' w={{md: '214px', lg: '277px', xl: '318px', '2xl': '380px'}} onChange={handleCityChange} placeholder='Selecione sua cidade'>
                                        {cidades.map(cidade => 
                                        <option value={cidade.nome}>{cidade.nome}</option>
                                        )}
                                    </Select>
                                    </Skeleton>
                                </InputGroup>
                            </HStack>

                            <Box display='flex' justifyContent='space-between'>
                            </Box>
                            <HStack>
                                <InputGroup>
                                <InputField name="email" placeholder="Email" label=''/>
                                </InputGroup>
                            </HStack>

                            <HStack>
                                <InputGroup>
                                <InputField name="adress" placeholder="Endereço" label=''/>
                                </InputGroup>

                                <InputGroup>
                                <InputField name="compliment" placeholder="Complemento" label=''/>
                                </InputGroup>
                            </HStack>

                            <Box display='flex' justifyContent='space-between'>
                            </Box>
                            <HStack>
                                <InputGroup>
                                    <InputField
                                    type={show ? 'text' : 'password'}
                                    name="password" placeholder="Senha" label=''/>
                                    <InputRightElement h='50px' width='4.5rem' marginRight={2}>
                                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                                    {show ? 'Esconder' : 'Mostrar'}
                                    </Button>
                                    </InputRightElement>
                                </InputGroup>
                                <InputGroup marginTop={0}>
                                    <InputField
                                    type={show ? 'text' : 'password'}
                                    name="confirmpassword" placeholder="Confirmar senha" label=''/>
                                    <InputRightElement h='50px' width='4.5rem' marginRight={2}>
                                    </InputRightElement>
                                </InputGroup>
                            </HStack>
                            <Button type="submit" colorScheme='red' size='lg'>Enviar</Button>
                            </Stack>
                        </Form>

                        </Formik>
                       
                        <Text marginTop={3} fontSize='lg'>Já é cadastrado? <Text color='red' _hover={{ color: 'black' }} transition='0.6s' as='u'><Link to='/login'>Faça login</Link></Text></Text>
                    </Box>
          
                

                </Box>
            </Box>
        </Box>
      
    )
}