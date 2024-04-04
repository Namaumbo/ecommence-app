import React from "react";
import {
  Card,
  Image,
  Stack,
  CardBody,
  CardFooter,
  Text,
  Button,
  Heading,
} from "@chakra-ui/react";

import "./horizontalComponent.css";
export default function HorizontalCardComponent() {
  return (
    <React.Fragment>
      <div className="product-details">
        <div className="product-image">
          {/* <img
            src={`${process.env.PUBLIC_URL}/photo.avif`}
            alt="Green double couch with wooden legs"
          /> */}
        </div>
        <div className="product-info">
          <div className="product-name">PRODUCT NAME</div>
          <div className="product-sku">SKU: 2355</div>
          <div className="product-color">Color: Blue</div>
          <div className="product-price">₹ 2999 each</div>
          <div className="product-return">30 Days Return</div>
          <button className="remove-btn">Remove</button>
        </div>
      </div>
    </React.Fragment>
  );
}
