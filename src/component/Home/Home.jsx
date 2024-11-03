import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import HomeCard from "./HomeCard";
import { useEffect, useState } from "react";

const Home = () => {
  const productData = useLoaderData();
  const [defaultShow, setdefaultShow] = useState({
    numItemShow:9,
    toggleBtnCondition : false
  })
  const [x , setx ]=useState([])
  const showData = [...productData].slice(0, defaultShow.numItemShow)
useEffect(()=>{
  setx(showData)
},[defaultShow])

//  const defaultShowBtn = ()=>{
//   if(defaultShow.toggleBtnCondition === false){
//     setdefaultShow({
//       numItemShow :productData.length,
//       toggleBtnCondition : !defaultShow.toggleBtnCondition
//     })
//   }else{
//     setdefaultShow({
//       numItemShow:9,
//       toggleBtnCondition : !defaultShow.toggleBtnCondition
//     })
//   }
//  }
 const displayProductByCategori =(CategoriName)=>{
    if(CategoriName=== 'All Product'){
      setdefaultShow({
        numItemShow :productData.length,
        toggleBtnCondition : !defaultShow.toggleBtnCondition
      })
    }else if(CategoriName === 'Laptops'){
      const laptops = productData.filter((p)=> p.category === 'Laptops' )
      setx(laptops)
    }else if(CategoriName === 'Phones'){
      const phones = productData.filter((p)=> p.category === 'Phones' )
      setx(phones)
    }else if(CategoriName === 'Accessories'){
      const Accessories = productData.filter((p)=> p.category === 'Accessories' )
      setx(Accessories)
    }
    else if(CategoriName === 'Smart Watches'){
      const SmartWatchess = productData.filter((p)=> p.category === 'Smart Watches' )
      setx(SmartWatchess )
    }
 }
// console.log(defaultShow.toggleBtnCondition)
  return (
    
    <div className="container w-11/12  mx-auto">
      <Outlet></Outlet>
      <h2 className="text-center text-4xl font-bold mb-12">
        Explore Cutting-Edge Gadgets
      </h2>
    
      <div className="space-x-6 flex items-start ">
        <div className="bg-white w-3/12 flex flex-col items-center justify-center space-y-6 py-6 rounded-lg border ">
          <NavLink onClick={()=> displayProductByCategori('All Product')} className="text-[#09080F99] py-2 px-7 bg-[#f2f2f3] rounded-full text-lg font-medium w-44">
          All Product
          </NavLink>
          <NavLink onClick={()=> displayProductByCategori('Laptops')} className="text-[#09080F99] px-6 py-3  bg-[#f2f2f3] rounded-full  text-lg font-medium w-48">
          Laptops
          </NavLink>
          <NavLink onClick={()=> displayProductByCategori('Phones')}  className="text-[#09080F99] px-6 py-3  bg-[#f2f2f3] rounded-full  text-lg font-medium w-48 ">
          Phones
          </NavLink>
          <NavLink onClick={()=> displayProductByCategori('Accessories')} className="text-[#09080F99] px-6 py-3  bg-[#f2f2f3] rounded-full  text-lg font-medium w-48">
          Accessories
          </NavLink>
          <NavLink onClick={()=> displayProductByCategori('Smart Watches')} className="text-[#09080F99] px-6 py-3  bg-[#f2f2f3] rounded-full  text-full font-bold w-48">
          Smart Watches
          </NavLink>
          <NavLink onClick={()=> displayProductByCategori(' MacBook')} className="text-[#09080F99] px-6 py-3  bg-[#f2f2f3] rounded-full  text-lg font-medium w-48">
          MacBook
          </NavLink>
          <NavLink onClick={()=> displayProductByCategori('Iphone')} className="text-[#09080F99] px-6 py-3  bg-[#f2f2f3] rounded-full  text-lg font-medium w-48">
          Iphone
          </NavLink>
        </div>
        <div className="w-9/12 grid grid-cols-3 gap-4">
       {x.map(data =>  <HomeCard key={data.product_id} data={data}></HomeCard>)}
        </div>
      </div>
      
    </div>
  );
};

export default Home;
