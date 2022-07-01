import { Grid, GridItem } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import SkillIcon from '../SkillsIcons/SkillIcon';
import SkillMainIcon from '../Icons/SkillMainIcon';
import SkillBox from '../SkillBox/SkillBox';

const Skills = () => {
  console.log('skills');
  return (
    <Grid
      margin="0 auto"
      maxWidth="7xl"
      gridTemplateRows="repeat(7,100px)"
      gridTemplateColumns="repeat(12,minmax(100px, auto))"
      gap="2"
      color="blackAlpha.700"
      bg="orange.100"
      fontWeight="bold"
    >
      <GridItem bg="orange.300" w={100} h={100} gridColumn="3/4" gridRow="2/3">
        <motion.div
          style={{ width: '100%', height: '100%' }}
          animate={{ scale: 1 }}
          initial={{ scale: 0.1 }}
          transition={{
            type: 'tween',
            duration: 1,
            delay: 0.1
          }}
        >
          <SkillBox name="HTML">
            <SkillIcon id="html" />
          </SkillBox>
        </motion.div>
      </GridItem>
      <GridItem bg="orange.300" w={100} h={100} gridColumn="6/7">
        <motion.div
          animate={{ scale: 1 }}
          initial={{ scale: 0.1 }}
          transition={{
            type: 'tween',
            duration: 0.4,
            delay: 0.2
          }}
        >
          <SkillIcon id="css" />
        </motion.div>
      </GridItem>
      <GridItem bg="orange.300" w={100} h={100} gridColumn="3/4" gridRow="5/6">
        <motion.div
          animate={{ scale: 1 }}
          initial={{ scale: 0.1 }}
          transition={{
            type: 'tween',
            duration: 0.3,
            delay: 0.5
          }}
        >
          <SkillIcon id="javascript" />
        </motion.div>
      </GridItem>
      <GridItem bg="orange.300" w={100} h={100} gridColumn="5/6" gridRow="6/7">
        <motion.div
          animate={{ scale: 1 }}
          initial={{ scale: 0.1 }}
          transition={{
            type: 'tween',
            duration: 0.7
          }}
        >
          <SkillIcon id="typescript" />
        </motion.div>
      </GridItem>
      <GridItem bg="orange.300" w={100} h={100} gridColumn="7/8" gridRow="7/8">
        <SkillIcon id="git" />
      </GridItem>
      <GridItem bg="orange.300" w={100} h={100} gridColumn="7/8" gridRow="7/8">
        <motion.div
          animate={{ scale: 1 }}
          initial={{ scale: 0.1 }}
          transition={{
            type: 'tween',
            duration: 0.7,
            delay: 0.1
          }}
        >
          <SkillIcon id="react-js" />
        </motion.div>
      </GridItem>
      <GridItem bg="orange.300" w={100} h={100} gridColumn="9/10" gridRow="6/7">
        <motion.div
          animate={{ scale: 1 }}
          initial={{ scale: 0.1 }}
          transition={{
            type: 'tween',
            duration: 1.1
          }}
        >
          <SkillIcon id="redux" />
        </motion.div>
      </GridItem>
      <GridItem
        bg="orange.300"
        w={100}
        h={100}
        gridColumn="10/11"
        gridRow="4/5"
      >
        <SkillIcon id="styled-components" />
      </GridItem>
      <GridItem
        bg="orange.300"
        w={100}
        h={100}
        gridColumn="10/11"
        gridRow="2/3"
      >
        <motion.div
          animate={{ scale: 1 }}
          initial={{ scale: 0.1 }}
          transition={{
            type: 'tween',
            duration: 0.6
          }}
        >
          <SkillIcon id="material-ui" />{' '}
        </motion.div>
      </GridItem>
      <GridItem bg="green.300" gridRow="3/5" gridColumn="5/9">
        <SkillMainIcon />
      </GridItem>
    </Grid>
  );
};

export default Skills;
