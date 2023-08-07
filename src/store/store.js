import { configureStore } from "@reduxjs/toolkit";
import pizzaSlice from "./pizzaSlice"
import cartSlice from "./cartSlice";

export default configureStore({
  reducer: {
    pizzaBlock: pizzaSlice,
    cart: cartSlice,
  }
})