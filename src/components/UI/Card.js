import React from "react";
import styled, { keyframes } from "styled-components";
import { pulse } from "react-animations";
import { IoIosNavigate } from "react-icons/io";
const zoomInAnimation = keyframes`${pulse}`;
function Card(props) {
  // const handleClick = (e) => {
  //   const id = e.target.id;
  //   console.log(id);
  // };
  return (
    <CardComponent id={props.id}>
      <img src={props.src} alt="#" width="100%" height="100%" />
      <h5>{props.title}</h5>
      <div className="location">
        <IoIosNavigate size={23} color="blue" />
        <p>{props.address}</p>
      </div>
    </CardComponent>
  );
}

export default Card;

const CardComponent = styled.div`
  text-align: center;
  overflow-x: hidden;
  justify-content: center;
  align-items: center;
  padding: 32px;
  height: fit-content;
  width: fit-content;
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
    color: rgba(0, 163, 255);
    /* identical to box height, or 133% */

    text-align: center;
    font-feature-settings: "liga" off;

    /* Text / Gray 900 */
  }

  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    margin-left: 0.5rem;
    text-align: center;
    font-feature-settings: "liga" off;

    color: black;
  }
  &:hover {
    box-shadow: 0px 0px 26px rgba(0, 194, 255, 0.5);
    animation: 1s ${zoomInAnimation};
  }
  .location {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media screen and (max-width: 480px) {
    &:hover {
      box-shadow: none;
      animation: none;
    }
  }
  img {
    border-radius: 25px;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.35);
  }
`;
