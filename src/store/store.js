import { configureStore } from "@reduxjs/toolkit";
import pizzaSlice from "./pizzaSlice"
import cartSlice from "./cartSlice";
import categoriesSlice from "./categoriesSlice";

export default configureStore({
  reducer: {
    pizzaBlock: pizzaSlice,
    cart: cartSlice,
    categories: categoriesSlice,
  }
})