import React from "react";
import { Heading, Card, CardBody } from "@chakra-ui/react";
import HorizontalCardComponent from "../components/horizontalcardComponent/HorizontalCardComponent";
import "./pages.css";
export default function CartPage() {
  return (
    <React.Fragment>
      <Heading>Welcome to CartPage</Heading>
      <Heading as="h4" size="lg" id="head">
        My <span className="cart">Cart</span>
      </Heading>
      <div className="order-cart-container">
        <div className="picked-item-container">
          <HorizontalCardComponent />
          <HorizontalCardComponent />
          <HorizontalCardComponent />
          <HorizontalCardComponent />
          <HorizontalCardComponent />
        </div>
        <div className="order-total">
          <Heading as="h4" size="lg" id="head">
            Order<span className="cart">Total</span>
          </Heading>
          <Card>
            <CardBody>
            <Heading as="h4" size="md" id="subtotal">Total</Heading>
              <div className="row align-items-start">
                <div className="col" id="total-heads" >Subtotal </div>
                <div className="col" id="amounts-numbers">$ 2000 </div>
              </div>
              <div className="row align-items-start">
                <div className="col" id="total-heads" >Items No. </div>
                <div className="col"  id="amounts-numbers">4</div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
}
