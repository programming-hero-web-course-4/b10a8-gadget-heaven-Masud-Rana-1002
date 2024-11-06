import React from 'react';
import bannerImg from '../../assets/banner.jpg'
const FloatingBanner = () => {
    return (
        <div className='w-8/12 border -mt-48 border-white mx-auto lg:h-[500px] backdrop-blur-md  bg-white/20 p-4 rounded-2xl mb-24'>
            <img className='lg:h-[500px] h-[300px] w-full rounded-2xl ' src={bannerImg} alt="" />
        </div>
    );
};

export default FloatingBanner;