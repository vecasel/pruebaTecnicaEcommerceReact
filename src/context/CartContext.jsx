
import React, { createContext, useState } from 'react';

// Crear el contexto
export const CartContext = createContext();

// Provider para envolver la app y proporcionar el carrito
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Agrega un producto al carrito o actualiza la cantidad si ya existe
  const addItem = (product, quantity) => {
    setCartItems(prevItems => {
      const existing = prevItems.find(item => item.id === product.id);
      if (existing) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItems, { ...product, quantity }];
    });
  };

  // Elimina un producto del carrito
  const removeItem = productId =>
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));

  // Limpia todo el carrito
  const clearCart = () => setCartItems([]);

  // Total de items en carrito
  const getTotalItems = () =>
    cartItems.reduce((total, item) => total + item.quantity, 0);

  // Total a pagar
  const getTotalPrice = () =>
    cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        clearCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
