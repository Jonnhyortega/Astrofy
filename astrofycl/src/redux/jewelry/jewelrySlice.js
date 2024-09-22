import { createSlice } from '@reduxjs/toolkit';

const jewelrySlice = createSlice({
  name: 'jewelry',
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

export const { setProducts, setStatus, setError } = jewelrySlice.actions;
export default jewelrySlice.reducer;
