import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const productSlice = createSlice({
    name: "product",
    initialState : {
        product : [],
        category : "",
        isLoading : false,
        isError : false,
        isSuccess : false,

    },
    reducers : {
        setCategory : (state,action)=>{
            state.category=action.payload

        }
    },
    extraReducers : (builder)=>{
        builder
        .addCase(fetchProduct.pending,(state,action)=>{

            state.isLoading=true
            state.isError=false
            state.isSuccess=false

        }).addCase(fetchProduct.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isError=false
            state.isSuccess=true
            state.product=action.payload

        }).addCase(fetchProduct.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.isSuccess=false

        });

    }
});
export const {setCategory}=productSlice.actions
export default productSlice.reducer;

export const fetchProduct = createAsyncThunk("FETCH/PRODUCT",async()=>{
    const response = await axios.get('https://fruitapi-mf2v.onrender.com/data');
    console.log(response.data);
    return response.data;   
});
