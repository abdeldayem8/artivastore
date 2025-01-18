import { createSlice } from "@reduxjs/toolkit";
import { fetchproducts } from "../Thunks/ProductsThunks";


const productSlice = createSlice({
    name:'products',
    initialState:{
        products:[],
        loading:false,
        error:null,
    },
    reducers:{},
    extraReducers: (builder)=>{
       builder.addCase(fetchproducts.pending,(state)=>{
         state.loading=true;
         state.error=null;
       }).addCase(fetchproducts.fulfilled,(state , action)=>{
           state.loading=false;
           state.products= action.payload;
       }).addCase(fetchproducts.rejected,(state,action)=>{
              state.loading=false;
              state.error= action.error.message; 
       })
    }
})

export default productSlice.reducer;
