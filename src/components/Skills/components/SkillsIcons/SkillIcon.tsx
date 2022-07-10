import CssIcon from '../../../Icons/CssIcon';
import HtmlIcon from '../../../Icons/HtmlIcon';
import JsIcon from '../../../Icons/JsIcon';
import ReactJsIcon from '../../../Icons/ReactJsIcon';
import TsIcon from '../../../Icons/TsIcon';

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
  width?: string;
  height?: string;
}

const SkillIcon = ({ id, ...props }: ISkillIcon) => (
  <>
    {id === 'html' && <HtmlIcon {...props} />}
    {id === 'css' && <CssIcon {...props} />}
    {id === 'javascript' && <JsIcon {...props} />}
    {id === 'typescript' && <TsIcon {...props} />}
    {id === 'react-js' && <ReactJsIcon {...props} />}
  </>
);

export default SkillIcon;
