import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Slice
const mensClothingSlice = createSlice({
  name: 'mensClothing',
  initialState: {
    products: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setProducts, setStatus, setError } = mensClothingSlice.actions;
export default mensClothingSlice.reducer;
