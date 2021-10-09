import { ADD_TO_CART, CHANGE_QUANTITY, CLEAR_CART, REMOVE_FROM_CART } from "./cartConstants";

export const addToCart = (cartObj)=>({
    type:ADD_TO_CART,
    payload:{
        cartObj
    }
})
export const removeFromCart = (productId)=>({
    type:REMOVE_FROM_CART,
    payload:{
        productId
    }
})
export const changeQuantity = (productId,quantity) => ({
    type:CHANGE_QUANTITY,
    payload:{
        productId,
        quantity
    }
})
export const clearCart = ()=>({
    type:CLEAR_CART
})