import React, { useState } from 'react';
import { Box, Heading, Text, Button, Image, Flex, Link, VStack, Input, FormControl } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import birdFlying from './bird-flying.gif';
import './App.css'; 
import { useSwipeable } from 'react-swipeable';

function App() {
  const [page, setPage] = useState(0);
  
  const handlers = useSwipeable({
    onSwipedLeft: () => setPage((prev) => (prev + 1) % 3),
    onSwipedRight: () => setPage((prev) => (prev - 1 + 3) % 3),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div {...handlers}>
      {page === 0 && (
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
      )}
      {page === 1 && (
        <VStack align="center" mt={10}>
          <Heading size="md">Our Mission</Heading>
          <Text>
            Flock is a community-driven platform empowering women to flock together for safety, fostering a more secure and connected experience on college campuses.
          </Text>
        </VStack>
      )}
      {page === 2 && (
        <VStack align="start" mt={10}>
          <Heading size="md">Stay Updated</Heading>
          <Text>Join our newsletter to get the latest news and updates.</Text>
          <FormControl id="email">
            <Input type="email" placeholder="Enter your email" />
            <Button mt={4} colorScheme="teal" type="submit">
              Subscribe
            </Button>
          </FormControl>
        </VStack>
      )}

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
    </div>
  );
}

export default App;
