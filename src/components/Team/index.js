import React from "react";
import { TeamContainer } from "./TeamElements";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Team() {
  return (
    <div data-aos="fade-left">
      <TeamContainer>
        <h1>Our Team</h1>
        <p>
          We have carefully cultivated a small team of gifted and diverse
          individuals,all of whom are industry superstars. By being extremely
          selective about our hires, we are able to invest a substantial amount
          of resources to attract and retain top performers.
        </p>
      </TeamContainer>
    </div>
  );
}

export default Team;
