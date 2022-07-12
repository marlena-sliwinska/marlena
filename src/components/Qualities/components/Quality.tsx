import ListItem from './ListItem';
import { IQuality } from '../Qualities.model';
import Wrapper from './QualityWrapper';

const Quality = ({ children, delay, x }: IQuality) => {
  const variant = {
    hidden: {
      opacity: 0,
      x: '200vw'
    },
    visible: {
      opacity: 1.0,
      x,
      transition: { delay, duration: 1 }
    }
  };
  return (
    <ListItem variants={variant} animate="visible" initial="hidden">
      <Wrapper>{children}</Wrapper>
    </ListItem>
  );
};

export default Quality;
