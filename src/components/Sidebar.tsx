import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "./CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "src/contexts/CartContext";
import { ProductInterface } from "src/types/types";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, itemAmount, totalCost } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } fixed top-0 z-20 h-full w-full overflow-y-auto scroll-smooth bg-white px-4 shadow-2xl transition-all duration-300 md:w-[35vw] lg:px-[2rem] xl:max-w-[30vw]`}>
      <div className="flex items-center justify-between border-b py-6">
        <div className="text-sm font-semibold uppercase">Shopping Bag ({itemAmount})</div>
        <button className="flex h-8 w-8 items-center justify-center" onClick={handleClose}>
          <IoMdArrowForward className="text-2xl" />
        </button>
      </div>
      <div className="flex h-[33.75rem] flex-col gap-y-2 overflow-y-auto overflow-x-hidden border-b lg:max-h-[40rem]">
        {cart.length > 0 &&
          cart.map((item: ProductInterface) => {
            return <CartItem key={item.id} product={item} />;
          })}
      </div>
      <div className="mt-4 flex flex-col gap-y-3 py-4">
        <div className="flex w-full items-center justify-between">
          <div className="font-semibold uppercase">
            <span className="mr-2">Total:</span>$ {totalCost.toFixed(2)}
          </div>
          <button
            onClick={clearCart}
            className="flex h-12 w-12 items-center justify-center bg-red-500 py-4 text-xl text-white">
            <FiTrash2 />
          </button>
        </div>
        <Link
          to={"/"}
          className="flex w-full items-center justify-center bg-gray-200 p-4 font-medium text-primary">
          View Cart
        </Link>
        <Link
          to={"/"}
          className="flex w-full items-center justify-center bg-primary p-4 font-medium text-white">
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
