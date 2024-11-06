import { useContext, useEffect } from "react";
import { BsCart3 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { Link, NavLink, useLocation } from "react-router-dom";
import LevelContext from "../../ContextAPI/Context";

const NavBar = () => {
  const { WishlistDatas, setWishlistData } = useContext(LevelContext);
  const { countCart, setcountCart } = useContext(LevelContext);

  const { pathname } = useLocation();

  const navManu = (
    <div className="space-x-12 font-bold flex flex-col lg:flex-row">
      <NavLink
        className={` ${pathname == "/" ? "border-b-2 pb-[1px] " : "text-black "}`}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={` ${
          pathname == "/Statistics"
            ? "lg:text-violetPrimary text-white"
            : pathname == "/"
            ? "text-white"
            : "text-black"
        }`}
        to="/Statistics"
      >
        Statistics
      </NavLink>
      <NavLink
        className={` ${
          pathname == "/Dashboard"
            ? "lg:text-violetPrimary text-white"
            : pathname == "/"
            ? "text-white"
            : "text-black"
        }`}
        to="/Dashboard"
      >
        Dashboard
      </NavLink>
    </div>
  );
  return (
    <nav className="">
      <div className={`navbar  ${pathname == "/" ? "" : ""} `}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${ pathname === '/'?'text-white': 'text-violetPrimary' } h-5 w-5 `}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu backdrop-blur-xl text-center  bg-violetPrimary/5 menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navManu}
            </ul>
          </div>
          <Link className={`${ pathname !=='/' ? 'text-black': 'text-white'} btn btn-ghost md:text-xl font-bold`}>Gadget Heaven</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navManu}</ul>
        </div>
        <div className=" navbar-end text-xl space-x-4">
     <div className="relative">
     <span className="bg-white text-black p-2 w-10 h-10 rounded-full flex items-center justify-center ">
           
           {<BsCart3 />}
           <p
           className={` ${
             countCart > 0 ? "bg-violetPrimary" : "bg-h"
           } p-1 rounded-full text-sm absolute -top-2 -right-2 text-white`}
         >
           { countCart > 0 ?  countCart : ""}
         </p>
         </span>
     </div>
         <div className="relative">
         <span className="bg-white text-black p-2 w-10 h-10 rounded-full flex items-center justify-center ">
            {<CiHeart />}{" "}
          </span>
          <p
            className={` ${
              WishlistDatas.length > 0 ? "bg-violetPrimary" : "bg-h"
            } p-1 rounded-full text-sm absolute -top-2 -right-2`}
          >
            {WishlistDatas.length > 0 ? WishlistDatas.length : ""}
          </p>
         </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
