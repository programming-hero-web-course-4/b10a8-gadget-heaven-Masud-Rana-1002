import React, {useState} from "react";
import LevelContext from "./Context";
const UserContext = ({children})=>{
const [productDetails, setProductDetails] = useState([])
return(
    <LevelContext.Provider value={{productDetails, setProductDetails}}>
       {children}
    </LevelContext.Provider>
)
}
export default UserContext