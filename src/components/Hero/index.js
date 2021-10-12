import React from "react";
import {
  HeroContainer,
  BtnContainer,
  TextContainer,
  ImgContainer,
  TiltWrapper,
} from "./HeroElements";
import { Link } from "react-router-dom";
import img1 from "../../assets/img1.jpg";
function Hero() {
  return (
    <HeroContainer>
      <TextContainer>
        <h1>Sri Sai Infra Developers Pvt Ltd</h1>
        <p>
          We introduce ourselves as Sri Sai Infra Developers Pvt Ltd,
          incorporated as Pvt Ltd Company in the year 2008 under Companies Act,
          1956, the company was founded by Directors Balla Bramhanandam Naidu
          and Srinivas Kanneganti. Both the Directors have vast experience in
          construction activity for the last 25 years. They have completed more
          than 12 ventures in and around Hyderabad and Secunderabad in their
          individual capacity
        </p>
        <Link to="/projects">
          <BtnContainer>
            <button>Explore Projects</button>
          </BtnContainer>
        </Link>
      </TextContainer>
      <TiltWrapper>
        <ImgContainer src={img1} />
      </TiltWrapper>
    </HeroContainer>
  );
}

export default Hero;
