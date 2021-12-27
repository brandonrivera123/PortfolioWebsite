import React from "react";
import styled from "styled-components";
import { Card } from "../../components";

export const Contact = () => {
  return (
    <div style={{ position: "relative" }} className="contact-section">
      <div style={{ background: "#3645f9", height: 200 }}>
        <Card style={{ position: "absolute", top: "25%", left: "25%" }}>
          <div>Contact Me</div>
          <FormControl>
            <Input />
          </FormControl>
        </Card>
      </div>
      <div style={{ background: "black", height: 200 }}></div>
    </div>
  );
};

const Input = styled.input`
  padding: 16.5px 14px;
  border-radius: 0.25rem;
  width: 100%;
  border: 2px solid rgba(255, 255, 255, 0.2);
  background: transparent;
  &:focus-visible {
    outline: 3px solid blue;
  }
`;

const FormControl = styled.div`
  margin: 8px;
  width: 25ch;
`;
