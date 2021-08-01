import React from "react";
import Gallery from "../components/page-components/Gallery";
import Img from "../assets/footerBG.jpg";
const GalleryPage = () => {
  return (
    <div style={{ backgroundImage: `url(${Img})` }}>
      <Gallery />
    </div>
  );
};

export default GalleryPage;
