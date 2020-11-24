import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import shopCatalogueReducer from "./shopCatalogueReducer";
import cartReducer from "./cartReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], // ie things to persist
};

const rootReducer = combineReducers({
  catalogue: shopCatalogueReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
