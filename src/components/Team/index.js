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
          We are having experienced staff around 2 senior engineers of 30years
          industry experience, 10 site engineers and 5 administration staff.
        </p>
      </div>
    </TeamContainer>
  );
}

export default Team;
