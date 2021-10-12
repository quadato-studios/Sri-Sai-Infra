import styled from "styled-components";

export const MainContainer = styled.div`
  font-family: Poppins;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  background: rgba(0, 163, 255);

  justify-content: center;
  align-items: center;
  margin: 0rem 16rem;
  margin-top: 10rem;
  border-radius: 30px;
  height: 220px;
  color: white;
  @media screen and (max-width: 768px) {
    margin-top: 5rem;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 0rem;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    width: 90vw;
    margin-top: 4rem;
    margin-bottom: 2rem;
    margin-left: 1.4rem;
    padding: 2rem 0rem;
    overflow-y: hidden;
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
  @media screen and (max-width: 480px) {
    margin-left: 0rem;
    overflow-y: hidden;

    h1 {
      text-align: center;
      margin-bottom: 2rem;
      font-size: 20px;
      line-height: 25px;
      overflow-y: hidden;
    }
  }
`;
export const RightContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 1rem;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 1rem;
    overflow-y: hidden;
  }
`;

export const RightComponents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  h4 {
    font-weight: 500;
    font-size: 20px;
    line-height: 34px;
    margin-bottom: -1rem;
  }
  h3 {
    margin-top: 0.5rem;
    font-size: 24px;
    font-weight: 300;
  }
  @media screen and (max-width: 768px) {
    h4 {
      margin-bottom: -0.5rem;
    }
  }
  @media screen and (max-width: 480px) {
    overflow-y: hidden;

    h3 {
      font-size: 18px;
    }
  }
`;
