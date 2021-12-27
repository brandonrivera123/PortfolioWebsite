import React from "react";
import styled from "styled-components";
import { Button } from "../../components";
import { Card } from "../../components";
import LinkedIn from "../../assets/images/LinkedIn.jpeg";

export const About = () => {
  return (
    <AboutWrapper className="about-section">
      <HomeWrapper>
        <AnimatedButton name="Contact Info" variant="primary" />
      </HomeWrapper>
      <Header>About Me</Header>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <AboutCard>
          <ProfileImage src={LinkedIn} alt="profile" />
          <div
            style={{
              gridArea: "content",
              fontSize: "1.2rem",
              height: "100%",
              overflow: "auto",
            }}
          >
            I am a Front End Developer who has a strong aspiration towards
            creating the most optimal and responsive User Experience. I have
            been in the field for about 4 years with a focus of using{" "}
            <span style={{ color: "#61dafb" }}>React.js</span>
          </div>
        </AboutCard>
      </div>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.div`
  background: #3645f9;
`;

const HomeWrapper = styled.div`
  padding: 30px;
  display: grid;
  justify-content: end;

  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(2, auto);
    justify-content: end;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  font-size: 3rem;
  font-weight: 600;
  color: white;
`;

const AboutCard = styled(Card)`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 135px auto;
  grid-template-rows: auto;
  grid-template-areas: "profile content";
  margin: 50px 30px;
  animation: 0.8s ease-out 0s 1 aboutCardIn;
  @keyframes aboutCardIn {
    0% {
      opacity: 0;
      transform: translateY(-20%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ProfileImage = styled.img`
  height: 100px;
  border-radius: 50%;
  grid-area: profile;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  /* border: 3px solid #3645f9; */
  transition: 0.1s;
`;

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
