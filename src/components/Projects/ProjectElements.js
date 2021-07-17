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
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  padding-top: 2rem;
  place-items: center;
  overflow-x: hidden;
`;
