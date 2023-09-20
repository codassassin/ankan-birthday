import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import './slider-animations.css';
import './styles.css';
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

const Carousel = ({ setIsCarouselDialog }) => {
    const carouselDialog = (e) => {
        e.preventDefault();
        setIsCarouselDialog(false)
    };
  return (
    <div className='carousel-cont'>
        <div className='topbar' onClick={carouselDialog}>✖</div>
        <Slider autoplay={300} className="slider-wrapper">
            {fadeImages.map((item, index) => (
                <div key={index} className="slider-content">
                    <img src={item} alt=''/>
                </div>
            ))}
        </Slider>
    </div>
  )
}

export default Carousel