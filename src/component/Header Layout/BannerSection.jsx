import React from "react";
import { Outlet } from "react-router-dom";


const BannerSection = () => {
  return (
    <div>
      <div className="hero pt-12 pb-52 bg-violetPrimary text-white -mt-16 container mx-auto  ">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-5xl font-bold max-w-4xl mx-auto">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
            <p className="py-6 max-w-3xl mx-auto">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
            </p>
            <button className="text-violetPrimary py-4 px-7 bg-white rounded-full text-xl font-bold ">Shop Now</button>
          </div>
        </div>
      </div>
    <Outlet></Outlet>
    </div>
  );
};

export default BannerSection;
