import * as React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Skills } from './components/Skills';
import { Hero } from './components/Hero';
import { Contact } from './components/Contact';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Hero />
    <Skills />
    <Contact />
  </ChakraProvider>
);
