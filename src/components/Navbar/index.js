import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  MainDiv,
} from "./NavbarElements";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <MainDiv>
      <Nav>
        <NavbarContainer>
          <NavLogo src={Logo} width="350px" height="90px" />
          <NavMenu>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/projects">Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/gallery">Gallery</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/contact-us">Contact Us</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </MainDiv>
  );
};

export default Navbar;
