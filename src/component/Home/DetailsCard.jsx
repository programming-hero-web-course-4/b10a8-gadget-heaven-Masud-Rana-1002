import { useContext, useEffect, useState } from "react";
import LevelContext from "../../ContextAPI/Context";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";

import ReactStars from "react-rating-stars-component";
import React from "react";

import { ToastContainer, toast } from 'react-toastify';

const DetailsCard = ({ data }) => {
  const {
    product_id,
    product_title,
    product_image,
    category,
    price,
    description,
    specification,
    availability,
    rating,
    other_field,
  } = data;
  const { detailsCard, setDetailsCard } = useContext(LevelContext);
  const { WishlistDatas, setWishlistData } = useContext(LevelContext);
  const { countCart, setcountCart } = useContext(LevelContext);
  const [heartIconDisabled,  setHeartIconDisabled]= useState(true)
  const setCartData = (data) => {
    setDetailsCard([...detailsCard, data]);
    toast.success('Great choice! It’s now in your cart.')
    
    
  }
  useEffect(()=>{
    setcountCart(detailsCard.length)
  },[detailsCard])
  const sendWishlistData = (WishlistData) => {
    if(heartIconDisabled){
      setWishlistData([...WishlistDatas, WishlistData]);
      setHeartIconDisabled(false)
      toast.success('This item has been added to your Wishlist!')
      
    }else{
      toast.warn('This item is already in your Wishlist!”')
      return
    }

  };
   
const ratingChanged = (newRating) => {
  console.log(newRating);
};

  return (
    <div className="w-8/12  border -mt-48 border-white mx-auto  bg-white py-8 px-4 rounded-2xl mb-24">
      <div className="flex lg:flex-row flex-col items-center lg:items-start gap-7">
        <div className="w-4/12">
          <img src={product_image} alt="" />
        </div>
        <div className="space-y-3">
          <h4 className="text-2xl font-bold">{product_title}</h4>
          <p className="font-semibold text-xl text-[#09080FCC]">
            Price:$ {price}
          </p>
          <p className="text-green-800 bg-green-50 py-2 px-3 rounded-full border border-green-900 mt-4 inline-block text-sm font-medium ">
            {availability ? "In Stock" : "Stock Out"}
          </p>
          <p className="text-[#09080F99] text-lg max-w-xl">{description}</p>
          <div>
            <p className="text-lg font-bold">Specification:</p>
            {specification.map((list, index) => (
              <li key={index} className="list-decimal text-[#09080F99] text-lg">
                {list}
              </li>
            ))}
          </div>
          <div>
            <p>Rating ⭐:</p>
         <div className="flex items-center  gap-2">
             {/* Rating  */}
             <ReactStars
              count={5}
              onChange={ratingChanged

              }
              size={24}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
            {/*Rating   */}
            <p className="bg-card-bg  w-12 h-10 rounded-full flex items-center justify-center text-sm font-medium text-[#09080FCC]">
              {rating}
            </p>
         </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCartData(data)}
             
              className="text-white py-2 px-7 bg-violetPrimary rounded-full text-lg font-bold "
            >
              Add To Card
            </button>
            <div  onClick={()=> sendWishlistData(data) } className= {`${heartIconDisabled ===true ? '' : 'disabled:opacity-75 bg-gray-300 text-white '} w-12 h-12 rounded-full border flex justify-center items-center text-6xl p-1 cursor-pointer`}>
              <CiHeart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
