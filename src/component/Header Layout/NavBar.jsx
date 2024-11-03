import { BsCart3 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { Link, NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  const {pathname} = useLocation()
 
  const navManu = (
    <div className="space-x-12 font-bold">
      <NavLink>Home</NavLink>
      <NavLink>Statistics</NavLink>
      <NavLink>Dashboard</NavLink>
    </div>
  );
  return (
    <nav>
      <div className={`navbar ${pathname == '/'? 'text-white':'text-black'}`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navManu}
            </ul>
          </div>
          <Link className="btn btn-ghost text-xl font-bold">Gadget Heaven</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navManu}</ul>
        </div>
        <div className="navbar-end text-xl space-x-4"><span className="bg-white text-black p-2 w-10 h-10 rounded-full flex items-center justify-center ">{<BsCart3 />}</span><span className="bg-white text-black p-2 w-10 h-10 rounded-full flex items-center justify-center ">{ <CiHeart />}</span></div>
      </div>
    </nav>
  );
};

export default NavBar;
