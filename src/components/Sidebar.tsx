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
  const { cart } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[2rem]`}>
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">Shopping Bag (0)</div>
        <button className="w-8 h-8 flex items-center justify-center" onClick={handleClose}>
          <IoMdArrowForward className="text-2xl" />
        </button>
      </div>
      <div>TINGS</div>
      {cart.length > 0 &&
        cart.map((item: ProductInterface) => {
          return <CartItem key={item.id} product={item} />
        })}
    </div>
  );
};

export default Sidebar;
