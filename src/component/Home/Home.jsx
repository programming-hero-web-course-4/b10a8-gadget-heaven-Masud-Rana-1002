import { Link,  Outlet, useLoaderData } from "react-router-dom";
import HomeCard from "./HomeCard";
import { useEffect, useState } from "react";

const Home = () => {
  const productData = useLoaderData();
  const [defaultShow, setdefaultShow] = useState({
    numItemShow:9,
    toggleBtnCondition : false
  })
  const [sortByCategories , setSortByCategories ]=useState([])
  const showData = [...productData].slice(0, defaultShow.numItemShow)
useEffect(()=>{
  setSortByCategories(showData)
},[defaultShow])
const [sideBarBtnStyle, setSideBarBtnStyle] = useState('')

 const displayProductByCategori =(CategoriName)=>{
    if(CategoriName=== 'All Product'){
      setSideBarBtnStyle('All Product')
      setdefaultShow({
        numItemShow :productData.length,
        toggleBtnCondition : !defaultShow.toggleBtnCondition
      })

    }else if(CategoriName === 'Laptops'){
      setSideBarBtnStyle('Laptops')
      const laptops = productData.filter((p)=> p.category === 'Laptops' )
      setSortByCategories(laptops)
    }else if(CategoriName === 'Phones'){
      setSideBarBtnStyle('Phones')
      const phones = productData.filter((p)=> p.category === 'Phones' )
      setSortByCategories(phones)
    }else if(CategoriName === 'Accessories'){
      setSideBarBtnStyle('Accessories')
      const Accessories = productData.filter((p)=> p.category === 'Accessories' )
      setSortByCategories(Accessories)
    }
    else if(CategoriName === 'Smart Watches'){
      setSideBarBtnStyle('Smart Watches')
      const SmartWatchess = productData.filter((p)=> p.category === 'Smart Watches' )
      setSortByCategories(SmartWatchess )
    }
 }

  return (
    
    <div className="container w-11/12  mx-auto">
      <Outlet></Outlet>
      <h2 className="text-center text-4xl font-bold mb-12">
        Explore Cutting-Edge Gadgets
      </h2>
      {/* text-white bg-violetPrimary  font-bold  */}
      <div className="space-x-6 flex items-start ">
        <div className="bg-white w-3/12 flex flex-col items-center justify-center space-y-6 py-6 rounded-lg border ">
          <Link onClick={()=> displayProductByCategori('All Product')} className={ `${sideBarBtnStyle=== 'All Product'? 'text-white bg-violetPrimary  font-bold':''} text-[#09080F99] py-2 px-7 bg-[#f2f2f3] rounded-full text-lg font-medium w-44`}>
          All Product
          </Link>
          <Link onClick={()=> displayProductByCategori('Laptops')} className={ `${sideBarBtnStyle=== 'Laptops'? 'text-white bg-violetPrimary  font-bold':''} text-[#09080F99] py-2 px-7 bg-[#f2f2f3] rounded-full text-lg font-medium w-44`}>
          Laptops
          </Link>
          <Link onClick={()=> displayProductByCategori('Phones')}  className={ `${sideBarBtnStyle=== 'Phones'? 'text-white bg-violetPrimary  font-bold':''} text-[#09080F99] py-2 px-7 bg-[#f2f2f3] rounded-full text-lg font-medium w-44`}>
          Phones
          </Link>
          <Link onClick={()=> displayProductByCategori('Accessories')}className={ `${sideBarBtnStyle=== 'Accessories'? 'text-white bg-violetPrimary  font-bold':''} text-[#09080F99] py-2 px-7 bg-[#f2f2f3] rounded-full text-lg font-medium w-44`}>
          Accessories
          </Link>
          <Link onClick={()=> displayProductByCategori('Smart Watches')} className={ `${sideBarBtnStyle=== 'Smart Watches'? 'text-white bg-violetPrimary  font-bold':''} text-[#09080F99] py-2 px-7 bg-[#f2f2f3] rounded-full text-lg font-medium w-44`}>
          Smart Watches
          </Link>
          <Link onClick={()=> displayProductByCategori(' MacBook')} className={ `${sideBarBtnStyle=== 'MacBook'? 'text-white bg-violetPrimary  font-bold':''} text-[#09080F99] py-2 px-7 bg-[#f2f2f3] rounded-full text-lg font-medium w-44`}>
          MacBook
          </Link>
          <Link onClick={()=> displayProductByCategori('Iphone')} className={ `${sideBarBtnStyle=== 'Iphone'? 'text-white bg-violetPrimary  font-bold':''} text-[#09080F99] py-2 px-7 bg-[#f2f2f3] rounded-full text-lg font-medium w-44`}>
          Iphone
          </Link>
        </div>
        <div className="w-9/12 grid grid-cols-3 gap-4">
          { sortByCategories.map(data =>  <HomeCard key={data.product_id} data={data}></HomeCard>)}
        </div>
      </div>
      
    </div>
  );
};

export default Home;
