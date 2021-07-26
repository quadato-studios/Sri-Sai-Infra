import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import CTA from "../CTA";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

import about1 from "../../assets/about-1.jpg";
import about2 from "../../assets/about-2.gif";
import Sidebar from "../Sidebar";
AOS.init();
function About() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <AboutContainer>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <AboutTitle>About Us</AboutTitle>
      <TopContainer>
        <div data-aos="fade-right">
          <h4>
            Established in 2017 by prominent Real Estate Realtyspace Ltd is
            leading apartment specialist.
          </h4>
          <AboutDescription>
            We introduce ourselves as Sri Sai Infra Developers Pvt Ltd,
            incorporated as Pvt Ltd Company in the year 2008 under Companies
            Act, 1956, the company was founded by Directors Balla Bramhanandam
            Naidu and Kannegenti Srinivas . Both the Directors have vast
            experience in construction activity for the last 20 years. They have
            completed more than 12 ventures in and around Hyderabad and
            Secunderabad in their individual capacity.
          </AboutDescription>
        </div>
        <div data-aos="fade-left">
          <Image alt="#" src={about1} />
        </div>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "40%",
          }}
          data-aos="fade-down"
        >
          <Image alt="#" src={about2} />
        </div>
        <div data-aos="fade-up">
          <h4>OUR STORY</h4>
          <AboutDescription>
            We introduce ourselves as <b>Sri Sai Infra Developers Pvt Ltd</b>,
            incorporated as Pvt Ltd Company in the year 2008 under Companies
            Act, 1956, the company was founded by Directors Balla Bramhanandam
            Naidu and Kannegenti Srinivas . Both the Directors have vast
            experience in construction activity for the last 20 years. They have
            completed more than 12 ventures in and around Hyderabad and
            Secunderabad in their individual capacity.
          </AboutDescription>
        </div>
      </TopContainer>
      <CTA />
      <Footer />
    </AboutContainer>
  );
}

export default About;
const AboutContainer = styled.div`
  overflow-y: hidden;
  justify-content: center;
  align-items: center;
`;
const AboutTitle = styled.h1`
  font-size: 48px;
  margin-left: 30px;
  border-bottom: 2px solid black;
  width: 35%;
  @media screen and (max-width: 480px) {
    font-size: 32px;
    justify-content: center;
    align-items: center;
  }
`;
const TopContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  h4 {
    font-size: 24px;
    margin-left: 0;
    color: #00a2ff;
    margin-bottom: 10px;
    justify-content: center;
    align-items: center;
    overflow-y: hidden;
    text-align: center;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    h4 {
      font-size: 20px;
    }
  }
`;

const AboutDescription = styled.p`
  font-size: 18px;
  margin-left: 30px;
  width: 70%;
  color: black;
  text-justify: auto;
  align-items: flex-start;
  overflow-y: hidden;
  @media screen and (max-width: 480px) {
    font-size: 16px;
    width: 100%;
    text-align: center;
    margin: 0;
  }
`;
const Image = styled.img`
  align-items: center;
  overflow-y: hidden;
  justify-content: center;
  @media screen and (max-width: 480px) {
    margin-top: 1rem;
  }
`;
