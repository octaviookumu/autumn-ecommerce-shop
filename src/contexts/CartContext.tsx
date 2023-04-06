import React, { createContext, useState, useEffect } from "react";
import { ContextProps, ProductInterface } from "../types/types";

export const CartContext = createContext<any>(null);

const CartProvider: ContextProps = ({ children }) => {
  const [cart, setCart] = useState<ProductInterface[]>([]);
  const [itemAmount, setItemAmount] = useState<number>(0);
  const [totalCost, settotalCost] = useState<number>(0);

  useEffect(() => {
    const amount = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.amount;
    }, 0);
    setItemAmount(amount);

    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.amount * currentItem.price;
    }, 0);
    settotalCost(total);

    return () => {
    };
  }, [cart]);

  const addToCart = (product: ProductInterface, id: number) => {
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

  const removeFromCart = (id: number) => {
    const newCart = [...cart].filter((item: ProductInterface) => item.id !== id);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseQuantity = (id: number) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  const decreaseQuantity = (id: number) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id && item.amount) {
          return {
            ...item,
            amount: cartItem.amount - 1
          };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removeFromCart(cartItem.id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        itemAmount,
        totalCost
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
