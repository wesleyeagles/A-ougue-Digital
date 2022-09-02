import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
    Box,
    Flex,
    Avatar,
    Text,
    Badge,
    Skeleton,
    Divider,
    ModalOverlay,
    Modal,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    List,
    ListItem,
    ListIcon,
  } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { MdCheckCircle } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { useFindUserQuery, useLogoutMutation } from '../generated/graphql'


export function User() {

  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )

  const { isOpen: isOpenModal, onOpen: onOpenModal, onClose: onCloseModal } = useDisclosure()
  const [overlay, setOverlay] = useState(<OverlayOne />)

  const navigate = useNavigate()

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef<any>(null)


    const {data, loading} = useFindUserQuery({
      refetchWritePolicy: 'overwrite'
    })

    const [logoutMutation, {}] = useLogoutMutation()

    async function Logout() {
      await logoutMutation()

      navigate('/login')
     
    }

    let body = null

    if (loading) {
      
    } else if (!data?.me) {
      body = (
        <>
        <Box bgColor='#000' h='80px' display='flex' alignItems='center' paddingInline={20}>
        <Box flex={1}>
        <img className="w-[150px] md:w-[100px] lg:w-[120px] 2xl:w-[150px]" src="https://uploaddeimagens.com.br/images/003/970/215/full/LOGO_A%C3%87OUGUE_BRANCO.png?1659709167" alt="" />
        </Box>
        <Flex gap={5}>
            <Text color='#FFF'>
            <Link to='/login'>Login</Link>
            </Text>
            <Text color='#FFF'>
            <Link to='/sign-up'>Cadastre-se</Link>
            </Text>
        </Flex>
        </Box>
        </>
      )
    } else if (data.me.type == 'Free-Trial') {
      body = (
        <>
        <Box bgColor='#000' h='80px' display='flex' alignItems='center' paddingInline={20}>
        <Box flex={1}>
        <img className="w-[150px] md:w-[100px] lg:w-[120px] 2xl:w-[150px]" src="https://uploaddeimagens.com.br/images/003/970/215/full/LOGO_A%C3%87OUGUE_BRANCO.png?1659709167" alt="" />
        </Box>
        <Flex>
            <Button variant='ghost' _hover={{ variant: 'ghost'}} _focus={{ variant: 'ghost' }} _active={{ variant: 'ghost' }}>
            <Skeleton isLoaded={!loading}>
            <Avatar ref={btnRef} colorScheme='teal' onClick={onOpen} src='https://bit.ly/broken-link' />
            </Skeleton>
            </Button>
        </Flex>
        </Box>


        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
            <Flex>
            <Avatar src='https://bit.ly/broken-link' />
            <Box ml='3'>
                <Text fontWeight='bold'>
                {data?.me?.name}
                <Badge ml='1' colorScheme='green'>
                    New
                </Badge>
                </Text>
                <Text fontSize='sm'>{data?.me?.email}</Text>
            </Box>
            </Flex>
            </DrawerHeader>

            <Divider />
  
            <DrawerBody>
              <Box display='flex' flexDirection='column' gap={2}>
              <Link to=''>
                Editar perfil
              </Link>

              <Link to=''>
                Ver assinatura
              </Link>

              <Link to=''>
                Ajuda
              </Link>

              <a onClick={Logout}>
                Sair
              </a>
              </Box>
            </DrawerBody>
  
            <DrawerFooter>
                <a className='w-full'>
                <Button onClick={() => {
                setOverlay(<OverlayOne />)
                onOpenModal()  }}
                color='#FFF' w='100%' bgColor='red' variant='outline' _hover={{ bgColor: 'red.700'}}>
                Fazer Assinatura
              </Button>
              </a>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        <Box>
      <Modal isCentered isOpen={isOpenModal} onClose={onCloseModal} size='5xl'>
        {overlay}
        <ModalContent>
          <ModalHeader>Escolha seu plano</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box display='flex' gap={6}>
                <Box w='300px' h='510px' boxShadow='2xl' borderRadius={10}>
                  <Box display='flex' justifyContent='center' paddingBlock={5}>
                    <Text fontSize='3xl' className='amplesoft-medium'>
                      Mensal
                    </Text>
                  </Box>
                  <Box display='flex' flexDirection='column' alignItems='center'>
                    <Text fontSize='3xl' className='amplesoft-bold'>
                      R$ 27,90
                    </Text>
                    <Text className='amplesoft-medium'>
                      / Mês
                    </Text>
                  </Box>

                  <Box display='flex' justifyContent='center' marginTop={6} marginBottom={8}>
                    <a href="https://buy.stripe.com/test_eVacNqbD96b70KIdQV" target='_blank'>
                    <Button variant='solid' color='whiteAlpha.900' backgroundColor='red.500' _hover={{ backgroundColor: 'red.900'}}>
                      Assinar
                    </Button>
                    </a>
                  </Box>

                  <Divider />

                  <Box paddingInline={6} marginBlock={6}>
                    <List spacing={2}>
                      <ListItem>
                      <ListIcon as={MdCheckCircle} color='green.500' />
                      Beneficio 1
                      </ListItem>
                      <ListItem>
                      <ListIcon as={MdCheckCircle} color='green.500' />
                      Beneficio 2
                      </ListItem>
                      <ListItem>
                      <ListIcon as={MdCheckCircle} color='green.500' />
                      Beneficio 3
                      </ListItem>
                      <ListItem>
                      <ListIcon as={MdCheckCircle} color='green.500' />
                      Beneficio 4
                      </ListItem>
                      <ListItem>
                      <ListIcon as={MdCheckCircle} color='green.500' />
                      Beneficio 5
                      </ListItem>
                    </List>
                  </Box>
                </Box>

                <Box w='300px' h='510px' boxShadow='2xl' borderRadius={10}>
                  <Box display='flex' justifyContent='center' paddingBlock={5}>
                    <Text fontSize='3xl' className='amplesoft-medium'>
                      Trimestral
                    </Text>
                  </Box>
                  <Box display='flex' flexDirection='column' alignItems='center'>
                    <Text fontSize='3xl' className='amplesoft-bold'>
                      R$ 23,30
                    </Text>
                    <Text className='amplesoft-medium'>
                      / Mês
                    </Text>
                  </Box>

                  <Box display='flex' justifyContent='center' marginTop={6} marginBottom={8}>
                    <a href="https://buy.stripe.com/test_eVaeVy0YveHD8da3ci" target='_blank'>
                    <Button variant='solid' color='whiteAlpha.900' backgroundColor='red.500' _hover={{ backgroundColor: 'red.900'}}>
                      Assinar
                    </Button>
                    </a>
                  </Box>

                  <Divider />

                  <Box paddingInline={6} marginBlock={6}>
                    <List spacing={2}>
                      <ListItem>
                      <ListIcon as={MdCheckCircle} color='green.500' />
                      Beneficio 1
                      </ListItem>
                      <ListItem>
                      <ListIcon as={MdCheckCircle} color='green.500' />
                      Beneficio 2
                      </ListItem>
                      <ListItem>
                      <ListIcon as={MdCheckCircle} color='green.500' />
                      Beneficio 3
                      </ListItem>
                      <ListItem>
                      <ListIcon as={MdCheckCircle} color='green.500' />
                      Beneficio 4
                      </ListItem>
                      <ListItem>
                      <ListIcon as={MdCheckCircle} color='green.500' />
                      Beneficio 5
                      </ListItem>
                      <ListItem>
                      <ListIcon as={MdCheckCircle} color='green.500' />
                      Beneficio 6
                      </ListItem>
                    </List>
                  </Box>
                </Box>

                <Box w='300px' h='510px' boxShadow='2xl' borderRadius={10}>
                  <Box display='flex' justifyContent='center' paddingBlock={5}>
                    <Text fontSize='3xl' className='amplesoft-medium'>
                      Anual
                    </Text>
                  </Box>
                  <Box display='flex' flexDirection='column' alignItems='center'>
                    <Text fontSize='3xl' className='amplesoft-bold'>
                      R$ 19,90
                    </Text>
                    <Text className='amplesoft-medium'>
                      / Mês
                    </Text>
                  </Box>

                  <Box display='flex' justifyContent='center' marginTop={6} marginBottom={8}>
                    <a href="https://buy.stripe.com/test_4gw9BefTpeHD3WUaEL" target='_blank'>
                    <Button variant='solid' color='whiteAlpha.900' backgroundColor='red.500' _hover={{ backgroundColor: 'red.900'}}>
                      Assinar
                    </Button>
                    </a>
                  </Box>

                  <Divider />

                  <Box paddingInline={6} marginBlock={6}>
                    <List spacing={2}>
                      <ListItem>
                      <ListIcon as={MdCheckCircle} color='green.500' />
                      Beneficio 1
                      </ListItem>
                      <ListItem>
                      <ListIcon as={MdCheckCircle} color='green.500' />
                      Beneficio 2
                      </ListItem>
                      <ListItem>
                      <ListIcon as={MdCheckCircle} color='green.500' />
                      Beneficio 3
                      </ListItem>
                      <ListItem>
                      <ListIcon as={MdCheckCircle} color='green.500' />
                      Beneficio 4
                      </ListItem>
                      <ListItem>
                      <ListIcon as={MdCheckCircle} color='green.500' />
                      Beneficio 5
                      </ListItem>
                      <ListItem>
                      <ListIcon as={MdCheckCircle} color='green.500' />
                      Beneficio 6
                      </ListItem>
                      <ListItem>
                      <ListIcon as={MdCheckCircle} color='green.500' />
                      Beneficio 7
                      </ListItem>
                    </List>
                  </Box>
                </Box>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onCloseModal}>Fechar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </Box>
      </>
      );
    } else if (data.me.type === 'Month-User' || 'Trimensal-User' || 'Anual-User') {
      body = (
        <>
        <Box bgColor='#000' h='80px' display='flex' alignItems='center' paddingInline={20}>
        <Box flex={1}>
        <img className="w-[150px] md:w-[100px] lg:w-[120px] 2xl:w-[150px]" src="https://uploaddeimagens.com.br/images/003/970/215/full/LOGO_A%C3%87OUGUE_BRANCO.png?1659709167" alt="" />
        </Box>
        <Flex>
            <Button variant='ghost' _hover={{ variant: 'ghost'}} _focus={{ variant: 'ghost' }} _active={{ variant: 'ghost' }}>
            <Skeleton isLoaded={!loading}>
            <Avatar ref={btnRef} colorScheme='teal' onClick={onOpen} src='https://bit.ly/broken-link' />
            </Skeleton>
            </Button>
        </Flex>
        </Box>


        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
            <Flex>
            <Avatar src='https://bit.ly/broken-link' />
            <Box ml='3'>
                <Text fontWeight='bold'>
                {data?.me?.name}
                <Badge ml='1' colorScheme='green'>
                    New
                </Badge>
                </Text>
                <Text fontSize='sm'>{data?.me?.email}</Text>
            </Box>
            </Flex>
            </DrawerHeader>

            <Divider />
  
            <DrawerBody>
              <Box display='flex' flexDirection='column' gap={2}>
              <Link to=''>
                Editar perfil
              </Link>

              <Link to=''>
                Ver assinatura
              </Link>

              <Link to=''>
                Ajuda
              </Link>

              <a onClick={Logout}>
                Sair
              </a>
              </Box>
            </DrawerBody>
  
            <DrawerFooter>
                <Link to='/' className='w-full'>
                <Button color='#FFF' w='100%' bgColor='red' variant='outline' _hover={{ bgColor: 'red.700'}}>
                Acessar Plataforma
              </Button>
              </Link>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
      );
    }


    return (
      <>
      {body}
      </>
    )
}