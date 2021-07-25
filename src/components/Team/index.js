import React from "react";
import { TeamContainer } from "./TeamElements";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Team() {
  return (
    <TeamContainer>
      <div data-aos="fade-left">
        <h1>Our Team</h1>
      </div>
      <div data-aos="fade-right">
        <p>
          We have carefully cultivated a small team of gifted and diverse
          individuals,all of whom are industry superstars. By being extremely
          selective about our hires, we are able to invest a substantial amount
          of resources to attract and retain top performers.
        </p>
      </div>
    </TeamContainer>
  );
}

export default Team;
