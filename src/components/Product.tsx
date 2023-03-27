import React from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";

const Product = ({
  id,
  title,
  category,
  image,
  price
}: {
  id: string;
  title: string;
  category: string;
  image: string;
  price: number;
}) => {
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[18.75rem] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="max-w-[12.5rem] mx-auto flex justify-center items-center">
            <img
              className="max-h-[10rem] group-hover:scale-110 transition duration-300"
              src={image}
              alt="Product"
            />
          </div>
        </div>
        <div className="absolute top-5 -right-10 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`product/${id}`}
            className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      <div>
        <h1 className="text-sm capitalize text-gray-500 mb-1">{category}</h1>
        <Link to={`product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <h3 className="font-semibold">$ {price}</h3>
      </div>
    </div>
  );
};

export default Product;
