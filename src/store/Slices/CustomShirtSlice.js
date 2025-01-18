import { createSlice } from "@reduxjs/toolkit";
import { fetchcustomshirts } from "@store/Thunks/CustomShirtThunk";



const customshirtslice = createSlice({
    name:"customshirts",
    initialState:{
        data:null,
        loading:false,
        error:null
    },reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchcustomshirts.pending,(state)=>{
            state.loading=true;
            state.error=null;
        }).addCase(fetchcustomshirts.fulfilled,(state,action)=>{
            state.loading=false;
            state.data=action.payload;
        }).addCase(fetchcustomshirts.rejected,(state,action)=>{
             state.loading=false;
             state.error=action.error.message; 
        })
    }
})

export default customshirtslice.reducer;