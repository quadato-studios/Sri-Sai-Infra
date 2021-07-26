import React, { useState } from "react";
import Achievments from "../components/Achievments";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Team from "../components/Team";

import bgImg from "../assets/bg3.jpg";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div style={{ backgroundImage: `url(${bgImg})` }}>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <Team />
      <Projects />
      <Achievments />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
