import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  MainDiv,
  MobileNav,
} from "./NavbarElements";
import Logo from "../../assets/logo.png";
import { IoIosMenu } from "react-icons/io";
const Navbar = ({ toggle }) => {
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
      <MobileNav>
        <img src={Logo} alt="#" />
        <IoIosMenu onClick={toggle} className="icon" size={32} />
      </MobileNav>
    </MainDiv>
  );
};

export default Navbar;
