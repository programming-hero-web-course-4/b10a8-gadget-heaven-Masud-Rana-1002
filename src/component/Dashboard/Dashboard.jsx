import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import AddCartCard from "./addCartCard";
import LevelContext from "../../ContextAPI/Context";
import { AiOutlineControl } from "react-icons/ai";

const Dashboard = () => {
  const [cardData, setCartData] = useState([]);
  const [showCardData, setshowCardData] = useState([]);
  const [toggol, settoggolbtn] = useState(true);
  const [productPrice, setProductPrice] = useState(0);
  const { countCart, setcountCart } = useContext(LevelContext);
  const { detailsCard, setDetailsCard } = useContext(LevelContext);
  const { WishlistDatas, setWishlistData } = useContext(LevelContext);
  const { sentTotalPriceModal, setsentTotalPriceModal } = useContext(LevelContext);
  // console.log(WishlistDatas)
  // onClick fir toggol Btn
  const cartItem = (id) => {
    if (toggol) {
      settoggolbtn(id);
    } else {
      settoggolbtn(id);
    }
  };
  const sortByPrice = () => {
    const sortedData = [...detailsCard].sort((a, b) =>  b.price - a.price ); // Ascending order
    setCartData(sortedData);
    setDetailsCard(sortedData);
  };

  useEffect(() => {
    const total = detailsCard.reduce((sum, product) => sum + product.price, 0);
    setProductPrice(total);
    setcountCart(detailsCard.length);
    setsentTotalPriceModal(total)
  }, [detailsCard]);

  const purchase =()=>{
    document.getElementById("my_modal_1").showModal()
    setProductPrice(0)
    setcountCart(0)
  

   
  }
  return (
    <div className="min-h-[calc(100 vh - 530px)]">
      <div className="bg-violetPrimary w-full">
        <div className="flex container w-11/12 flex-col items-center  max-w-2xl mx-auto space-y-32 pt-12 pb-20">
          <div className="text-center text-white ">
            <h2 className="font-bold text-3xl">Dashboard</h2>
            <p>
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
          <div className="space-x-3">
            <Link
              onClick={() => cartItem(true)}
              className={`text-lg border border-white px-10 py-4 rounded-full ${
                toggol
                  ? "bg-white text-violetPrimary  font-extrabold"
                  : "bg-transparent text-white font-medium"
              }`}
            >
              Cart
            </Link>
            <Link
              onClick={() => cartItem(false)}
              className={`text-lg border border-white px-10 py-4 rounded-full ${
                !toggol
                  ? "bg-white text-violetPrimary  font-extrabold"
                  : "bg-transparent text-white font-medium"
              }`}
            >
              Wishlist
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between container w-11/12 mx-auto mt-8">
        <div>
          <p className="font-bold text-2xl ">{toggol ? "Cart" : "WishList"}</p>
        </div>
        {toggol ? (
          <div className="flex items-center space-x-3 ">
            <p className="font-bold text-2xl">Total cost: {productPrice}</p>
            <div className="flex gap-2">
              <span className="w-52  flex items-center justify-center bg-gradient-to-t p-px from-violetPrimary to-[#c264c4] rounded-full">
                <button 
                onClick={()=>sortByPrice()}
                className="w-full flex gap-2 items-center justify-center text-lg font-semibold text-violetPrimary p-3 rounded-full border  bg-white">
                  Sort by Price <AiOutlineControl className="text-3xl" />
                </button>
              </span>
              <span className="w-40  flex items-center justify-center  p-px  rounded-full">
                <button onClick={()=>purchase()} className="w-full flex gap-2 items-center justify-center text-lg font-semibold text-white p-3 rounded-full border  bg-gradient-to-t from-violetPrimary to-[#c264c4] ">
                  Purchase
                </button>
              </span>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="space-y-8 mt-8">
        {toggol
          ? detailsCard.map((data) => (
              <AddCartCard key={data.product_id} data={data}></AddCartCard>
            ))
          : WishlistDatas.map((data) => (
              <AddCartCard key={data.product_id} data={data}></AddCartCard>
            ))}
      </div>
    </div>
  );
};

export default Dashboard;
