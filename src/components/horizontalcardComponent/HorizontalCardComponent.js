import React from "react";
import { Card, CardBody, Button } from "@chakra-ui/react";
import "./horizontalComponent.css";
export default function HorizontalCardComponent() {
  return (
    <React.Fragment>
      <Card variant = 'elevated'>
        <CardBody>
          <div className="product-details">
            <div className="product-image">
              <img
                src={`${process.env.PUBLIC_URL}/photo.avif`}
                alt="Green double couch with wooden legs"
              />
            </div>
            <div className="product-info">
              <div className="product-name">PRODUCT NAME</div>
              <div className="product-color">Color: Blue</div>
              <div className="product-price"><span className="mtengo">$2999</span>/each</div>
              <Button colorScheme="teal" size="xs">
                Remove
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
}
