import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { ADD_TO_CART, CHANGE_QUANTITY, CLEAR_CART, REMOVE_FROM_CART } from "./cartConstants";

const initialState = {
  cartItems: [],
};

const cartReducer = persistReducer(
  { storage, key: "root", whitelist: ["cartItems"] },
  (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case ADD_TO_CART:
        const check = state.cartItems.some(
          ({ productId }) => productId === payload.cartObj.productId
        );
        // var filtered = state.cartItems.filter(({productId})=> productId !== payload.cartObj.productId);
        var arrayOfItems = [];
        if (check) {
          arrayOfItems = state.cartItems.map((el) => {
            if (el.productId === payload.cartObj.productId) {
              return {
                ...el,
                quantity:
                  Number(el.quantity) + Number(payload.cartObj.quantity),
              };
            }
            return el;
          });
        } else {
          arrayOfItems = [...state.cartItems, payload.cartObj];
        }

        return {
          cartItems: arrayOfItems,
        };
      case REMOVE_FROM_CART:
        var filtered = state.cartItems.filter(
          ({ productId }) => productId !== payload.productId
        );
        return {
          cartItems: filtered,
        };
      case CHANGE_QUANTITY:
          var arrayOfItems = state.cartItems.map((el)=> {
            if(el.productId === payload.productId){
              return {
                ...el,
                quantity:payload.quantity
              }
             
            }
            return el
          });
          return {
            ...state,cartItems:arrayOfItems
          }
      case CLEAR_CART:
        return {
          cartItems: [],
        };
      default:
        return state;
    }
  }
);
export default cartReducer;
