import { useLoaderData } from "react-router-dom";
import HomeCard from "./HomeCard";

const Home = () => {
  const productData = useLoaderData();
 
  return (
    <div className="w-full">
      <h2 className="text-center text-4xl font-bold mb-12">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="space-x-6 flex items-start ">
        <div className="bg-green-200 w-3/12">
          <button className="text-violetPrimary py-2 px-7 bg-white rounded-2xl text-xl font-bold ">
            Shop Now
          </button>
        </div>
        <div className="w-9/12 grid grid-cols-3 gap-4">
       { productData.map(data =>  <HomeCard key={data.product_id} data={data}></HomeCard>)}
        </div>
      </div>
    </div>
  );
};

export default Home;
