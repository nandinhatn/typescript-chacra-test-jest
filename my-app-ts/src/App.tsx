import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card } from './components/Card';
import { Footer } from './components/Footer';
import { Header } from './components/Header/Header';
import { Layout } from './components/Layout';
import styled from 'styled-components'
import { Center, ChakraProvider, Input , Box, Button} from '@chakra-ui/react';
import { login } from './components/services/login';

function App() {
  return (
    <>
    <Header/>

   <Card/>
   <Footer/>
    </>
  );
}

export default App;
