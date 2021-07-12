import styled, { keyframes } from "styled-components";
import Tilt from "react-tilt";
import { fadeInRight, fadeInLeft } from "react-animations";
const fadeInRightAnimation = keyframes`${fadeInRight}`;
const fadeInLeftAnimation = keyframes`${fadeInLeft}`;
export const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem;
  margin-top: 10rem;
  margin-left: 7rem;
  font-family: Poppins;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  animation: 1.2s ${fadeInLeftAnimation};
  h1 {
    font-size: 3.5rem;
    font-weight: 900;
    &:nth-of-type(1) {
      color: #af60ff;
      font-weight: 700;
    }
    &:nth-of-type(2) {
      color: #8849c7;
    }
    &:nth-of-type(3) {
      color: #651fac;
    }
    &:nth-of-type(4) {
      color: #3c0473;
    }
  }
  p {
    margin-top: -0.3rem;
    font-size: 1.2rem;
  }
`;
export const BtnContainer = styled.div`
  button {
    background: #81d1ff;
    margin-top: 1rem;
    border: none;
    padding: 0.9rem 1.1rem;
    color: #fff;
    border-radius: 1rem;
    box-shadow: 0px 13px 24px -7px #81d1ff;
    transition: all 0.3s ease-in-out;
    /* margin: 0.5rem; */
    font-size: 0.8rem;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 17px 16px -11px #81d1ff;
      transform: translateY(-5px);
    }
  }
`;

export const ImgContainer = styled.img`
  display: flex;
  border: 7px solid #81d1ff;
  border-radius: 0 30px 30px 30px;
  box-shadow: 0px 0px 16px rgba(0, 194, 255, 0.5);
  margin-left: 10rem;
  animation: 1.2s ${fadeInRightAnimation};

  &:hover {
    box-shadow: 0px 0px 32px rgba(0, 194, 255, 0.5);
    transform: translateY(-5px);
  }
`;

export const TiltWrapper = styled(Tilt)`
  width: "100%";
`;
