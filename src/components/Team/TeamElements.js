import styled from "styled-components";

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Poppins;
  margin-top: 10rem;
  h1 {
    font-size: 48px;
    font-weight: 600;
    color: #0062ff;
  }
  p {
    font-size: 18px;
    font-weight: 300;
    line-height: 24px;
    margin: 0 10rem;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    overflow-y: hidden;
    h1 {
      font-size: 32px;
    }
    p {
      overflow-y: hidden;

      font-size: 18px;
      font-weight: 300;
      line-height: 22px;
      margin: 0rem;
      margin-top: 2rem;
      text-align: center;
      margin: 0rem 1rem;
    }
  }
  @media screen and (max-width: 480px) {
    margin-top: 2rem;
    overflow-y: hidden;
  }
`;
