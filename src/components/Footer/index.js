import React from "react";
import {
  FooterContainer,
  LeftContainer,
  MiddleContainer,
  RightContainer,
} from "./FooterElements";
import { FaFacebook, FaInstagram, FaPhone } from "react-icons/fa";
import Logo from "../../assets/logo.png";
import Img from "../../assets/footerBG.jpg";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div
      style={{
        backgroundImage: `url(${Img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="bg"
    >
      <FooterContainer>
        <RightContainer>
          <img alt="#" src={Logo} width="500px" />
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
        <MiddleContainer>
          <h3>Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </MiddleContainer>
        <LeftContainer>
          <div className="social">
            <FaFacebook size={30} style={{ margin: "0 1.5rem" }} />
            <FaInstagram size={30} style={{ margin: "0 1.5rem" }} />
          </div>
          <p>
            Made with <span>❤ </span>by{" "}
            <a href="https://quadato.com">Quadato</a>
          </p>
        </LeftContainer>
      </FooterContainer>
    </div>
  );
}

export default Footer;
