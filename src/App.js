import React from 'react';
import { ChakraProvider, theme, Container } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard/';
import Navbar from './components/Navbar';
import './styles/Global.scss';
import Footer from './components/Footer';
import Social from './pages/Dashboard/Social';
import TaskData from './pages/Dashboard/Tasks/TaskData';
import About from './pages/About';
import Team from './pages/Team';
import NotFound from './pages/NotFound';

function App() {
  const ReactNodes = [
    {
      path: '/dashboard',
      component: <TaskData />,
    },
    {
      path: '/dashboard/social',
      component: <Social />,
    },
  ];
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="6xl">
        {window.location.pathname === '/dashboard' ||
        window.location.pathname === '/dashboard/social' ? null : (
          <Navbar />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          {ReactNodes.map(node => (
            <Route
              path={node.path}
              element={<Dashboard>{node.component}</Dashboard>}
            />
          ))}
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />

          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {window.location.pathname === '/dashboard' ||
        window.location.pathname === '/dashboard/social' ? null : (
          <Footer />
        )}
      </Container>
    </ChakraProvider>
  );
}

export default App;
