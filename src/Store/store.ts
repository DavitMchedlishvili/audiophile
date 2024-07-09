import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./Products/Products.Slice";
import CartSlice from "./Cart.Slice";

const store = configureStore({
  reducer: {
    products: ProductsReducer,
    cart: CartSlice,
  },
});

export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
