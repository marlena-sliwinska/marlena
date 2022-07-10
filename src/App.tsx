import * as React from 'react';
import { ChakraProvider, Grid, GridItem, theme } from '@chakra-ui/react';
import { Skills } from './components/Skills';
import { Hero } from './components/Hero';
import { Contact } from './components/Contact';
import { Qualities } from './components/Qualities';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Hero />
    <Grid
      gridTemplateRows={{ md: '1fr', base: '1fr 1fr' }}
      gridTemplateColumns={{ md: '2fr 1fr', base: '1fr' }}
      maxW="7xl"
      margin="0 auto"
    >
      <GridItem>
        <Skills />
      </GridItem>
      <GridItem>
        <Qualities />
      </GridItem>
    </Grid>
    <Contact />
  </ChakraProvider>
);
