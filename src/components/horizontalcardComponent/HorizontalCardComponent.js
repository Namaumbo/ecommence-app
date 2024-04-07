import React, { useContext } from "react";
import { Card, CardBody, Button, useToast } from "@chakra-ui/react";
import "./horizontalComponent.css";
import { CartContext } from "../../context/CartContext";

/**
 * Renders a horizontal card displaying product details.
 * @param {Object} props - The component props.
 * @param {Object} props.product - The product object containing the name and price of the product to be displayed.
 * @returns {JSX.Element} The rendered JSX of the horizontal card component.
 */
export default function HorizontalCardComponent({ product }) {
  const { removeFromCart } = useContext(CartContext);
  const toast = useToast();

  /**
   * Handles the removal of the product from the cart.
   * @param {string} productName - The name of the product to be removed.
   */
  const handleRemoveItem = (productName) => {
    removeFromCart(productName, () => {
      toast({
        title: "Cart Updated",
        description: `${productName} has been deleted from cart`,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    });
  };

  return (
    <div className="horizontal-card-container">
      <Card variant="elevated">
        <CardBody>
          <div className="product-details">
            <div className="product-image">
              <img
                src={`${process.env.PUBLIC_URL}/photo.avif`}
                alt={product.name}
              />
            </div>
            <div className="product-info">
              <div className="product-name">{product.name}</div>
              <div className="product-color">In stock</div>
              <div className="product-price">
                <span className="mtengo">${product.price}</span>/each
              </div>
              <Button
                colorScheme="teal"
                size="xs"
                onClick={() => handleRemoveItem(product.name)}
              >
                Remove
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
