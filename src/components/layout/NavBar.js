import React, { useState, useEffect, useCallback, useRef } from "react";
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
  const inputEl = useRef(null);
  const handleClick = () => setOpen(!open);

  const toggleVisibility = useCallback(() => {
    if (window.scrollY > 300) setIsVisible(true);
    else setIsVisible(false);
  }, []);

  const scrollToTop = useCallback((position) => {
    const element = document.getElementsByClassName("skills-section");
    // console.log(element[0].offsetTop);
    window.scrollTo({
      top: position === "top" ? 0 : element[0].offsetTop - 100,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, [toggleVisibility]);

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
              <NavLinks onClick={() => scrollToTop("top")} ref={inputEl} to="/">
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks onClick={() => scrollToTop("skills-section")} to="/">
                Skills
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks onClick={() => scrollToTop("top")} to="/contact">
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  );
};
