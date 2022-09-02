import { Box } from "@mui/material";
import { LoginSide } from "../components/LoginSide";
import { useFormik } from 'formik';


import { Toast } from "../components/Toast";
import { Link, useNavigate } from 'react-router-dom'
import { Button, Checkbox, Input, InputGroup, InputLeftElement, InputRightElement, Stack, WrapItem, Text, FormControl, Skeleton } from "@chakra-ui/react";
import { FiMail } from "react-icons/fi";
import { MdPassword } from "react-icons/md";
import { useState } from "react";
import { useLoginMutation } from "../generated/graphql";


type Errors = {
    usernameOrEmail?: string
    password?: string
}


export function Login() {

    const navigate = useNavigate()


    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const [formErrors, setFormErrors] = useState(false)

    const validate = (values: { usernameOrEmail: string; password: string; }) => {
        const errors:Errors = {};
      
        if (!values.usernameOrEmail) {
          errors.usernameOrEmail = 'Campo obrigatório';
        } 

        if (!values.password) {
            errors.password = 'Campo obrigatório';
        }
      
        return errors;
      };
      

    const [loginUser, {loading, error}] = useLoginMutation()

    async function logIn() {
        const data = await loginUser({
            variables: {
                usernameOrEmail: formik.values.usernameOrEmail,
                password: formik.values.password,
            },
            refetchQueries: "all"
          })

          

          if (data.data?.login.user != null) {
            console.log("Usuário Existe")
            navigate('/user')
          } else {
            console.log("Usuário incorreto")
            setFormErrors(true)

            setTimeout(() => {
                setFormErrors(false)
            }, 3000)
          }
          
      }


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
          usernameOrEmail: '',
          password: '',
        },
        validate,
        onSubmit: async (values, { setErrors }) =>{
            const response = await loginUser({
                variables: values,
                refetchQueries: "all"

            });

            if (response.data?.login.user != null) {
                navigate('/user')
            } else {
                setFormErrors(true)

                setTimeout(() => {
                    setFormErrors(false)
                }, 3000)
            }


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
                            {formErrors? <div className="text-red-600">Email ou senha inválidos</div> : null}
                            {formik.touched.usernameOrEmail && formik.errors.usernameOrEmail? <div className="text-red-600">{formik.errors.usernameOrEmail}</div> : null}
                            <FormControl>
                            <InputGroup>
                                <InputLeftElement
                                pointerEvents='none'
                                children={<FiMail color='gray' />}
                                />
                                <Input 
                                id="usernameOrEmail"
                                name="usernameOrEmail"
                                type="text"
                                placeholder='Usuário ou Email'
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.usernameOrEmail}
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
                            <Skeleton isLoaded={!loading}>
                            <Button w='100%' type="submit" colorScheme='red' size='lg'>Entrar</Button>
                            </Skeleton>
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