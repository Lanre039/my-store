import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "../reducers/cart";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], // ie things to persist
};

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
