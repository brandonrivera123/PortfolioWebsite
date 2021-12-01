import styled from "styled-components";

export const StyledIconButton = styled.button.attrs((props) => ({
  variant: props.variant || "default",
}))`
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: none;
  position: relative;
  /* background: grey; */
  background: linear-gradient(
    to right bottom,
    rgb(255, 255, 255, 0.7),
    rgb(255, 255, 255, 0.3)
  );
  /* background: transparent; */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
  opacity: 0.9;
  &:hover {
    /* background: #504f4f; */
    opacity: 1;
  }
`;
