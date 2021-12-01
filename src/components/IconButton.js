import { Ripple } from ".";
import { StyledIconButton } from "./styles/iconButton.styles";

export const IconButton = (props) => {
  return (
    <StyledIconButton {...props}>
      <Ripple />
      {props.children}
    </StyledIconButton>
  );
};
