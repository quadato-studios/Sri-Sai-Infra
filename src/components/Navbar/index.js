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
function Navbar() {
  return (
    <MainDiv>
      <Nav>
        <NavbarContainer>
          <NavLogo src={Logo} width="350px" height="90px" />
          <NavMenu>
            <NavItem>
              <NavLinks>Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>Gallery</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>Contact Us</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </MainDiv>
  );
}

export default Navbar;
