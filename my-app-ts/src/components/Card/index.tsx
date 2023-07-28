import React from 'react'
import { Center, ChakraProvider, Input , Box, Button} from '@chakra-ui/react';

import { login } from '../services/login';


export const Card = ()=>{

    return(
      <ChakraProvider>
      
        <Box minHeight='100vh' backgroundColor={'#9413dc'}  padding={'25px'}>
        <Box backgroundColor={'#FFFF'} borderRadius={'25px'} padding={'25px'}>
        <h1>Faça  o Login</h1>
     <Input placeholder='email'/>
     <Input placeholder='senha'/>
     <Center>
  
     <Button onClick={login} colorScheme='teal' size='sm' width={'100%'}>Entrar</Button>
     </Center>
        </Box>
       
      </Box>
      </ChakraProvider>
     
      
     
      
    )
}