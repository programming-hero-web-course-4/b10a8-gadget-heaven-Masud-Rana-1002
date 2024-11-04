import React from "react";
import NavBar from "../Header Layout/NavBar";
import { Outlet } from "react-router-dom";
import FloatingBanner from "../Header Layout/FloatingBanner";
import BannerSection from "../Header Layout/BannerSection";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div className=" ">
      <div className=" ">
     
          <div className="container w-11/12  mx-auto   text-white  px-12  rounded-lg ">
            <NavBar></NavBar>
           
          </div>
        
       
     <div className="min-h-[calc(100vh - 518px)]">
     <Outlet></Outlet>
     </div>
     <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
