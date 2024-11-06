import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Router from './Router.jsx'
import { HelmetProvider } from 'react-helmet-async';
import router from './Router.jsx'
import {
RouterProvider,
} from "react-router-dom";
import Context from './ContextAPI/Context.jsx';


createRoot(document.getElementById('root')).render(
  <HelmetProvider>
<Context>
<StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
</Context>
  </HelmetProvider>
)
