import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import 'react-awesome-slider/dist/custom-animations/open-animation.css';
import img2 from '../../assets/T2.jpg';
import img4 from '../../assets/T4.jpg';

const AutoplaySlider = withAutoplay(AwesomeSlider);
const ImageSlider = (props) => {
  return (
    <div
      style={{
        width:'90vw',
        marginLeft:'5vw',
        marginTop:'2vw',
        overflowY: 'hidden'
      }}
    >
      <AutoplaySlider
        // animation="openAnimation"
        bullets={false}
        buttons={false}
        play={true}
        interval={3000}
      >
        <div style={{ backgroundColor: "transparent",overflow:'hidden' }}>
          <img src={img4} height='100vh' alt="#" />
        </div>
        <div style={{ backgroundColor: "transparent",overflow:'hidden' }}>
          <img src={img2} height='100vh' alt="#"/>
        </div>
        <div style={{ backgroundColor: "transparent",overflow:'hidden' }}>
          <img src={img4} height='100vh' alt="#"/>
        </div>
        <div style={{ backgroundColor: "transparent",overflow:'hidden' }}>
          <img src={img2} height='100vh' alt="#"/>
        </div>
      </AutoplaySlider>
      </div>
  );
};

export default ImageSlider;
