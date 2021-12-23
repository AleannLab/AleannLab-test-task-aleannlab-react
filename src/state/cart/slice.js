import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const { product, quantity = 1 } = action.payload;
      state.items.push({ product, quantity });
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
