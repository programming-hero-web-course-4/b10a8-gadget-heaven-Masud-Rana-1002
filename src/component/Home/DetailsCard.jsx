import { useContext } from "react";
import LevelContext from "../../ContextAPI/Context";

const DetailsCard = ({data}) => {
    const { product_id, product_title, product_image, category, price, description, specification, availability, rating, other_field} = data
  
  return (
    <div className="w-8/12 border -mt-48 border-white mx-auto h-[500px] bg-white p-4 rounded-2xl mb-24">
      <div className="flex">
        <div className="w-4/12">
            <img src={product_image} alt="" />
        </div>
        <div>
            <h4>{product_title}</h4>
            <p>Price:$ {price}</p>
            <span>{availability ? 'In Stock' :'Stock Out'}</span>
            <p>{description}</p>
            <div>
                <p>Specification:</p>
                {specification.map(list => <li className="list-decimal">{list}</li>)}
            </div>
            <div>
                <p>Rating ⭐:</p>
               <p>{rating}</p>
            </div>
            <button className="text-white py-2 px-7 bg-violetPrimary rounded-full text-lg font-bold ">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
