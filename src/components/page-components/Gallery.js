import React, { useState } from "react";
import styled from "styled-components";
import CTA from "../CTA";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <FbFrameContainer>
        <FbFrame
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsrisaiinfradevelopers&tabs=timeline&width=340&height=720&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          width="340"
          height="720"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
      </FbFrameContainer>
      <CTA />
      <Footer />
    </>
  );
};

export default Gallery;

const FbFrame = styled.iframe`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  overflow: hidden;
  margin-top: 1.5rem;
`;
const FbFrameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
