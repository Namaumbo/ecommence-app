import React from "react";
import { useNavigate } from "react-router-dom";
import CardComponent from "../components/cardComponent/CardComponent";
import Header from "../components/header/Header";
import Slider from "react-slick";
import "./pages.css";
import * as github from "react-icons/go";
import { Button } from "@chakra-ui/react";

export default function ProductListingPage() {
  const navigation = useNavigate();

  const CustomNextArrow = (props) => (
    <div
      style={{
        position: "relative",
        left: "20px",
        width: "40px",
        marginBottom: "10px",
      }}
      onClick={props.onClick}
    >
      <Button colorScheme="blue" size="sm">
        <github.GoArrowRight />
      </Button>
    </div>
  );

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    prevArrow: <CustomNextArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 3024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 580,
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
      <div className="main-product-listing">
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
                <div
                  key={_x + 1}
                  onClick={() => handleItemClick("item")}
                  className="single-item"
                >
                  <CardComponent />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </React.Fragment>
  );
}
