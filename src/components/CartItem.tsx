import React from "react";
import { ProductInterface } from "src/types/types";

const CartItem = ({ product }: { product: ProductInterface }) => {
  return <div>{product.title}</div>;
};

export default CartItem;
