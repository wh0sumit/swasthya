import React from 'react';
import { ChakraProvider, theme, Container } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import './styles/Global.scss';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="6xl" my={6}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </ChakraProvider>
  );
}

export default App;
