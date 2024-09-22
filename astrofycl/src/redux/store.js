import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import mensClothingReducer from "./mensClothing/mensClothingSlice";
import jewelryReducer from "./jewelry/jewelrySlice";
import womensClothingReducer from "./womensClothing/womensClothingSlice";
import electronicsReducer from "./electronics/electronicsSlice";
import allProductsReducer from "./allproducts/allProductsSlice";
import cartReducer from "./cart/cartSlice"
const persistConfig = {
  key: "root",
  storage,
  // Puedes agregar otras configuraciones de persistencia si es necesario
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
        // Permite valores no serializables en acciones y estado
        ignoredActions: ['persist/PERSIST'], 
        ignoredPaths: ['register'], 
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
