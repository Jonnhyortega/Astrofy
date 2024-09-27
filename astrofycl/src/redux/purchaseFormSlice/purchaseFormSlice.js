// src/redux/purchaseForm/purchaseFormSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  lastName: "",
  email:"",
  address: "",
  dni: "",
  cardNumber: "",
  cardName: "",
  cardCode: "",
  termsAccepted: false,
  products: []
};

const purchaseFormSlice = createSlice({
  name: "purchaseForm",
  initialState,
  reducers: {
    savePurchaseFormData: (state, action) => {
      return { ...state, ...action.payload };
    },
    clearPurchaseFormData: () => initialState,
  },
});

export const { savePurchaseFormData, clearPurchaseFormData } = purchaseFormSlice.actions;

export default purchaseFormSlice.reducer;
