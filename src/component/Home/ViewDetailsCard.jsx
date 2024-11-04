
import { useLocation, useParams } from 'react-router-dom';
import DetailsCard from './DetailsCard';
import { useContext } from "react";
import LevelContext from "../../ContextAPI/Context";
const ViewDetailsCard = () => {
    const {productDetails, setProductDetails} = useContext(LevelContext)

    return (
     <div>
           <div className='bg-violetPrimary w-full'>
          <div className='text-center text-white max-w-2xl mx-auto space-y-3 pt-12 pb-60'>
          <h2 className='font-bold text-3xl'>Product Details</h2>
          <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
          </div>
        </div>
        <div>
            {
                productDetails.map((data)=> <DetailsCard key={data.product_id} data={data}></DetailsCard>)
            }
        </div>
     </div>
    );
};

export default ViewDetailsCard;