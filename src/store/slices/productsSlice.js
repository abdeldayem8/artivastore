import { createSlice } from "@reduxjs/toolkit";
import { fetchproducts,fetchFilteredProducts } from "../thunks/productsThunks";


const productSlice = createSlice({
    name:'products',
    initialState:{
        products:[],
        filteredProducts: [],
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
           state.filteredProducts=action.payload;
       }).addCase(fetchproducts.rejected,(state,action)=>{
              state.loading=false;
              state.error= action.error.message; 
       }).addCase(fetchFilteredProducts.pending,(state)=>{
        state.loading=true;
        state.error=null
       }).addCase(fetchFilteredProducts.fulfilled,(state,action)=>{
        state.loading=false;
        state.filteredProducts=action.payload;
       }).addCase(fetchFilteredProducts.rejected,(state,action)=>{
        state.loading=false;
        state.error=action.error.message;
       })
    }
})

export default productSlice.reducer;
