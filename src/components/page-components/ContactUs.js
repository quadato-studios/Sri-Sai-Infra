import React, { useState } from "react";
import Sidebar from "../Navbar";
const ContactUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
    </>
  );
};

export default ContactUs;
