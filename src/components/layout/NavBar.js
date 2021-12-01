import React, { useState } from "react";
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
  const handleClick = () => setOpen(!open);

  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo to="/">Brandon</NavLogo>
          <MobileIcon onClick={handleClick}>
            {open ? (
              <SVGClose height={30} width={30} />
            ) : (
              <SVGMenu height={30} width={30} />
            )}
          </MobileIcon>
          <NavMenu onClick={handleClick} open={open}>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  );
};
