import { Grid, GridItem } from '@chakra-ui/react';
import SkillIcon from './components/SkillsIcons/SkillIcon';
import SkillMainIcon from '../Icons/SkillMainIcon';
import SkillName from './components/SkillName/SkillName';
import SkillBox from './components/SkillBox/SkillBox';

const Skills = () => (
  <Grid
    mr="50px"
    gridTemplateRows="repeat(3,minmax(50px,1fr))"
    gridTemplateColumns="repeat(5,minmax(50px,1fr))"
    justifyContent="left"
    gap="2"
    fontWeight="bold"
    margin="0 auto"
  >
    <GridItem w={100} h={100} gridColumn="1/2" gridRow="2/3">
      <SkillBox
        transition={{
          type: 'tween',
          duration: 1.1,
          delay: 0.1
        }}
      >
        <SkillName name="HTML">
          <SkillIcon id="html" />
        </SkillName>
      </SkillBox>
    </GridItem>
    <GridItem w={90} h={90} gridColumn="2/3">
      <SkillBox
        transition={{
          type: 'tween',
          duration: 0.6,
          delay: 0.2
        }}
      >
        <SkillName name="CSS">
          <SkillIcon id="css" />
        </SkillName>
      </SkillBox>
    </GridItem>
    <GridItem w={100} h={100} gridColumn="2/3" gridRow="3/4">
      <SkillBox
        transition={{
          type: 'tween',
          duration: 0.5,
          delay: 0.5
        }}
      >
        <SkillName name="JavaScript">
          <SkillIcon id="javascript" />
        </SkillName>
      </SkillBox>
    </GridItem>
    <GridItem w="70px" h="70px" gridColumn="4/5" gridRow="1/2">
      <SkillBox
        style={{ width: '100%', height: '100%' }}
        transition={{
          type: 'tween',
          duration: 0.7
        }}
      >
        <SkillName name="TypeScript">
          <SkillIcon id="typescript" width="80%" height="80%" />
        </SkillName>
      </SkillBox>
    </GridItem>
    <GridItem w={100} h={100} gridColumn="5/6" gridRow="2/3">
      <SkillBox
        transition={{
          type: 'tween',
          duration: 0.7,
          delay: 0.1
        }}
      >
        <SkillName name="ReactJS">
          <SkillIcon id="react-js" />
        </SkillName>
      </SkillBox>
    </GridItem>
    <GridItem gridRow="2/4" gridColumn="3/5">
      <SkillMainIcon />
    </GridItem>
  </Grid>
);

export default Skills;
