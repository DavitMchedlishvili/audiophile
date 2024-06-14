 import { configureStore } from "@reduxjs/toolkit";
 import ProductsReducer from "./Products/Products.Slice"

 const store = configureStore({
    reducer: {
        product: ProductsReducer
    }
 })

 export default store