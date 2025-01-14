import { createSlice } from "@reduxjs/toolkit";
import { submitOrder } from "../thunks/orderthunk";


const orderslice = createSlice({
    name:"order",
    initialState:{
        order: null,
        loading: false,
        success: false,
        error: null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(submitOrder.pending,(state)=>{
            state.loading = true;
            state.success = false;
            state.error = null;
        }).addCase(submitOrder.fulfilled,(state,action)=>{
            state.loading=false;
            state.success = true;
        state.order = action.payload;
        }).addCase(submitOrder.rejected,(state,action)=>{
            state.loading=false;
            state.success=false;
            state.error=action.error.message;
        })
    }
})

export default orderslice.reducer