import { children, createContext, useEffect, useState } from "react";
import propTypes from 'prop-types'
import { food_list } from "../assets/assets";
export const  StoreContext = createContext(null)

const StoreContextProvider=({children})=>{
    const [cartItems,setcartItems]=useState({})
    const addToCart=(itemId)=>{
        if(!cartItems[itemId]){
            setcartItems((prev)=>({...prev,[itemId]:1}));
        }else{
            setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
    const removeFromCarts=(itemId)=>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    }
    // useEffect(()=>{
    //     console.log(cartItems);
    // },[cartItems])

    const getTotalCartAmount =()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = food_list.find((product)=>product._id===item)
                totalAmount = totalAmount + itemInfo.price * cartItems[item]
            }
        }
        return totalAmount;
    }
    const contextValue={
        food_list,
        cartItems,
        setcartItems,
        addToCart,
        removeFromCarts,
        getTotalCartAmount
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {children}

        </StoreContext.Provider>
    )
}
StoreContextProvider.propTypes={
    children:propTypes.node.isRequired
};
export default StoreContextProvider;