import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Router from './Router.jsx'

import router from './Router.jsx'
import {
RouterProvider,
} from "react-router-dom";
import Context from './ContextAPI/Context.jsx';

createRoot(document.getElementById('root')).render(
<Context>
<StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
</Context>
)
