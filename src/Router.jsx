import { createBrowserRouter } from "react-router-dom";
import Root from "./component/Root/Root";

import Home from "./component/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path:"/",
            element: <Home></Home>,
            loader: ()=> fetch('./../public/productData.json') 
        }
      ]
    },
  ]);
 export default router