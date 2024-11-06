import { createBrowserRouter } from "react-router-dom";
import Root from "./component/Root/Root";

import Home from "./component/Home/Home";
import ViewDetailsCard from "./component/Home/ViewDetailsCard";
import FloatingBanner from "./component/Header Layout/FloatingBanner";
import BannerSection from "./component/Header Layout/BannerSection";
import Dashboard from "./component/Dashboard/Dashboard";
import Statistics from "./component/Statistics/Statistics";
import Error from "./component/ErrorPage/Error";
import App from "./component/Statistics/Statistics";
import GetOfferNews from "./component/GetOfferNews/GetOfferNews";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
            path:"/",
            element: <Home></Home>,
            loader: ()=> fetch('../productData.json') ,
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
          path: '/Dashboard',
          element: <Dashboard></Dashboard>,
        },
        {
            path:"/Statistics",
            element: <App></App>,
            loader: ()=> fetch('../productData.json')
        },
        {
          path:"/ViewDetails",
          element: <ViewDetailsCard></ViewDetailsCard>
        },
        {
          path:"/GetOfferNews",
          element: <GetOfferNews></GetOfferNews>
        }
      ]
    },
  ]);
 export default router