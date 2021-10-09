import { ADD_TO_WISHLIST, CLEAR_WISHLIST, REMOVE_FROM_WISHLIST } from "./wishlistConstants";

export const addToWishlist = (wishlistObj)=>({
    type:ADD_TO_WISHLIST,
    payload:{
        wishlistObj
    }
})

export const removeFromWishlist = (productId)=>({
    type:REMOVE_FROM_WISHLIST,
    payload:{
        productId
    }
})

export const clearWishlist = ()=>({
    type:CLEAR_WISHLIST,
    
})