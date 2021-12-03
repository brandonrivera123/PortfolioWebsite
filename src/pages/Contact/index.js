import React from "react";
import styled from "styled-components";
import { Card } from "../../components";

export const Contact = () => {
  // console.log(process.env);
  return (
    <div
      style={{
        background: "black",
        height: "calc(100vh - 100px)",
        overflow: "auto",
      }}
    >
      <div style={{ display: "grid", justifyItems: "center" }}>
        <ContactCard>Test</ContactCard>
      </div>
    </div>
  );
};

const ContactCard = styled(Card)`
  margin: 50px 30px;
  animation: 0.8s ease-out 0s 1 slideIn;
  @keyframes slideIn {
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
