 import { configureStore } from "@reduxjs/toolkit";
 import ProductsReducer from "./Products/Products.Slice"





 const store = configureStore({
    reducer: {
        products: ProductsReducer
    }
 })


export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


 export default store