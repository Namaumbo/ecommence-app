import React from "react";
import Slider from "react-slick";
import "./carousel.css";

function CarouselComponent() {
  const settings = {
  
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="carousel-img">
          <img src={`${process.env.PUBLIC_URL}/photo.avif`} alt="sample pic" />
        </div>
        <div className="carousel-img">
          <img src={`${process.env.PUBLIC_URL}/clothes.JPG`} alt="sample pic" />
        </div>
        <div className="carousel-img">
          <img src={`${process.env.PUBLIC_URL}/photo.avif`} alt="sample pic" />
        </div>
        <div className="carousel-img">
          <img src={`${process.env.PUBLIC_URL}/clothes.JPG`} alt="sample pic" />
        </div>
      </Slider>
    </div>
  );
}

export default CarouselComponent;
