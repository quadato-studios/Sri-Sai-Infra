import React from "react";
import { Cards, ProjectConatiner } from "./ProjectElements";
import Card from "../UI/Card";
import Data from "../../assets/Data";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function Projects(props) {
  return (
    <div data-aos="fade-up" data-aos-duration="2000">
      <ProjectConatiner>
        <h1>Projects</h1>
        <Cards>
          {Data.map((key) => (
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
