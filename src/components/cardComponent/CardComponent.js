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

/**
 * Renders a card with product information.
 * @param {Object} props - The component props.
 * @param {Object} props.product - The product object containing the name, price, and picture of the product.
 * @returns {JSX.Element} - The rendered card component.
 */
export default function CardComponent({ product }) {
  const { addToCart } = useContext(CartContext);
  const toast = useToast();
  const navigation = useNavigate();

  /**
   * Handles the "To Cart" button click event.
   * Adds the product to the cart and displays a success toast notification.
   * @param {Object} product - The product object.
   */
  const handleAddToCart = (product) => {
    addToCart(product, (addedProduct) => {
      toast({
        title: "Cart Updated",
        description: `${addedProduct.name} has been added to cart`,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    });
  };

  /**
   * Handles the "View It" button click event.
   * Navigates to the product view page.
   * @param {string} item - The item identifier.
   */
  const handleItemClick = (item) => {
    navigation(`/product-view/${item}`);
  };

  return (
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
          onClick={() => handleAddToCart(product)}
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
  );
}
