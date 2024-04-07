// CartContext.js
import React, { createContext, useState } from "react";

export const CartContext = createContext();

// the data and functions to manipulate it
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, callback) => {
    setCart([...cart, product]);
    callback && callback(product);
  };

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
