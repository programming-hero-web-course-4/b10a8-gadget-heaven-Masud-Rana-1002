import React from 'react';

const AddCartCard = ({data}) => {
    const { product_id, product_title, product_image, category, price, description, specification, availability, rating, other_field} = data
    return (
        <div>
           <div className='flex items-center h-60 shadow-md bg-white rounded-lg w-7/12 mx-auto  p-4 gap-6'>
                <div className='h-[150px] bg-card-bg p-3 rounded-lg'>
                    <img className='h-full' src={product_image} alt="" />
                </div>
              <div className=' flex-1  relative'>
              <div className='space-y-6 '>
                    <h4 className='text-2xl font-semibold mb-3'>{product_title}</h4>
                    {
                        specification.map(s => <span className='text-lg text-[#09080F99]'>{s},</span>)
                    }
                    <p className='text-xl font-semibold'>Price: ${price}</p>
                </div>
                <div className='cursor-pointer right-6 -top-6 absolute flex items-center justify-center w-8 h-8 border border-red-600 rounded-full'>
                    <p className='text-red-600 text-lg'>X</p>
                </div>
              </div>
           </div>
        </div>
    );
};

export default AddCartCard;