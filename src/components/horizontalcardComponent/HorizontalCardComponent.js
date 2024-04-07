import React, { useContext } from "react";
import { Card, CardBody, Button, useToast } from "@chakra-ui/react";
import "./horizontalComponent.css";
import { CartContext } from "../../context/CartContext";

export default function HorizontalCardComponent({ product }) {
  const { removeFromCart } = useContext(CartContext);
  const toast = useToast();
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
    <React.Fragment>
      <div className="horizontal-card-container">
        <Card variant="elevated">
          <CardBody>
            <div className="product-details">
              <div className="product-image">
                <img
                  src={`${process.env.PUBLIC_URL}/photo.avif`}
                  alt="Green double couch with wooden legs"
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
    </React.Fragment>
  );
}
