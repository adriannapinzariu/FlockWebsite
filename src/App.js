import React from 'react';
import { Box, Heading, Text, Button, Image, Flex, Link } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import birdFlying from './bird-flying.gif';
import './App.css'; 

function App() {
  return (
    <Flex
      direction="column"
      align="center"
      m="0 auto"
    >
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
          <Image src={birdFlying} alt="Bird Flying" boxSize="150px" />
          <Text fontSize='xl' mb={4}>We're working hard to bring you something amazing. Stay tuned.</Text>
          <Button colorScheme='whiteAlpha'>Coming Soon</Button>
        </Box>
      </Box>

      {/* Footer */}
      <Box h="100%" w="100%" p={4} color="white" bgGradient="linear(to-r, #FAB3E5, #8BB0E9)">
        <Flex direction={["column", "row"]} justify="space-between">
          <Text>&copy; {new Date().getFullYear()} Flock, Inc</Text>
          <Flex>
            <Link href="https://github.com/joannelinmusic/FlockApp" isExternal ml={2}>
              <FaGithub />
            </Link>
            <Link href="https://twitter.com/your_twitter" isExternal ml={2}>
              <FaTwitter />
            </Link>
            <Link href="https://www.linkedin.com/in/your_linkedin/" isExternal ml={2}>
              <FaLinkedin />
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

export default App;
