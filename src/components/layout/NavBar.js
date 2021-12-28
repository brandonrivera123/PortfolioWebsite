import React, { useState, useEffect } from "react";
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./styles/navbar.styles";
import { SVGMenu } from "../../assets/Menu";
import { SVGClose } from "../../assets/Close";

export const NavBar = (props) => {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState("top");

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  useEffect(() => {
    const element = document.getElementsByClassName(`${position}`);
    window.scrollTo({
      top: position === "top" ? 0 : element[0].offsetTop - 100,
      behavior: "smooth",
    });
  }, [position]);

  const handleClick = () => setOpen(!open);

  const scrollToTop = (topic) => {
    setPosition(topic);
    if (isVisible && topic === position) {
      const element = document.getElementsByClassName(`${topic}`);
      window.scrollTo({
        top: topic === "top" ? 0 : element[0]?.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Nav>
        <NavContainer>
          <div style={{ display: "grid", alignItems: "center" }}>
            <NavLogo to="/">Brandon Rivera</NavLogo>
            <div style={{ color: "white", fontSize: "1rem", letterSpacing: 1 }}>
              Web & UI Designer
            </div>
          </div>
          <MobileIcon onClick={handleClick}>
            {open ? (
              <SVGClose height={30} width={30} />
            ) : (
              <SVGMenu height={30} width={30} />
            )}
          </MobileIcon>
          <NavMenu onClick={handleClick} open={open}>
            <NavItem>
              <NavLinks onClick={() => scrollToTop("about-section")} to="/">
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks onClick={() => scrollToTop("skills-section")} to="/">
                Skills
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks onClick={() => scrollToTop("contact-section")} to="/">
                Contact
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks onClick={() => scrollToTop("top")} to="/contact">
                Projects
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  );
};
