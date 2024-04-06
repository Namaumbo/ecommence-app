import React from "react";
import {
  Stack,
  CardBody,
  Heading,
  Text,
  Divider,
  Card,
  Image,
  ButtonGroup,
  Button,
  CardFooter,
} from "@chakra-ui/react";
import "./Card.css";
import Header from "../header/Header";

export default function CardComponent() {
  return (
    <React.Fragment>
      <Card maxW="sm">
        <CardBody>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
        </CardBody>
        <div className="info-card">
          <Text className="name">Green double couch</Text>
          <h3 className="price-number">$150</h3>
        </div>
        <CardFooter className="futa">
          <Button colorScheme="teal" size="sm" className="add-btn">
            To Cart
          </Button>

          <Button colorScheme="blue" size="sm">
            Buy Now
          </Button>
        </CardFooter>
      </Card>
    </React.Fragment>
  );
}
