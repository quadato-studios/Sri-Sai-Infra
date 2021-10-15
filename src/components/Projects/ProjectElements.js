import styled from "styled-components";

export const ProjectConatiner = styled.div`
  display: grid;
  font-family: Poppins;
  grid-template-columns: 1fr;
  place-items: center;
  padding-top: 5rem;
  overflow-y: hidden;
  h1 {
    font-size: 48px;
    font-weight: 600;
    color: #0062ff;
  }
  h4 {
    font-size: 28px;
    margin-top: 1.2rem;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 36px;
    }
    h4 {
      font-size: 24px;
    }
  }
  @media screen and (max-width: 480px) {
    h1 {
      font-size: 30px;
    }
    h4 {
      font-size: 18px;
    }
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  margin-top: -5rem;
  place-items: center;
  overflow-y: hidden;
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
  @media screen and (max-width: 480px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;
