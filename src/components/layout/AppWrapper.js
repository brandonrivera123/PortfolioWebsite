import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
`;

export const AppWrapper = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};
