import CssIcon from '../Icons/CssIcon';
import HtmlIcon from '../Icons/HtmlIcon';
import JsIcon from '../Icons/JsIcon';
import ReactJsIcon from '../Icons/ReactJsIcon';
import TsIcon from '../Icons/TsIcon';
import MuiIcon from '../Icons/MuiIcon';
import ReduxIcon from '../Icons/ReduxIcon';
import StyledComponentsIcon from '../Icons/StyledComponentsIcon';
import GitIcon from '../Icons/GitIcon';

interface ISkill {
  name: string;
  id: string;
}

export const skills: ISkill[] = [
  { name: 'HTML', id: 'html' },
  { name: 'CSS', id: 'css' },
  { name: 'JavaScript', id: 'javascript' },
  { name: 'TypeScript', id: 'typescript' },
  { name: 'git', id: 'git' },
  { name: 'React.JS', id: 'react-js' },
  { name: 'Redux', id: 'redux' },
  { name: 'MUI', id: 'material-ui' },
  { name: 'Styled Components', id: 'styled-components' }
];

interface ISkillIcon {
  id: string;
}

const SkillIcon = ({ id, ...props }: ISkillIcon) => (
  <>
    {id === 'html' && <HtmlIcon {...props} />}
    {id === 'css' && <CssIcon {...props} />}
    {id === 'javascript' && <JsIcon {...props} />}
    {id === 'typescript' && <TsIcon {...props} />}
    {id === 'git' && <GitIcon {...props} />}
    {id === 'react-js' && <ReactJsIcon {...props} />}
    {id === 'redux' && <ReduxIcon {...props} />}
    {id === 'styled-components' && <StyledComponentsIcon {...props} />}
    {id === 'material-ui' && <MuiIcon {...props} />}
  </>
);

export default SkillIcon;
