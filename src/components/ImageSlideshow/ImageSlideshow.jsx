import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image1 from "../../assets/images/one.jpg";
import Image2 from "../../assets/images/two.jpg";
import Image3 from "../../assets/images/three.jpg";
import Image4 from "../../assets/images/four.jpg";
import Image5 from "../../assets/images/five.jpg";
import Image6 from "../../assets/images/six.jpg";
import Image7 from "../../assets/images/seven.jpg";
import Image8 from "../../assets/images/eight.jpg";
import Image9 from "../../assets/images/nine.jpg";
import Image10 from "../../assets/images/ten.jpg";
import Image11 from "../../assets/images/eleven.jpg";

const fadeImages = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11];

export const ImageSlideshow = () => {
  return (
    <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} alt="bday" />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} alt="bday" />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} alt="bday" />
          </div>
        </div>
      </Fade>
    </div>
  );
};
