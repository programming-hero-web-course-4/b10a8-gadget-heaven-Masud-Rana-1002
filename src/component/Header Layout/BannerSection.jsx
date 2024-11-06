
import { Link, Outlet } from "react-router-dom";


const BannerSection = () => {
 
  return (
    <div>
      <div className="hero rounded-lg pt-20 pb-52 bg-violetPrimary text-white -mt-16 container mx-auto  ">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="md:text-5xl text-2xl font-bold max-w-4xl mx-auto">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
            <p className="py-6 max-w-3xl mx-auto">
            Take your tech to the next level with Gadget Heaven's exclusive accessories collection. From sleek cases to powerful chargers, find everything you need to upgrade your devices with style and reliability. Explore our range and accessorize like a pro!
            </p>
            <Link to='/Dashboard' className="text-violetPrimary py-4 px-7 bg-white rounded-full text-xl font-bold ">Shop Now</Link>
          </div>
        </div>
      </div>
    <Outlet></Outlet>
    </div>
  );
};

export default BannerSection;
