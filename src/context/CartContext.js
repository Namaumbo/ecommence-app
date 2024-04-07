// CartContext.js
import React, { createContext, useState } from "react";

export const CartContext = createContext();

/**
 * Manages a shopping cart in a React application.
 * @param {Object} props - The props object.
 * @param {React.ReactNode} props.children - The child components that will be wrapped within the `CartProvider` component.
 * @returns {React.ReactNode} The `CartProvider` component.
 */
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  /**
   * Adds a product to the cart.
   * @param {Object} product - The product to be added to the cart.
   * @param {Function} [callback] - An optional callback function to be called after adding the product.
   */
  const addToCart = (product, callback) => {
    setCart((prevCart) => [...prevCart, product]);
    callback && callback(product);
  };

  /**
   * Removes a product from the cart.
   * @param {string} productName - The name of the product to be removed from the cart.
   * @param {Function} [callback] - An optional callback function to be called after removing the product.
   */
  const removeFromCart = (productName, callback) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.name !== productName)
    );
    callback && callback(productName);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
