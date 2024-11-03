import { createBrowserRouter } from "react-router-dom";
import Root from "./component/Root/Root";

import Home from "./component/Home/Home";
import ViewDetailsCard from "./component/Home/ViewDetailsCard";
import FloatingBanner from "./component/Header Layout/FloatingBanner";
import BannerSection from "./component/Header Layout/BannerSection";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path:"/",
            element: <Home></Home>,
           
           
            loader: ()=> fetch('./../public/productData.json') ,
            children:[{
              path:"/",
              element:  <BannerSection></BannerSection>,
              children:[
                {
            
                    path:"/",
                    element:  <FloatingBanner></FloatingBanner>,
                
                }
              ]
            },
        
          ]
        },
        {
          
      
        },
        {
            path:"/",
            
      
        },
        {
          path:"/ViewDetails",
          element: <ViewDetailsCard></ViewDetailsCard>
        }
      ]
    },
  ]);
 export default router