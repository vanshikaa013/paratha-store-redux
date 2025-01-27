import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from "./menu/MenuSlice";
import cartReducer from "./Cart/CartSlice"

const store = configureStore({
  reducer: {
    menu: MenuReducer,
    cart : cartReducer
  },
});

export default store;
