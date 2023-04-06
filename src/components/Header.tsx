import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";
import { CartContext } from "src/contexts/CartContext";
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });

    return () => {
    };
  }, []);

  return (
    <header className={`${isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"} fixed w-full z-10 transition-all`}>
      <div className="container mx-auto flex h-full items-center justify-between">
        <Link to={"/"}>
          <div>
            <img className="w-[40px]" src={Logo} alt="" />
          </div>
        </Link>
        <button className="relative flex" onClick={() => setIsOpen(!isOpen)}>
          <BsBag className="text-2xl" />
          <div className="absolute -right-2 -bottom-2 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-red-500 text-[12px] text-white">
            {itemAmount}
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
