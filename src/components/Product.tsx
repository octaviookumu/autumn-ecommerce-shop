import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import { ProductInterface } from "../types/types";

const Product = ({ product }: { product: ProductInterface }) => {
  const {
    id,
    title,
    category,
    image,
    price
  }: {
    id: number;
    title: string;
    category: string;
    image: string;
    price: number;
  } = product;
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <div className="group relative mb-4 h-[18.75rem] overflow-hidden border border-[#e4e4e4] transition">
        <div className="flex h-full w-full items-center justify-center">
          <div className="mx-auto flex max-w-[12.5rem] items-center justify-center">
            <img
              className="max-h-[10rem] transition duration-300 group-hover:scale-110"
              src={image}
              alt="Product"
            />
          </div>
        </div>
        <div className="absolute top-5 -right-10 flex flex-col items-center justify-center gap-y-2 p-2 opacity-0 transition-all duration-300 group-hover:right-5 group-hover:opacity-100">
          <button onClick={() => addToCart(product, id)}>
            <div className="flex h-12 w-12 items-center justify-center bg-red-500 text-white">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`product/${id}`}
            className="flex h-12 w-12 items-center justify-center bg-white text-primary drop-shadow-xl">
            <BsEyeFill />
          </Link>
        </div>
      </div>
      <div>
        <h1 className="mb-1 text-sm capitalize text-gray-500">{category}</h1>
        <Link to={`product/${id}`}>
          <h2 className="mb-1 font-semibold">{title}</h2>
        </Link>
        <h3 className="font-semibold">$ {price}</h3>
      </div>
    </div>
  );
};

export default Product;
