import React, {useContext, useState} from "react";
import LevelContext from "./Context";
const UserContext = ({children})=>{
const [productDetails, setProductDetails] = useState([])
const [detailsCard, setDetailsCard] = useState([])
const [ WishlistDatas, setWishlistData ] = useState([]);
const [countCart, setcountCart] = useState(0);
console.log(countCart)
return(
    <LevelContext.Provider value={ { WishlistDatas, setWishlistData , detailsCard, setDetailsCard , countCart, setcountCart, productDetails, setProductDetails}}>
       {children}
    </LevelContext.Provider>
)
}
export default UserContext