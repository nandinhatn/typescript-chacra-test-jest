
import React from 'react'
import { Box, ChakraProvider } from '@chakra-ui/react'
export const Header =()=>{
    return (
        <ChakraProvider>
          
        <Box  padding={'25px'}>
          <Box color={'white'} fontWeight={'bold'} fontSize={'25px'}backgroundColor={'#9413dc'} fontFamily={'heading'} borderRadius={'25px'} padding={'25px'}>
          Dio Bank
          </Box>
       
      </Box>
      
      </ChakraProvider>
    )
}