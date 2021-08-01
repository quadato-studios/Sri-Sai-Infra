import React, { useState } from "react";
import styled from "styled-components";
import CTA from "../CTA";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
const ContactUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <GForm
        src="https://docs.google.com/forms/d/e/1FAIpQLSdLgYrxa-jiItOAZTIcggQ216BAsAxzSUH1QopsiYoKzugfMA/viewform?embedded=true"
        width="100%"
        height="974"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      />
      <CTA />
      <Footer />
    </>
  );
};

export default ContactUs;
const GForm = styled.iframe`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
  overflow-y: hidden;
`;
