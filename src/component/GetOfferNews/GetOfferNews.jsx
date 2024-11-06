import React from "react";
import bannerImg from "../../assets/10780040_19197970-min.jpg";
const GetOfferNews = () => {
  return (
    <div>
      <div className="bg-violetPrimary w-full">
        <div className="flex container w-11/12 flex-col items-center  max-w-2xl mx-auto space-y-32 pt-12 pb-20">
          <div className="text-center text-white ">
            <h2 className="font-bold text-3xl">Get Offer News</h2>
            <p>
              Stay updated with the latest! Subscribe to our newsletter for
              exclusive insights, offers, and updates delivered straight to your
              inbox.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row rounded-lg  border justify-around p-4  items-center w-8/12 mt-4 mx-auto bg-white shadow-md ">
        <div className="w-4/12">
          <img src={bannerImg} alt="" />
        </div>
        <div className="space-y-8  p-4 rounded-2xl mb-24">
          <h3 className="text-4xl font-bold">Subscribe to our Newsletter</h3>
          <p className="text-gray-600 font-medium">
            Be the first to get exclusive offers and the latest news
          </p>
          <div className="space-y-4 ">
            <input
              type="text"
              placeholder="Enter your email address"
              className="input input-bordered input-primary w-full "
            />
            <div className="">
              <span className="  flex items-center justify-center bg-gradient-to-t p-px from-violetPrimary to-[#c264c4] rounded-full">
                <button className="w-full text-lg font-semibold text-violetPrimary p-3 rounded-full border  bg-white">
                  Subscribe
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetOfferNews;
