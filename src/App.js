import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import birdFlying from './bird-flying.gif';
import './App.css'; 


function App() {
  return (
    <Box
      bgGradient="linear(to-r,  #FAB3E5, #8BB0E9)" 
      w='100vw'
      h='100vh' 
      display='flex'
      flexDirection='column' 
      alignItems='center' 
      justifyContent='center' 
      color='white'
    >
      <Box
        display='flex'
        flexDirection='column' 
        alignItems='center' 
        justifyContent='center' 
        textAlign='center'
        p={5}
      >
        <Heading mb={4}>FLOCK</Heading>
        <Text fontSize='xl' mb={4}>We're working hard to bring you something amazing. Stay tuned.</Text>
        <Button colorScheme='whiteAlpha'>Coming Soon</Button>
      </Box>
    </Box>
  );
}


export default App;
