import React from "react";
import styled from "styled-components";
import { SVGReactLogo } from "../../assets/ReactLogo";
import { SVGMaterialUILogo } from "../../assets/MaterialUILogo";

export const Skills = () => {
  return (
    <div
      style={{ background: "black", overflow: "auto", color: "white" }}
      className="skills-section"
    >
      <Header style={{ marginTop: 50 }}>Skills</Header>
      <Header
        style={{
          marginTop: 50,
          fontSize: "2rem",
          color: "#3645f9",
        }}
      >
        Front End Frameworks
      </Header>
      <SkillBubbleWrapper>
        <div style={{ display: "grid", justifyItems: "center" }}>
          <SkillBubble>
            <SVGReactLogo style={{ height: 100, width: "auto" }} />
          </SkillBubble>
          <div style={{ margin: 10, fontSize: "1.5rem" }}>React.js</div>
        </div>
      </SkillBubbleWrapper>
      <Header
        style={{
          marginTop: 50,
          fontSize: "2rem",
          color: "#3645f9",
        }}
      >
        CSS Frameworks
      </Header>
      <SkillBubbleWrapper>
        <div style={{ display: "grid", justifyItems: "center" }}>
          <SkillBubble>
            <SVGMaterialUILogo style={{ height: 80, width: "auto" }} />
          </SkillBubble>
          <div style={{ margin: 10, fontSize: "1.5rem" }}>Material UI</div>
        </div>
      </SkillBubbleWrapper>
    </div>
  );
};

const Header = styled.div`
  display: flex;
  justify-content: center;
  font-size: 3rem;
  font-weight: 600;
  color: white;
`;

const SkillBubbleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0px;
`;

const SkillBubble = styled.div`
  border-radius: 50%;
  background: white;
  /* background: linear-gradient(
    to right bottom,
    rgb(255, 255, 255, 0.5),
    rgb(255, 255, 255, 0.7)
  ); */
  /* opacity: 1; */
  height: 175px;
  width: 175px;
  display: flex;
  margin: 0px 20px;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
  &:hover {
    /* opacity: 0.9; */
    background: rgba(64, 64, 64, 0.5);
    /* background: black; */
  }
`;
