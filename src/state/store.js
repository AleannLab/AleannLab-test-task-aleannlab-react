import { configureStore } from "@reduxjs/toolkit";
import catalogReducer from "./catalog/slice";
import cartReducer from "./cart/slice";

export default configureStore({
  devTools: true,
  preloadedState: {},
  reducer: {
    catalog: catalogReducer,
    cart: cartReducer,
  },
});
