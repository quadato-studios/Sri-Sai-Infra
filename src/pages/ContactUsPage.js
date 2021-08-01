import React from "react";
import ContactUs from "../components/page-components/ContactUs";
import Img from "../assets/footerBG.jpg";

const ContactUsPage = () => {
  return (
    <div style={{ backgroundImage: `url(${Img})` }}>
      <ContactUs />
    </div>
  );
};

export default ContactUsPage;
