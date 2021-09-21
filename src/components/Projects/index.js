import React, { useState } from "react";
import { Cards, ProjectConatiner } from "./ProjectElements";
import Card from "../UI/Card";
import CompletedTS from "../../assets/completed_ts";
import CurrentTS from "../../assets/current_ts";
import CompletedAP from "../../assets/completed_ap";
import CurrentAP from "../../assets/current_ap";
import Switch from "react-switch";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import CoProjectDetails from "../page-components/CompletedProjectDetails";
import CurProjectDetails from "../page-components/CurrentProjectDetails";
AOS.init();
function Projects(props) {
  const [toggle, setToggle] = useState(false);
  const [state, setState] = useState(false);

  const [info, setInfo] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClick = (e, id, m) => {
    onOpen();
    if (m === "n" && !state) {
      CurrentTS.forEach((i) => {
        if (i.id === id) {
          setInfo(i);
        }
      });
    } else if(m === 'n' && state) {
      CurrentAP.forEach((i) => {
        if (i.id === id) {
          setInfo(i);
        }
      });
    } else if (m==='o' && state) {
      CompletedAP.forEach((i) => {
        if (i.id === id) {
          setInfo(i);
        }
      });
    } else {
      CompletedTS.forEach((i) => {
        if (i.id === id) {
          setInfo(i);
        }
      });
    }
  };
  return (
    <div data-aos="fade-up" data-aos-duration="2000">
      <ProjectConatiner>
        <h1>Projects</h1>
        <h4>{toggle ? "Completed Projects" : "On Going Projects"}</h4>
        <Switch
          onChange={() => {
            setToggle((prevState) => !prevState);
          }}
          checked={toggle}
          onColor="#0062ff"
          onHandleColor="#2693e6"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
          className="react-switch"
          id="material-switch"
        />
        <h4>{state ? "Andhra Pradesh" : "Telangana"}</h4>
         <Switch
          onChange={() => {
            setState((prevState) => !prevState);
          }}
          checked={state}
          onColor="#4b5320"
          onHandleColor="#4b5320"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
          className="react-switch"
          id="material-switch"
        />
        <Cards>
          {
            toggle && state
            ? CompletedAP.map((ex) => (
              <div key={ex.id} onClick={(ev) => handleClick(ev, ex.id, "o")}>
                <Card
                  key={ex.id}
                  id={ex.id}
                  title={ex.title}
                  address={ex.address}
                  src={ex.img}
                />
              </div>
            ))
            : toggle && !state
            ? CompletedTS.map((ex) => (
              <div key={ex.id} onClick={(ev) => handleClick(ev, ex.id, "o")}>
                <Card
                  key={ex.id}
                  id={ex.id}
                  title={ex.title}
                  address={ex.address}
                  src={ex.img}
                />
              </div>
            ))
            : !toggle && state
            ? CurrentAP.map((ez) => (
              <div key={ez.id} onClick={(ev) => handleClick(ev, ez.id, "n")}>
                <Card
                  key={ez.id}
                  id={ez.id}
                  title={ez.title}
                  address={ez.address}
                  src={ez.img}
                />
              </div>
            ))
              : CurrentTS.map((ez) => (
                <div key={ez.id} onClick={(ev) => handleClick(ev, ez.id, "n")}>
                  <Card
                    key={ez.id}
                    id={ez.id}
                    title={ez.title}
                    address={ez.address}
                    src={ez.img}
                  />
                </div>
              ))
          }
        </Cards>
      </ProjectConatiner>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="4xl"
        scrollBehavior="inside"
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            style={{
              overflowY: "hidden",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {info?.title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {toggle ? (
              <CoProjectDetails
              src={info?.img}
              address={info?.address}
              status={info?.status}
              totalSqFt={info?.totalSqFt}
              municipality={info?.municipality}
              flats={info?.flats}
              completionStatus={info?.completionStatus}
            />
            ) : (
              <CurProjectDetails
                src={info?.img}
                address={info?.address}
                status={info?.status}
                totalSqFt={info?.sqft}
                municipality={info?.municipality}
                noOfFlat={info?.noOfFlat}
                flatSize={info?.flatSize}
                costOfProject={info?.costOfProject}
                flats={info?.flats}
                gmap={info?.gmap}
              />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Projects;
