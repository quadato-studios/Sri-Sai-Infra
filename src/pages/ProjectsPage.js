import React from "react";
import Project from "../components/page-components/Project";
import bgImg from "../assets/bg3.jpg";

const ProjectsPage = () => {
  return (
    <div style={{ backgroundImage: `url(${bgImg})` }}>
      <Project />
    </div>
  );
};

export default ProjectsPage;
