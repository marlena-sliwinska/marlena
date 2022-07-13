import { ReactNode } from 'react';
import { Container, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface ISkillBox {
  name: string;
  children: ReactNode;
}

const SkillBox = ({ children, name }: ISkillBox) => (
  <>
    <Container
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        padding: 0
      }}
    >
      {children}
    </Container>
    <Container
      bg="rgb(135, 172, 163, 0.8)"
      sx={{
        padding: 0,
        position: 'relative',
        top: '-100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: { md: '100%', base: '50%' },
        opacity: 0,
        marginLeft: 0,
        minWidth: 'fit-content',
        left: '50%',
        transform: 'translateX(-50%)'
      }}
      as={motion.div}
      whileHover={{
        opacity: 1
      }}
    >
      <Text
        fontSize={{ base: 'xs', md: 'xl' }}
        p={2}
        sx={{ fontWeight: 800 }}
        cursor="default"
      >
        {name}
      </Text>
    </Container>
  </>
);

export default SkillBox;
