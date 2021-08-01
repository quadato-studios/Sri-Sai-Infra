import styled from "styled-components";

export const CTAContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  font-family: Poppins;
  background: rgba(0, 163, 255);
  /* margin-bottom: 5rem; */
  margin-top: 3rem;
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const LeftCTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  h2 {
    font-size: 28px;
    font-weight: 400;
  }
  h1 {
    font-size: 38px;
    font-weight: 600;
    margin-top: -1rem;
  }
`;

export const RightCTAContainer = styled.div`
  text-align: center;
  overflow-x: hidden;
  padding: 32px;
  color: white;
  background: rgba(255, 255, 255, 0.23);
  backdrop-filter: blur(200px);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  margin: 2rem 2rem;
  a {
    text-decoration: none;
    color: white;
    &:hover {
      color: black;
    }
  }
`;
