import React from "react";
import {useNavigate} from "react-router-dom";
import CarouselComponent from "../components/carousel/CarouselComponent";
import "./pages.css";
import { Text } from "@chakra-ui/react";

export default function LandingPage() {
  const navigation = useNavigate()
  const onButtonClick = () =>{
    navigation('product-list-page')
  }
    return (
    <React.Fragment>
      <div className="container" id="main-container">
        <div className="row align-items-start">
          <div className="col" id="info-words">
            <span id="welcome-words">
              <span className="A">50%</span> off Summer Sale
            </span>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <button
              className="checkout-btn"
              id="landing-page"
              onClick={onButtonClick}
            >
              SHOP NOW
            </button>
          </div>
          <div className="col">
            <CarouselComponent />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
