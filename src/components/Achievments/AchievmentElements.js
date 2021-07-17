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
`;

export const LeftContainer = styled.div`
  display: grid;
  margin-left: 10rem;
  h1 {
    font-weight: 500;
    font-size: 38px;
    line-height: 64px;
  }
`;
export const RightContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
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
`;
