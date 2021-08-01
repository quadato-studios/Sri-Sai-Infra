import React from "react";
import Project from "../components/page-components/Project";
import bgImg from "../assets/3d.jpg";

const ProjectsPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <Project />
    </div>
  );
};

export default ProjectsPage;
