import { createSlice, createAsyncThunk, isRejectedWithValue, current } from "@reduxjs/toolkit"
import api from "../api"
export const getPizzas = createAsyncThunk(
  'getPizzas/pizzaSlice',

  async () => {

    try {
      const response = await api.fetchPizzas();
      if (response.status >= 400) {
        console.error("Server error:", response.status)
        return isRejectedWithValue("Server error")
      }

      return response.data
    } catch (error) {
      console.log("Error:", error);
      return isRejectedWithValue({ message: 'Error' })
    }
  }
)

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState: {
    pizzas: [],
    isPending: null,
    error: null

  },
  reducers: {
    incrementPizzaCount: (state, { payload: currentId }) => {
      console.log(current(state));

      state.pizzaItems = state.pizzas.map(p => ({
        ...p,
        count: p.id === currentId ? p.count += 1 : p.count
      }))
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPizzas.pending, (state) => {
        state.isPending = true
      })
      .addCase(getPizzas.fulfilled, (state, { payload }) => {
        state.isPending = false
        state.pizzas = payload
      })
      .addCase(getPizzas.rejected, (state, action) => {
        state.status = false
        state.error = action.payload.message
        console.log(state.error);

      })
  }
})

export const { incrementPizzaCount } = pizzaSlice.actions;
export default pizzaSlice.reducer