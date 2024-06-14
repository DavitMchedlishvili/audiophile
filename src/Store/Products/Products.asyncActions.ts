import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../Config/api";
import { Data } from "../../Types/products";


 export const fetchProducts =createAsyncThunk("products/fetchProducts", async (_, ThunkApi) => {
    try{
        const response = await api.get<Data[]>("/products")
        return response.data
    }catch(error){
        if(error instanceof Error){
            ThunkApi.rejectWithValue(error.message)
        }else{
            ThunkApi.rejectWithValue("unknown error happend")
        }
 }
    
 })