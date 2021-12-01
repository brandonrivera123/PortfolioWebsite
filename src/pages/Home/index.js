import React from "react";
import styled from "styled-components";
import { Button } from "../../components";
// import { SVGMenu } from "../../assets/Menu";

export const Home = () => {
  return (
    <>
      <HomeWrapper>
        {/* <IconButton style={{ color: "white" }}>
        <SVGMenu />
      </IconButton> */}
        <AnimatedButton name="Contact Info" variant="primary" />
      </HomeWrapper>
      <div style={{ background: "black", height: 200 }}>Hello</div>
    </>
  );
};

const HomeWrapper = styled.div`
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: start;
  /* justify-content: space-between; */
  justify-content: end;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
  height: 500px;
  background: #3645f9;

  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(2, auto);
    justify-content: end;
  }
`;

// const Test = styled.div`
//   background: url("https://www.westboyntondentistry.com/images/logo.jpg")
//     no-repeat fixed center;
//   height: 500px;
//   width: 100vw;
// `;

// const Hero = styled.div`
//   clip-path: polygon(0 0, 100% 0, 100% 100%, 0 72%);
//   height: 200px;
//   background: #3645f9;
// `;

const AnimatedButton = styled(Button)`
  animation: 0.5s ease-out 0s 1 slideIn;
  @keyframes slideIn {
    0% {
      opacity: 0;
      transform: translateY(-100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
