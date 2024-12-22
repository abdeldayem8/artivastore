import { createSlice } from "@reduxjs/toolkit";
import {fetchproductdetails} from '../thunks/productdetailsthunks'

const productdetailsslice = createSlice({
    name:"productdetails",
    initialState:{
        productdetails:null,
        loading:false,
        error:null,
    },
    reducers:{},
   extraReducers: (builder)=>{
          builder.addCase(fetchproductdetails.pending,(state)=>{
            state.loading=true;
            state.error=null;
          }).addCase(fetchproductdetails.fulfilled,(state , action)=>{
              state.loading=false;
              state.productdetails= action.payload;
          }).addCase(fetchproductdetails.rejected,(state,action)=>{
                 state.loading=false;
                 state.error= action.error.message; 
          })
       }
   })

   export default productdetailsslice.reducer;