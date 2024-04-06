import React from "react";
import { useNavigate } from "react-router-dom";
import CardComponent from "../components/cardComponent/CardComponent";
import Header from "../components/header/Header";
import Slider from "react-slick";
import "./pages.css";

export default function ProductListingPage() {
  const navigation = useNavigate();

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
          infinite: false,
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

  const handleClick = (category) => {
    navigation(`/product-list-page/${category}`);
  };

  const handleItemClick = (item) => {
    navigation(`/product-view/${item}`);
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
        {/* TODO: make this a reusable component */}
        <div>
          <span
            className="link-see-more"
            onClick={() => handleClick("furniture")}
          >
            See more...
          </span>
        </div>
      </div>

      <div className="slider-container">
        <Slider {...settings}>
          {mapArry.map((_x) => {
            return (
              <div key={_x + 1} onClick={() => handleItemClick("item")} className="single-item">
                <CardComponent  />
              </div>
            );
          })}
        </Slider>
      </div>

      <div className="title-link">
        <h1>
          Clothes<span className="cart"> & Boots</span>
        </h1>
        <span className="link-see-more" onClick={() => handleClick("clothes")}>
          See more...
        </span>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {mapArry.map((_x) => {
            return (
              <>
                <div key={_x + 1} onClick={() => handleItemClick("item")}>
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
