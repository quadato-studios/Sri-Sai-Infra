import React, { useState } from "react";
import { Cards, ProjectConatiner } from "./ProjectElements";
import Card from "../UI/Card";
import Data from "../../assets/Data";
import NewData from "../../assets/NewData";
import Switch from "react-switch";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function Projects(props) {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);
  return (
    <div data-aos="fade-up" data-aos-duration="2000">
      <ProjectConatiner>
        <h1>Projects</h1>
        <h4>{toggle ? "Current Projects" : "Completed Projects"}</h4>
        <Switch
          onChange={() => {
            setToggle((prevState) => !prevState);
          }}
          checked={toggle}
          onColor="#86d3ff"
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
        <Cards>
          {toggle
            ? Data.map((key) => (
                <Card
                  id={key.id}
                  title={key.title}
                  address={key.address}
                  src={key.img}
                />
              ))
            : NewData.map((key) => (
                <Card
                  id={key.id}
                  title={key.title}
                  address={key.address}
                  src={key.img}
                />
              ))}
        </Cards>
      </ProjectConatiner>
    </div>
  );
}

export default Projects;
