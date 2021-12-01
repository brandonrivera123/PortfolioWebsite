import React from "react";
import { StyledButton, ButtonContent } from "./styles/button.styles";
import { Ripple } from ".";

export const Button = ({ name = "button", ...props }) => {
  return (
    <StyledButton {...props}>
      <Ripple />
      <ButtonContent>{name}</ButtonContent>
    </StyledButton>
  );
};
