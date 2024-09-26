import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import mensClothingReducer from "./mensClothing/mensClothingSlice";
import jewelryReducer from "./jewelry/jewelrySlice";
import womensClothingReducer from "./womensClothing/womensClothingSlice";
import electronicsReducer from "./electronics/electronicsSlice";
import allProductsReducer from "./allproducts/allProductsSlice";
import cartReducer from "./cart/cartSlice";
const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  mensClothings: mensClothingReducer,
  womensClothings: womensClothingReducer,
  jewelry: jewelryReducer,
  electronics: electronicsReducer,
  products: allProductsReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
        ignoredPaths: ["register"],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
