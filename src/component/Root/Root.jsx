import React from "react";
import NavBar from "../Header Layout/NavBar";
import { Outlet } from "react-router-dom";
import FloatingBanner from "../Header Layout/FloatingBanner";
import BannerSection from "../Header Layout/BannerSection";

const Root = () => {
  return (
    <div className=" ">
      <div className=" ">
     
          <div className="container w-11/12  mx-auto mt-4  text-white  px-12  rounded-lg ">
            <NavBar></NavBar>
           
          </div>
        
       
     <div className="">
     <Outlet></Outlet>
     </div>
      </div>
    </div>
  );
};

export default Root;
