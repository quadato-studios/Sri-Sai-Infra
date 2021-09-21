import React, { useState } from "react";
import Achievments from "../components/Achievments";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Team from "../components/Team";

import bgImg from "../assets/Map-3.jpeg";
import Sidebar from "../components/Sidebar";
import ImageSlider from "../components/ImageSlider";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:'contain'
      }}
    >
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <ImageSlider />
      <Hero />
      <Achievments />
      <Team />
      <Projects />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
