import React from 'react';
import bannerImg from '../../assets/banner.jpg'
const FloatingBanner = () => {
    return (
        <div className='w-8/12 border border-white mx-auto h-[500px] backdrop-blur-md  bg-white/20 p-4 rounded-2xl mb-24'>
            <img className='h-[500px] w-full rounded-2xl ' src={bannerImg} alt="" />
        </div>
    );
};

export default FloatingBanner;