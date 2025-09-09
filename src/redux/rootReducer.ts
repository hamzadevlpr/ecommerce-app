import { combineReducers } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import favoriteSlice from "./favoriteSlice";

const rootReducer = combineReducers({
  productSlice,
  cartSlice,
  favoriteSlice
});


export default rootReducer;
