import React from "react";
import styled from "styled-components";
import { Card } from "../../components";

export const Contact = () => {
  return (
    <div
      style={{ position: "relative", height: "calc(100vh - 100px)" }}
      className="contact-section"
    >
      <section
        style={{
          background: "#3645f9",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Card style={{ position: "absolute", top: "45%", zIndex: "2" }}>
          <div>Contact Me</div>
          <FormControl>
            <Input />
          </FormControl>
        </Card>
        <Wave>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </Wave>
      </section>
      {/* <section
        style={{ background: "black", height: "50%", position: "relative" }}
      ></section> */}
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

const Wave = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;

  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 150px;
  }

  .shape-fill {
    fill: black;
  }
`;
