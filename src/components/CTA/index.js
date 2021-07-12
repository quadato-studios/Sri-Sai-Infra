import React from "react";
import {
  CTAContainer,
  LeftCTAContainer,
  RightCTAContainer,
} from "./CtaElements";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function CTA() {
  return (
    <div data-aos="fade-right">
      <CTAContainer>
        <LeftCTAContainer>
          <h2>Real People. Real Purpose</h2>
          <h1>REAL BUILDERS</h1>
        </LeftCTAContainer>
        <RightCTAContainer>
          <h2>HOW CAN WE HELP YOU?</h2>
          <a href="tel: +918048736989">Get in touch</a>
        </RightCTAContainer>
      </CTAContainer>
    </div>
  );
}

export default CTA;
