import React from "react";
import styled from "styled-components";

const CurProjectDetails = (props) => {
  return (
    <ProjDetailsContainer>
      <ImageDiv>
        <img src={props.src} alt="#" height="300px" />
        <h5>{props.address}</h5>
      </ImageDiv>
      <SubDiv>
        <SubHeadingWrapper>
          <SideHeading>Status : </SideHeading>
          <p>{props.status}</p>
        </SubHeadingWrapper>
        <SubHeadingWrapper>
          <SideHeading>Total Area(in SqFt) : </SideHeading>
          <p>{props.totalSqFt}</p>
        </SubHeadingWrapper>
        <SubHeadingWrapper>
          <SideHeading>Municipality : </SideHeading>
          <p>{props.municipality}</p>
        </SubHeadingWrapper>
        <SubHeadingWrapper>
          <SideHeading>No. of Flats : </SideHeading>
          <p>{props.noOfFlat}</p>
        </SubHeadingWrapper>
        <SubHeadingWrapper>
          <SideHeading>Flat Size : </SideHeading>
          <p>{props.flatSize}</p>
        </SubHeadingWrapper>
        <SubHeadingWrapper>
          <SideHeading>Cost of Project : </SideHeading>
          <p>{props.costOfProject}</p>
        </SubHeadingWrapper>
        <SubHeadingWrapper>
          <SideHeading>Availability Status : </SideHeading>
          <p>{props.flats}</p>
        </SubHeadingWrapper>
        <MapView src={props.gmap} width="100%" height="50%" loading="lazy" />
      </SubDiv>
    </ProjDetailsContainer>
  );
};

export default CurProjectDetails;

const ProjDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  overflow-y: hidden;
`;
const ImageDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h5 {
    margin-top: 0.2rem;
    font-weight: 500;
    font-size: 28;
  }
`;
const SubDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: -10rem;
`;

const SideHeading = styled.p`
  font-size: 24;
  font-weight: bold;
  margin-bottom: 1.2rem;
  color: black;
  margin-right: 0.5rem;
`;
const SubHeadingWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const MapView = styled.iframe`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
