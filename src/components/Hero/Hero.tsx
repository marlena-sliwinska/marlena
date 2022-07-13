import { chakra, Container, Stack, Text, Box } from '@chakra-ui/react';
import WorkingWoman from '../Icons/WorkingWoman';

const HeroSection = () => (
  <Container maxW="6xl" px={{ base: 6, md: 3 }} py={12}>
    <Stack direction={{ base: 'column', md: 'row' }} justifyContent="center">
      <Stack
        direction="column"
        spacing={6}
        justifyContent="center"
        maxW="480px"
      >
        <chakra.h1
          fontSize="4xl"
          lineHeight={1}
          fontWeight="bold"
          textAlign="left"
        >
          Marlena Śliwińska
          <br />
          <chakra.span color="teal">FRONTEND DEVELOPER</chakra.span>
        </chakra.h1>
        <Text
          fontSize="1.2rem"
          textAlign="left"
          lineHeight="1.375"
          fontWeight="400"
          color="gray.500"
        >
          If you are looking for an ambitious, intelligent and passionate
          co-worker, you are in the right place.
        </Text>
      </Stack>
      <Box
        ml={{ base: 0, md: 5 }}
        maxW={{ base: 'xs', md: '6xl' }}
        pos="relative"
        height={{ base: '150px', md: '200px' }}
      >
        <WorkingWoman />
      </Box>
    </Stack>
  </Container>
);

export default HeroSection;
