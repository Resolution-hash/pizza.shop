import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    totalPrice: 520,
    quantity: 3,
  }
})

export default cartSlice.reducer