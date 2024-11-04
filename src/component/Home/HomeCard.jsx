import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import LevelContext from "../../ContextAPI/Context";

const HomeCard = ({ data }) => {
 const { product_id, product_title, product_image, category, price, description, specification, availability, rating, other_field} = data
 const {productDetails, setProductDetails} = useContext(LevelContext)
  const handelData =(datas)=>{
    if(data){
      setProductDetails([datas])

    }else{
      return
    }
  }

  return (
    <div>
      <div className="card bg-white  shadow-sm p-5 space-y-6 ">
        <figure className="h-44 bg-card-bg rounded-md p-2">
          <img
          className="h-full"
            src={product_image}
            alt="Shoes"
          />
        </figure>
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">{product_title}</h2>
          <p className="text-[#09080F99] text-xl font-semibold">Price:{price}k</p>
          <div className="">
            <span className="w-40  flex items-center justify-center bg-gradient-to-t p-px from-violetPrimary to-[#c264c4] rounded-full">

            <Link onClick={()=>handelData(data)} to='/ViewDetails' className="w-full text-lg font-semibold text-violetPrimary p-3 rounded-full border  bg-white">View Details</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
