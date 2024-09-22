import { createSlice } from '@reduxjs/toolkit';

const womensClothingSlice = createSlice({
  name: 'womensClothing',
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

export const { setProducts, setStatus, setError } = womensClothingSlice.actions;
export default womensClothingSlice.reducer;
