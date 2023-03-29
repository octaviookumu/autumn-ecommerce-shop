import React, { createContext, useState } from "react";
import { ContextProps, ProductInterface } from "../types/types";

export const CartContext = createContext<any>(null);

const CartProvider: ContextProps = ({ children }) => {
  const [cart, setCart] = useState<ProductInterface[]>([]);

  const addToCart = (product: ProductInterface, id: string) => {
    const newItem: ProductInterface = { ...product, amount: 1 };
    const existingCartItem = cart.find((item) => item.id === id);
    if (existingCartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id && existingCartItem.amount) {
          return { ...item, amount: existingCartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  console.log("cart", cart);

  return <CartContext.Provider value={{ cart, addToCart }}> {children}</CartContext.Provider>;
};

export default CartProvider;
