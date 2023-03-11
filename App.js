import './App.css';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react';


function App() {
  const [show, setShow] = React.useState(false)
  return (
    <ChakraProvider>
      <div id="security">
        <Input placeholder='Username' />
        <Input  type={show ? 'text' : 'password'} placeholder='Password' />
      </div>
      <div id="buttonPos">
      
      <Button id="button" colorScheme='blue'>Login</Button>
      </div>
    </ChakraProvider>
  );
}

export default App;
