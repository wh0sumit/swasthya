import React from 'react';
import { ChakraProvider, theme, Container } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import './styles/Global.scss';
import Footer from './components/Footer';

import About from './pages/About';
import NotFound from './pages/NotFound';
import OpenSource from './pages/Open-Source';
import MentalHealth from './pages/Mental-Health';
import GetJob from './pages/Get-Job';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="6xl">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/open-source" element={<OpenSource />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mental-health" element={<MentalHealth />} />
          <Route path="/get-job" element={<GetJob />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </ChakraProvider>
  );
}

export default App;
