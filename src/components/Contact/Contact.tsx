import { Container, Stack, Box, chakra } from '@chakra-ui/react';
import PersonalEmail from '../Icons/PersonalEmail';

const ContactSection = () => {
  console.log('contact page');
  return (
    <Container maxW="6xl" px={{ base: 6, md: 3 }} py={24}>
      <Stack direction={{ base: 'column', md: 'row' }} justifyContent="center">
        <Box
          ml={{ base: 0, md: 5 }}
          maxW={{ base: 'xs', md: '6xl' }}
          pos="relative"
        >
          <PersonalEmail />
        </Box>
        <chakra.button
          as="a"
          href="mailto:marlenasliwinska@gmail.com"
          h={12}
          px={6}
          bgGradient="linear(to-br, #228be6, #15aabf)"
          color="white"
          _hover={{ bgGradient: 'linear(to-br, #228be6, #228be6)' }}
          rounded="md"
          fontWeight="bold"
          mb={{ base: 2, sm: 0 }}
        >
          <chakra.span> marlenasliwinska@gmail.com </chakra.span>
        </chakra.button>
      </Stack>
    </Container>
  );
};

export default ContactSection;
