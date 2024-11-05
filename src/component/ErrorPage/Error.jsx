import React from "react";
import errorImg from '../../assets/errror404.png'
import { useRouteError } from "react-router-dom";
const Error = () => {
    const error = useRouteError()


  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
            <div>
                <img src={errorImg} alt="" />
                <h4 className="font-medium text-xl">We cant't seem to find the page you're looking for</h4>
                <p className="text-red-600">{error.statusText}: {error.status}</p>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Error;
