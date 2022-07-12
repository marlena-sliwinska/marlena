import { chakra } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const ListItem = chakra(motion.li, {
  baseStyle: {
    listStyleType: 'none'
  }
});

export default ListItem;
