import { ReactNode } from 'react';
import { Text } from '@chakra-ui/react';

const QualityWrapper = ({ children }: { children: ReactNode }) => (
  <Text
    textTransform="uppercase"
    mb="0.6em"
    color="teal"
    fontWeight={600}
    cursor="default"
    p={1}
  >
    <Text as="span" color="gray.200" fontWeight={900} mr="10px">
      &#60;&#62;{' '}
    </Text>
    {children}
    <Text as="span" color="gray.200" fontWeight={900} ml="10px">
      {' '}
      &#60;&#47;&#62;
    </Text>
  </Text>
);

export default QualityWrapper;
