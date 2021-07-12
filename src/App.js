import React from "react";
import Achievments from "./components/Achievments";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Team from "./components/Team";

import bgImg from "./assets/bg3.jpg";

function App() {
  return (
    <div style={{ backgroundImage: `url(${bgImg})` }}>
      <Navbar />
      <Hero />
      <Team />
      <Projects />
      <Achievments />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
