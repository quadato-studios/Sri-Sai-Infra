import React from "react";
import {
  SidebarContainer,
  SidebarLink,
  SidebarWrapper,
  SidebarMenu,
  SidebarRoute,
} from "./SidebarElements";
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarRoute to="/">
            <SidebarLink onClick={toggle}>Home</SidebarLink>
          </SidebarRoute>
          <SidebarRoute to="/about">
            <SidebarLink onClick={toggle}>About</SidebarLink>
          </SidebarRoute>
          <SidebarRoute to="/projects">
            <SidebarLink onClick={toggle}>Projects</SidebarLink>
          </SidebarRoute>
          <SidebarRoute to="/gallery">
            <SidebarLink onClick={toggle}>Gallery</SidebarLink>
          </SidebarRoute>
          <SidebarRoute to="/contact-us">
            <SidebarLink onClick={toggle}>Contact Us</SidebarLink>
          </SidebarRoute>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
