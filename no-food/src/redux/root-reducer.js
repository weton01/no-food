import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

//reducers
import cartReducer from "./cart/cart-reducer";
import navbarReducer from "./navbar/navbar-reducer";
import userReducer from "./user/user.reducer";
const persistConfig = {
  key: "root",
  storage
};

const rootReducer = combineReducers({
  cart: cartReducer,
  navbar: navbarReducer,
  user: userReducer
});

export default persistReducer(persistConfig, rootReducer);
