import { Container } from '@chakra-ui/react';
import Quality from './components/Quality';
import { data } from './data';

const Qualities = () => (
  <Container
    overflow="hidden"
    minW="min(450px,100%)"
    ml={{ base: '0 auto', md: 0 }}
    mt={6}
  >
    {data.map(({ content, id }, index) => (
      <Quality key={id} delay={index + 1} x={`${index * 15 - 20}px`}>
        {content}
      </Quality>
    ))}
  </Container>
);

export default Qualities;
