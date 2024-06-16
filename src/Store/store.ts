 import { configureStore } from "@reduxjs/toolkit";
 import ProductsReducer from "./Products/Products.Slice"

 const store = configureStore({
    reducer: {
        products: ProductsReducer
    }
 })

 export default store