import styled from "styled-components";

export const MainContainer = styled.div`
  font-family: Poppins;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  margin-top: 10rem;
  background: rgba(255, 255, 255, 0.13);
  backdrop-filter: blur(200px);
  justify-content: center;
  align-items: center;
  margin: 2rem 2rem;
  border-radius: 30px;
  color: black;
  @media screen and (max-width: 768px) {
    margin: 0rem;
  }
  @media screen and (max-width: 411px) {
    margin: 0rem;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    width: 90vw;
    margin: 0rem 1.2rem;
  }
`;

export const LeftContainer = styled.div`
  display: grid;
  margin-left: 10rem;
  h1 {
    font-weight: 500;
    font-size: 38px;
    line-height: 64px;
  }
  @media screen and (max-width: 768px) {
    margin-left: 5rem;
    h1 {
      font-size: 28px;
      line-height: 38px;
    }
  }
  @media screen and (max-width: 411px) {
    margin-left: 0rem;
    h1 {
      text-align: center;
    }
  }
`;
export const RightContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 1rem;
  }
  @media screen and (max-width: 411px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 1rem;
  }
`;

export const RightComponents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  h4 {
    font-weight: 500;
    font-size: 18px;
    line-height: 34px;
    margin-bottom: -1rem;
  }
  h3 {
    font-weight: 300;
  }
  @media screen and (max-width: 768px) {
    h4 {
      margin-bottom: -0.5rem;
    }
  }
`;
