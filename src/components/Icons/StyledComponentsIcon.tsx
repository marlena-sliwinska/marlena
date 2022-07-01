import { IIcon } from './Icon.model';

const StyledComponentsIcon = (props: IIcon) => (
  <img
    alt="Emoji depicting nail polish being applied to fingernails"
    src="/assets/images/styled_components.png"
    {...props}
    width="100%"
    height="100%"
  />
);

export default StyledComponentsIcon;
