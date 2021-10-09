import { combineReducers } from "redux";
import cartReducer from "./cartReducer/cartReducer";
import productsReducer from "./productsReducer/productsReducer";
import userReducer from "./userReducer/userReducer";
import wishlistReducer from "./wishlistReducer/wishlistReducer";


const rootReducer = combineReducers({
    products:productsReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    user:userReducer
})
export default rootReducer;