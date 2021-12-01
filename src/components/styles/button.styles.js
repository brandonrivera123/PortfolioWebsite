import styled from "styled-components";

export const StyledButton = styled.button.attrs((props) => ({
  variant: props.variant || "default",
}))`
  background: ${({ theme, variant }) => theme[variant]};
  color: white;
  position: relative;
  overflow: hidden;
  padding: 6px 16px;
  font-size: 1.2rem;
  cursor: pointer;
  font-weight: 500;
  letter-spacing: 0.02857em;
  border: none;
  border-radius: 5px;
  font-family: "Poppins", sans-serif;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
`;

export const ButtonContent = styled.span`
  position: relative;
  pointer-events: none;
  z-index: 2;
`;
