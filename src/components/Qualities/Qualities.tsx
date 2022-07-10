import { Container } from '@chakra-ui/react';
import Quality from './components/Quality';
import { data } from './data';

const Qualities = () => (
  <Container overflow="hidden" minW="420px" ml={0}>
    {data.map(({ content, id }, index) => (
      <Quality key={id} delay={index + 1}>
        {content}
      </Quality>
    ))}
  </Container>
);

export default Qualities;
