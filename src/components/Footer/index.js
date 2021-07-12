import React from "react";
import {
  FooterContainer,
  LeftContainer,
  MiddleContainer,
  RightContainer,
} from "./FooterElements";
import { FaFacebook, FaInstagram, FaPhone } from "react-icons/fa";
import Logo from "../../assets/logo.png";
function Footer() {
  return (
    <FooterContainer>
      <LeftContainer>
        <img alt="#" src={Logo} width="500px" />
        <div className="social">
          <FaFacebook size={30} style={{ margin: "0 1.5rem" }} />
          <FaInstagram size={30} style={{ margin: "0 1.5rem" }} />
        </div>
      </LeftContainer>
      <MiddleContainer>
        <h3>Links</h3>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/home">About</a>
          </li>
          <li>
            <a href="/home">Projects</a>
          </li>
          <li>
            <a href="/home">Gallery</a>
          </li>
          <li>
            <a href="/home">Contact Us</a>
          </li>
        </ul>
      </MiddleContainer>
      <RightContainer>
        <h3>Contact Us</h3>
        <p>
          12-5-3/10/2,1stfloor opp st.Ann’s Highschool Tarnaka,
          Secendrabad-500017
        </p>

        <div className="call">
          <FaPhone />
          <a href="tel:+919866220757">+91-9866220757</a>
        </div>
        <div className="call">
          <FaPhone />
          <a href="tel:+919866220757">+91-9866220757</a>
        </div>
      </RightContainer>
    </FooterContainer>
  );
}

export default Footer;
