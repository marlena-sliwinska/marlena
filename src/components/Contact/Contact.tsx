import { Container, Stack, Box, chakra, Text } from '@chakra-ui/react';
import PersonalEmail from '../Icons/PersonalEmail';

const ContactSection = () => (
  <Container maxW="6xl" px={{ base: 6, md: 3 }} py={24}>
    <Stack
      alignItems="center"
      direction={{ base: 'column', md: 'row' }}
      justifyContent="flex-start"
      m={{ base: '0 auto', md: '0 auto 0 100px' }}
    >
      <Box
        mr={{ base: 0, md: '70px' }}
        maxW={{ base: 'xs', md: '6xl' }}
        pos="relative"
        height={{ base: '150px', md: '200px' }}
        mb={4}
      >
        <PersonalEmail />
      </Box>
      <Box>
        <Text
          fontSize="1.2rem"
          textAlign="left"
          lineHeight="1.375"
          fontWeight="400"
          color="gray.500"
          maxW="280px"
          p={2}
          mb={4}
        >
          If you have any questions don&apos;t hesitate to contact me.
        </Text>
        <chakra.div
          borderRadius="24px"
          bg="teal.900"
          w="fit-content"
          m="0 auto 30px 0"
          boxShadow="0px 11px 19px 4px teal"
        >
          <chakra.a
            display="block"
            href="mailto:marlena.frontend@gmail.com"
            title="My email address"
            rel="noopener noreferrer"
            target="_blank"
            color="white"
            p="4px 24px"
            bg="teal"
            borderRadius="24px"
            transform="translateY(-6px)"
            sx={{ '&:active': { transform: 'translateY(0)' } }}
          >
            marlena.frontend@gmail.com
          </chakra.a>
        </chakra.div>
      </Box>
    </Stack>
  </Container>
);

export default ContactSection;
