import './App.css';
import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Homepage from './homepage';


function App() {


  return (
    <ChakraProvider>
      <Homepage />
    </ChakraProvider>
  )
}

export default App;
