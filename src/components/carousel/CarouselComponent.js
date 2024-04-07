import React from "react";
import Slider from "react-slick";
import "./carousel.css";

/**
 * Renders a carousel slider with autoplay functionality.
 * @returns {JSX.Element} The carousel component.
 */
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

  const pictures = ["photo.avif", "clothes.JPG", "photo.avif", "clothes.JPG"];
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {pictures.map((picture) => {
          return (
            <div className="carousel-img">
              <img
                src={`${process.env.PUBLIC_URL}${picture}`}
                alt="sample pic"
              />
            </div>
          );
        })}
      
      </Slider>
    </div>
  );
}

export default CarouselComponent;
