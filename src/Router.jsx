import { createBrowserRouter } from "react-router-dom";
import Root from "./component/Root/Root";
import BannerSection from "./component/Header Layout/BannerSection";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path:"/",
            // element: <BannerSection></BannerSection>,
        }
      ]
    },
  ]);
 export default router