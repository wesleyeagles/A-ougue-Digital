import { Box } from "@mui/material";
import { LoginSide } from "../components/LoginSide";
import { useFormik } from 'formik';


import { Toast } from "../components/Toast";
import { Link, useNavigate } from 'react-router-dom'
import { Button, Checkbox, Input, InputGroup, InputLeftElement, InputRightElement, Stack, WrapItem, Text, FormControl } from "@chakra-ui/react";
import { FiMail } from "react-icons/fi";
import { MdPassword } from "react-icons/md";
import { useState } from "react";
import { useLoginUserMutation } from "../generated/graphql";


type Errors = {
    email?: string
    password?: string
}


export function Login() {

    const navigate = useNavigate()


    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const validate = (values: { email: string; password: string; }) => {
        const errors:Errors = {};
      
        if (!values.email) {
          errors.email = 'Campo obrigatório';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Email inválido';
        }

        if (!values.password) {
            errors.password = 'Campo obrigatório';
        }
      
        return errors;
      };
      

    const [loginUser, { data, loading }] = useLoginUserMutation()

    async function logIn() {
        const data = await loginUser({
            variables: {
                email: formik.values.email,
                password: formik.values.password,
            }
          })

          console.log(data.data?.login)

          if (data.data?.login != null) {
            console.log("Usuário Existe")
          } else {
            console.log("Usuário incorreto")
          }
          
      }


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
          email: 'crafael.wesley@gmail.com',
          password: 'eAgles2709$',
        },
        validate,
        onSubmit: (values) => {
            logIn()
        },

      });

      
      




    return (
        <Box className="login-gradient w-full md:h-screen py-5 md:py-0 flex justify-center items-center">
            <Box className="w-[95%] md:w-[60rem] md:rounded-none lg:w-[50rem] xl:w-[55rem] md:h-[80%] flex flex-col md:flex-col flex-none bg-white" borderRadius={2}>
                <LoginSide />

                <Box className="flex w-full py-10 md:py-0 md:h-auto flex-col items-center">
                    <Box className="md:mt-[40px] lg:mt-[50px] 2xl:mt-[100px]">
                        <h1 className="login-title-red text-center lg:text-start mb-10">
                            faça login em nossa plataforma
                        </h1>
                    </Box>

                    <Box className="w-full px-5 sm:px-20 md:px-5 lg:px-12 xl:px-24">
                        <form onSubmit={formik.handleSubmit} className="w-full">
                        <Stack spacing={2}>
                            {formik.touched.email && formik.errors.email? <div className="text-red-600">{formik.errors.email}</div> : null}
                            <FormControl>
                            <InputGroup>
                                <InputLeftElement
                                pointerEvents='none'
                                children={<FiMail color='gray' />}
                                />
                                <Input 
                                id="email"
                                name="email"
                                type="email"
                                placeholder='Email'
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                />
                                
                            </InputGroup>
                            </FormControl>

                            {formik.touched.password && formik.errors.password ? <div className="text-red-600">{formik.errors.password}</div> : null}
                            <InputGroup>
                                <InputLeftElement
                                pointerEvents='none'
                                color='gray.300'
                                fontSize='1.2em'
                                children={<MdPassword color='gray'/>}
                                />
                                
                                <Input placeholder='Senha' 
                                type={show ? 'text' : 'password'}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                                name='password'
                                id='password'
                                />

                                <InputRightElement width='4.5rem' marginRight={2}>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? 'Esconder' : 'Mostrar'}
                                </Button>
                                </InputRightElement>
                            </InputGroup>

                            <Checkbox size='md' colorScheme='red' defaultChecked>
                                Lembrar senha?
                            </Checkbox>
                            <Button type="submit" colorScheme='red' size='lg'>Entrar</Button>
                            </Stack>

                            <WrapItem marginTop={5}>
                            
                            </WrapItem>
                        </form>
                        <Text fontSize='lg'>Ainda não é cadastrado ? <Text color='red' _hover={{ color: 'black' }} transition='0.6s' as='u'><Link to='/sign-up'>Cadastre-se</Link></Text></Text>
                    </Box>

                    
                </Box>
            </Box>
          
            <Toast />
            
        </Box>
       
    )
}