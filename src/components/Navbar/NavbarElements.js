import styled from "styled-components";
import { Link } from "react-router-dom";
export const Nav = styled.nav`
  height: 80px;
  margin: 0rem 8rem;
  margin-top: 3rem;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.22);
  box-sizing: border-box;
  border-radius: 20px;
  overflow-y: hidden;
  font-family: Poppins;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(33px);
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const MobileNav = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    margin: 0 0.5rem;
    margin-top: 1rem;
    height: 80px;
    justify-content: space-around;
    align-items: center;
    border: 1px solid rgba(255, 255, 255, 0.22);
    box-sizing: border-box;
    border-radius: 20px;
    overflow-y: hidden;
    font-family: Poppins;
    background: rgba(255, 255, 255, 0.6);
    /* background-color: blue; */
    backdrop-filter: blur(33px);
    img {
      width: 65vw;
    }
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100% auto;
  cursor: pointer;
  font-size: 18px;

  &.active {
    color: #fff;
    font-weight: 500;
  }
  &:hover {
    color: #fff;
    background: rgba(0, 194, 255, 0.53);
    border-radius: 6px;
  }
`;

export const NavLogo = styled.img`
  display: flex;
  justify-self: flex-start;
`;
export const MainDiv = styled.div`
  justify-content: center;
`;
