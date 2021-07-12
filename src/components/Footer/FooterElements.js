import styled from "styled-components";

export const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  /* margin: 3rem; */
  font-family: Poppins;
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .social {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 3rem;
  }
`;
export const MiddleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  ul {
    margin-top: -0.8rem;
  }
  li {
    list-style: none;
    font-size: 18px;
    margin: 0.7rem 0;
  }
  a {
    text-decoration: none;
    color: black;
    &:hover {
      color: #00a2ff;
    }
  }
  h3 {
    border-bottom: 1px solid grey;
    width: 50px;
  }
`;
export const RightContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  h3 {
    border-bottom: 1px solid grey;
  }
  p {
    margin: 0 5rem;
    text-align: center;
  }
  .call {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 2rem;
    a {
      text-decoration: none;
      margin-left: 0.6rem;
      font-size: 16px;
    }
  }
`;
