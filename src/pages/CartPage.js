import React, { useContext } from "react";
import { Heading, Card, CardBody } from "@chakra-ui/react";
import HorizontalCardComponent from "../components/horizontalcardComponent/HorizontalCardComponent";
import { CartContext } from "../context/CartContext";
import "./pages.css";

export default function CartPage() {
  const { cart } = useContext(CartContext);
  return (
    <React.Fragment>
      <Heading as="h4" size="lg" id="head">
        My <span className="cart">Cart</span>
      </Heading>
      {cart.length !== 0 ? (
        <>
          <div className="order-cart-container">
            <div className="picked-item-container">
              {cart.map((item) => {
                return (
                  <>
                    <HorizontalCardComponent product={item} />
                  </>
                );
              })}
            </div>
            <div className="order-total">
              <Heading as="h4" size="lg" id="head">
                Order<span className="cart">Total</span>
              </Heading>
              <Card>
                <CardBody>
                  <Heading as="h4" size="md" id="subtotal">
                    Total
                  </Heading>
                  <div className="row align-items-start">
                    <div className="col" id="total-heads">
                      Subtotal{" "}
                    </div>
                    <div className="col" id="amounts-numbers">
                    {/* TODO: Add the amounts to the amount field */}
                      <span className="mtengo">$14000</span>
                    </div>
                  </div>
                  <div className="row align-items-start">
                    <div className="col" id="total-heads">
                      Items No.{" "}
                    </div>
                    <div className="col" id="amounts-numbers">
                      {cart.length}
                    </div>
                  </div>
                  <button className="checkout-btn">CHECKOUT</button>
                </CardBody>
              </Card>
            </div>
          </div>
        </>
      ) : (
        <span> Hmmm! It Looks Like Your Cart is Empty</span>
      )}
    </React.Fragment>
  );
}
