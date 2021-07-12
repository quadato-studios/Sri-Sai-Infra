import React from "react";
import styled, { keyframes } from "styled-components";
import { pulse } from "react-animations";
const zoomInAnimation = keyframes`${pulse}`;
function Card(props) {
  return (
    <CardComponent>
      <img src={props.src} alt="#" width="90%" height="400px" />
      <h5>{props.title}</h5>
      <p>{props.address}</p>
    </CardComponent>
  );
}

export default Card;

const CardComponent = styled.div`
  text-align: center;
  overflow-x: hidden;
  padding: 32px;
  background: rgba(255, 255, 255, 0.23);
  backdrop-filter: blur(200px);
  border-radius: 8px;
  margin: 2rem 2rem;
  h5 {
    /* Heading / H5 */
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    /* identical to box height, or 133% */

    text-align: center;
    font-feature-settings: "liga" off;

    /* Text / Gray 900 */

    color: #18191f;
  }

  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;

    text-align: center;
    font-feature-settings: "liga" off;

    color: grey;
  }
  &:hover {
    box-shadow: 0px 0px 26px rgba(0, 194, 255, 0.5);
    animation: 1s ${zoomInAnimation};
  }
  img {
    border-radius: 25px;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.35);
  }
`;
