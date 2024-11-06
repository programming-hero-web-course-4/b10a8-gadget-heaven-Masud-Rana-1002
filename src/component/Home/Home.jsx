import { Link,  Outlet, useLoaderData } from "react-router-dom";
import HomeCard from "./HomeCard";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

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
    else if(CategoriName === 'MacBook'){
      setSideBarBtnStyle('MacBook')
      const MacBook = productData.filter((p)=> p.brand === 'MacBook' )
      setSortByCategories(MacBook )
    }
    else if(CategoriName === 'Iphone'){
      setSideBarBtnStyle('Iphone')
      const iPhone = productData.filter((p)=> p.brand === 'iPhone' )
      setSortByCategories(iPhone)
    }
    else if(CategoriName === 'Camera'){
      setSideBarBtnStyle('Camera')
      const Camera = productData.filter((p)=> p.category === 'Camera' )
      setSortByCategories(Camera)
    }
 }

  return (
    
    <div className="container w-11/12  mx-auto">
     <Helmet>
     <title>Gadgets | Gadget Heaven</title>
    
     </Helmet>
      <Outlet></Outlet>
 
      <h2 className="text-center text-2xl md:text-4xl font-bold mb-12">
        Explore Cutting-Edge Gadgets
      </h2>
      {/* text-white bg-violetPrimary  font-bold  */}
      <div className="space-x-6 flex  items-start flex-col md:flex-row gap-6 md:gap-0">
        <div className="bg-white w-full md:w-6/12 lg:w-3/12 flex flex-col items-center justify-center space-y-6 py-6 rounded-lg border ">
          <button onClick={()=> displayProductByCategori('All Product')} className={ `${sideBarBtnStyle=== 'All Product'? 'text-white bg-violetPrimary  font-bold':''} text-[#09080F99] py-2 px-7 bg-[#f2f2f3] rounded-full text-lg font-medium w-56`}>
          All Product
          </button>
          <button onClick={()=> displayProductByCategori('Laptops')} className={ `${sideBarBtnStyle=== 'Laptops'? 'text-white bg-violetPrimary  font-bold':''} text-[#09080F99] py-2 px-7 bg-[#f2f2f3] rounded-full text-lg font-medium w-56`}>
          Laptops
          </button>
          <button onClick={()=> displayProductByCategori('Phones')}  className={ `${sideBarBtnStyle=== 'Phones'? 'text-white bg-violetPrimary  font-bold':''} text-[#09080F99] py-2 px-7 bg-[#f2f2f3] rounded-full text-lg font-medium w-56`}>
          Phones
          </button>
          <button onClick={()=> displayProductByCategori('Accessories')}className={ `${sideBarBtnStyle=== 'Accessories'? 'text-white bg-violetPrimary  font-bold':''} text-[#09080F99] py-2 px-7 bg-[#f2f2f3] rounded-full text-lg font-medium w-56`}>
          Accessories
          </button>
          <button onClick={()=> displayProductByCategori('Smart Watches')} className={ `${sideBarBtnStyle=== 'Smart Watches'? 'text-white bg-violetPrimary  font-bold':''} text-[#09080F99] py-2 px-7 bg-[#f2f2f3] rounded-full text-lg font-medium w-56`}>
          Smart Watches
          </button>
          <button onClick={()=> displayProductByCategori('MacBook')} className={ `${sideBarBtnStyle=== 'MacBook'? 'text-white bg-violetPrimary  font-bold':''} text-[#09080F99] py-2 px-7 bg-[#f2f2f3] rounded-full text-lg font-medium w-56`}>
          MacBook
          </button>
          <button onClick={()=> displayProductByCategori('Iphone')} className={ `${sideBarBtnStyle=== 'Iphone'? 'text-white bg-violetPrimary  font-bold':''} text-[#09080F99] py-2 px-7 bg-[#f2f2f3] rounded-full text-lg font-medium w-56`}>
          Iphone
          </button>
          <button onClick={()=> displayProductByCategori('Camera')} className={ `${sideBarBtnStyle=== 'Camera'? 'text-white bg-violetPrimary  font-bold':''} text-[#09080F99] py-2 px-7 bg-[#f2f2f3] rounded-full text-lg font-medium w-56`}>
          Camera
          </button>
        </div>
        {
          sortByCategories.length <= 0? <div className=" flex w-full  items-center justify-center flex-col " ><p className="text-4xl font-bold text-violet-600">No Data Found</p></div>:  <div className="w-11/12 md:w-9/12 mx-auto border grid grid-cols-1 lg:grid-cols-3 gap-4">
        
          { sortByCategories.map(data =>  <HomeCard key={data.product_id} data={data}></HomeCard>)}
        </div>
        }
       
      </div>
      
    </div>
  );
};

export default Home;
