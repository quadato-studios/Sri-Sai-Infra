import React, { useState } from "react";
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
import { IoIosMenu, IoIosClose } from "react-icons/io";
const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
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
        {!menuToggle ? (
          <IoIosMenu
            onClick={() => {
              console.log("click menu");
              setMenuToggle((prevState) => !prevState);
            }}
            className="icon"
            size={23}
          />
        ) : (
          <IoIosClose
            onClick={() => {
              console.log("click close");
              setMenuToggle((prevState) => !prevState);
            }}
            className="icon"
            size={23}
          />
        )}
        <img src={Logo} alt="#" />
      </MobileNav>
    </MainDiv>
  );
};

export default Navbar;
