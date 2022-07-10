import { motion, MotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface ISkillBox extends MotionProps {
  children: ReactNode;
}
const SkillBox = ({ children, ...props }: ISkillBox) => (
  <motion.div
    style={{ width: '100%', height: '100%' }}
    animate={{ scale: 1 }}
    initial={{ scale: 0.1 }}
    {...props}
  >
    {children}
  </motion.div>
);

export default SkillBox;
