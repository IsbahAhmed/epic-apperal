import persistReducer from "redux-persist/es/persistReducer";
import {
  ADD_TO_WISHLIST,
  CLEAR_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from "./wishlistConstants";
import storage from "redux-persist/lib/storage";

const initialState = {
  wishlistItems: [],
};
const wishlistReducer = persistReducer(
  { storage, key: "wishlist", whitelist: ["wishlistItems"] },
  (state = initialState, actions) => {
    const { type, payload } = actions;

    switch (type) {
      case ADD_TO_WISHLIST:
        const check = state.wishlistItems.some(
          ({ productId }) => productId === payload.wishlistObj.productId
        );
        if (check) return state;
        return {
          ...state,
          wishlistItems: [...state.wishlistItems, payload.wishlistObj],
        };
      case REMOVE_FROM_WISHLIST:
        var filtered = state.wishlistItems.filter(
          ({ productId }) => productId !== payload.productId
        );
        return {
          wishlistItems: filtered,
        };
      case CLEAR_WISHLIST:
        return {
          ...state,
          wishlistItems: [],
        };
      default:
        return state;
    }
  }
);
export default wishlistReducer;
