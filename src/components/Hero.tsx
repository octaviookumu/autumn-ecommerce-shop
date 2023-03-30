import React from "react";
import WomanImg from "../img/woman_hero.png";

const Hero = () => {
  return (
    <section className="h-[800px] bg-pink-200 bg-hero bg-cover bg-no-repeat bg-center py-24">
      <div className="container mx-auto flex h-full justify-around">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase" >
            <div className="w-10 h-[2px] bg-red-500 mr-3" ></div>New Trend
          </div>
          <h1 className="text-[4rem] leading-[1.1] font-light mb-4" >AUTUMN SALE STYLISH <br />
            <span className="font-semibold" >WOMENS</span>
          </h1>
        </div>
        <div className="hidden lg:block" >
          <img src={WomanImg} alt="Woman Model" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
