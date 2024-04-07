import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import CardComponent from "../components/cardComponent/CardComponent";
import Slider from "react-slick";
import "./pages.css";
import * as github from "react-icons/go";
import { Button } from "@chakra-ui/react";
import dummy from "../dummy,.json";


export default function ProductListingPage({ product }) {
  const navigation = useNavigate();

  // TODO: fetch from db using useEffect
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

  // const fetchPhotos = async () => {
  //   await axios.get("https://jsonplaceholder.typicode.com/photos");
  // };

  useEffect(() => {
    // Product().then((productsData) => {
    //   setProducts(productsData);
    //   setTimeout(() => console.log(products),3000);
    // }).catch((error) => {
    //   console.error("Error fetching products:", error);
    // });
  }, []);

  return (
    <React.Fragment>
      <div className="main-product-listing">
        <div className="title-link">
          <h1>
            Furni3re <span className="cart">Section</span>
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
            {dummy.map((_x) => {
              return (
                <div key={_x + 1} className="single-item">
                  <CardComponent product={_x} key={_x.name} />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </React.Fragment>
  );
}
