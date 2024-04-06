// CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

// the data and functions to manipulate it
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, callback) => {
    setCart([...cart, product]);
    if (callback) {
      callback(product);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};