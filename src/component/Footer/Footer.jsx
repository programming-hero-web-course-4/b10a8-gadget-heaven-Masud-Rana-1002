import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-white w-full'>
            <div className='container w-11/12 mx-auto text-center py-20 mt-20 '>
                <div className='border-b-2 pb-9 '>
                    <h4 className='text-3xl font-bold '>Gadget Heaven</h4>
                    <p className='font-semibold text-[#09080F99]'>Leading the way in cutting-edge technology and innovation.</p>
                </div>
                <div className='flex md:flex-row flex-col justify-around py-8'>
                    <div className='space-y-3'>
                        <h6 className='font-bold'>Services</h6>
                        <div className='text-[#09080F99] flex flex-col'>
                        <a href="">Product Support</a>
                        <a href="">Order Tracking</a>
                        <a href="">Shipping & Delivery</a>
                        <a href="">Returns</a>
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <h6 className='font-bold'>Company</h6>
                        <div className='text-[#09080F99] flex flex-col'>
                        <a href="">About Us</a>
                        <a href="">Careers</a>
                        <a href="">Contact</a>
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <h6 className='font-bold'>Legal</h6>
                        <div className='text-[#09080F99] flex flex-col'>
                        <a href="">Terms of Service</a>
                        <a href="">Privacy Policy</a>
                        <a href="">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;