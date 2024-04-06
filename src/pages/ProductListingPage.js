import React from "react";
import CardComponent from "../components/cardComponent/CardComponent";
import Header from "../components/header/Header";
import Slider from "react-slick";
import "./pages.css"

export default function ProductListingPage() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 3072,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const mapArry = [1, 2, 3, 4, 5, 6, 7];
  return (
    <React.Fragment>
      {/* TODO: Remove this Header */}
      <Header />
      <div className="title-link">
      <h1>
        Furniture <span className="cart">Section</span>
      </h1>
      <div>
        <span className="link-see-more">See more...</span>
      </div>
      </div>
      
      <div className="slider-container">
        <Slider {...settings}>
          {mapArry.map((_x) => {
            return (
              <>
                <div>
                  <CardComponent />
                </div>
              </>
            );
          })}
        </Slider>
      </div>
      <h1>
        Clothes<span className="cart"> & Boots</span>
      </h1>
      <div className="slider-container">
        <Slider {...settings}>
          {mapArry.map((_x) => {
            return (
              <>
                <div>
                  <CardComponent />
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    </React.Fragment>
  );
}
