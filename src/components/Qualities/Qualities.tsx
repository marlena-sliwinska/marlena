import { Container, useMediaQuery } from '@chakra-ui/react';
import Quality from './components/Quality';
import { data } from './data';

const Qualities = () => {
  const [mobile] = useMediaQuery('(max-width: 768px)');
  return (
    <Container
      overflow="hidden"
      minW="min(450px,100%)"
      ml={{ base: '0 auto', md: 0 }}
      mt={6}
    >
      {data.map(({ content, id }, index) => (
        <Quality
          key={id}
          delay={index + 1}
          x={mobile ? '0' : `${index * 15 - 20}px`}
        >
          {content}
        </Quality>
      ))}
    </Container>
  );
};

export default Qualities;
