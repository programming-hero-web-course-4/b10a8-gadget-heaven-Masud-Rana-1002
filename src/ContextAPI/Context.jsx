import React, {useContext, useState} from "react";
import LevelContext from "./Context";
const UserContext = ({children})=>{
const [productDetails, setProductDetails] = useState([])
const [detailsCard, setDetailsCard] = useState([])
const [ WishlistDatas, setWishlistData ] = useState([]);
const [countCart, setcountCart] = useState(0);
const [sentTotalPriceModal, setsentTotalPriceModal]  =useState (0)
return(
    <LevelContext.Provider value={ {sentTotalPriceModal, setsentTotalPriceModal, WishlistDatas, setWishlistData , detailsCard, setDetailsCard , countCart, setcountCart, productDetails, setProductDetails}}>
       {children}
    </LevelContext.Provider>
)
}
export default UserContext