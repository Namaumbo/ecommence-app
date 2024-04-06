import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./Card.css";

import {
  CardBody,
  Text,
  Card,
  Image,
  Button,
  CardFooter,
  useToast,
} from "@chakra-ui/react";

export default function CardComponent({ product }) {
  const { addToCart } = useContext(CartContext);
  const toast = useToast();
  const navigation = useNavigate();

  const handleAddToCart = ({ product }) => {
    addToCart(product, (addedProduct) => {
      toast({
        title: "Cart Updated",
        description: `${product.name} has been added to cart`,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    });
  };

  const handleItemClick = (item) => {
    navigation(`/product-view/${item}`);
  };

  return (
    <React.Fragment>
      <Card maxW="sm" className="a-card">
        <CardBody>
          <Image
            src={product.picture}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
        </CardBody>
        <div className="info-card">
          <Text className="name">{product.name}</Text>
          <h3 className="price-number">${product.price}</h3>
        </div>
        <CardFooter className="futa">
          <Button
            colorScheme="teal"
            size="sm"
            className="add-btn"
            onClick={() => handleAddToCart({ product })}
          >
            To Cart
          </Button>

          <Button
            colorScheme="blue"
            size="sm"
            onClick={() => handleItemClick("item")}
          >
            View It
          </Button>
        </CardFooter>
      </Card>
    </React.Fragment>
  );
}
