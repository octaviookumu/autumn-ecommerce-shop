import React from "react";
import { Link } from "react-router-dom";
import WomanImg from "../img/woman_hero.png";


const Hero = () => {
  return (
    <section className="h-[800px] bg-hero bg-cover bg-center bg-no-repeat py-24">
      <div className="container mx-auto flex h-full justify-around">
        <div className="flex flex-col justify-center">
          <div className="flex items-center font-semibold uppercase">
            <div className="mr-3 h-[2px] w-10 bg-red-500"></div>New Trend
          </div>
          <h1 className="mb-4 text-[4rem] font-light leading-[1.1]">
            AUTUMN SALE STYLISH <br />
            <span className="font-semibold">COLLECTION</span>
          </h1>
          <Link to={'/'} className="self-start uppercase font-semibold border-b-2 border-primary" >
            Discover More
          </Link>
        </div>
        <div className="hidden lg:block">
          <img src={WomanImg} alt="Woman Model" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
