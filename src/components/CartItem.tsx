import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductInterface } from "src/types/types";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "src/contexts/CartContext";

const CartItem = ({ product }: { product: ProductInterface }) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const { id, title, image, price, amount } = product;
  return (
    <div className="flex w-full gap-x-4 border-b border-gray-200 py-2 font-light text-gray-500 lg:px-6">
      <div className="flex min-h-[150px] w-full items-center gap-x-4">
        <Link to={`/product/${id}`}>
          <img className="max-w-[5rem]" src={image} alt="Cart Product" />
        </Link>
        <div className="flex w-full flex-col">
          <div className="mb-2 flex justify-between">
            <Link
              to={`/product/${id}`}
              className="max-w-[15rem] text-sm font-medium uppercase text-primary hover:underline">
              {title}
            </Link>
            <button onClick={() => removeFromCart(id)} className="text-xl">
              <IoMdClose className="text-gray-500 transition hover:text-red-500" />
            </button>
          </div>
          <div className="flex h-[2.25rem] gap-x-2 text-sm">
            <div className="flex h-full max-w-[6.25rem] flex-1 items-center border font-medium text-primary">
              <button
                onClick={() => decreaseQuantity(id)}
                className="flex h-full flex-1 items-center justify-center">
                <IoMdRemove />
              </button>
              <div className="flex h-full items-center justify-center px-2">{amount}</div>
              <button
                onClick={() => increaseQuantity(id)}
                className="flex h-full flex-1 items-center justify-center">
                <IoMdAdd />
              </button>
            </div>
            <div className="flex flex-1 items-center justify-around">$ {price}</div>
            <div className="flex flex-1 items-center justify-end font-medium text-primary">{`$ ${(
              price * amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
