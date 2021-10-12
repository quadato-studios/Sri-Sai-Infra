import React from "react";
import {
  LeftContainer,
  MainContainer,
  RightComponents,
  RightContainer,
} from "./AchievmentElements";
import CountUp from "react-countup";
import { FaBuilding, FaUniversity } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Achievments() {
  return (
    <div data-aos="fade-left">
      <MainContainer>
        <LeftContainer>
          <h1>
            Our 25 years <br />
            of achievements
          </h1>
        </LeftContainer>
        <RightContainer>
          <RightComponents>
            <FaBuilding size={30} />
            <h4>
              <CountUp end={25} duration={7.5} delay={3} />
            </h4>

            <h3>Projects</h3>
          </RightComponents>
          {/* <RightComponents>
            <FaUsers size={23} />
            <h4>
              <CountUp end={2000} duration={15} delay={2} />
            </h4>

            <h3>Satisfied</h3>
          </RightComponents> */}
          <RightComponents>
            <FaUniversity size={30} />
            <h4>
              <CountUp end={1} duration={5} delay={1} />
            </h4>

            <h3>Branches</h3>
          </RightComponents>
          {/* <RightComponents>
            <FaBriefcase size={23} />
            <h4>
              <CountUp end={1528715} duration={3.5} delay={1} />
            </h4>

            <h3>Sales</h3>
          </RightComponents> */}
        </RightContainer>
      </MainContainer>
    </div>
  );
}

export default Achievments;
