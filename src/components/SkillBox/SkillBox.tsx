import { ReactNode } from 'react';
import { Container, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface ISkillBox {
  name: string;
  children: ReactNode;
}

const SkillBox = ({ children, name }: ISkillBox) => {
  // change to fade or onHover faker
  console.log('somethin');
  return (
    <>
      <Container sx={{ position: 'relative', width: '100%', height: '100%' }}>
        {children}
      </Container>
      <Container
        bg="rgb(144, 205, 244, 0.5)"
        sx={{
          position: 'relative',
          top: '-100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          opacity: 0
        }}
        as={motion.div}
        whileHover={{
          opacity: 1
        }}
      >
        <Text fontSize="xl" sx={{ fontWeight: 800 }}>
          {name}
        </Text>
      </Container>
    </>
  );
};

export default SkillBox;
