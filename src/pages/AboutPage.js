import React from "react";
import About from "../components/page-components/About";
import bgImg from "../assets/footerBG.jpg";
const AboutPage = () => {
  return (
    <div style={{ backgroundImage: `url(${bgImg})` }}>
      <About />
    </div>
  );
};

export default AboutPage;
