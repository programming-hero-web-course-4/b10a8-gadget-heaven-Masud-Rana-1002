import React from "react";
import NavBar from "../Header Layout/NavBar";
import { Outlet } from "react-router-dom";
import FloatingBanner from "../Header Layout/FloatingBanner";
import BannerSection from "../Header Layout/BannerSection";

const Root = () => {
  return (
    <div className="container w-11/12  mx-auto mt-4 ">
      <div className=" ">
     
          <div className=" text-white bg-violetPrimary px-12  rounded-lg">
            <NavBar></NavBar>
            <BannerSection></BannerSection>
          </div>
          <div className="-mt-48 ">
            <FloatingBanner></FloatingBanner>
          </div>
       
     <div className="px-12">
     <Outlet></Outlet>
     </div>
      </div>
    </div>
  );
};

export default Root;
