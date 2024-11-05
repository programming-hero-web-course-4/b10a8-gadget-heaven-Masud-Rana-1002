import React from "react";
import NavBar from "../Header Layout/NavBar";
import { Outlet } from "react-router-dom";
import FloatingBanner from "../Header Layout/FloatingBanner";
import BannerSection from "../Header Layout/BannerSection";
import Footer from "../Footer/Footer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "../modal/Modal";


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
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Modal></Modal>
    </div>
  );
};

export default Root;
