import { createSlice } from "@reduxjs/toolkit";
import { fetchSocialData } from "@store/Thunks/SocialThunk";

const socialslice = createSlice({
    name:"social",
    initialState:{
        data:[],
        error:null
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(fetchSocialData.pending,(state)=>{
            state.error=null;
        }).addCase(fetchSocialData.fulfilled,(state,action)=>{
            state.data=action.payload;
        }).addCase(fetchSocialData.rejected,(state,action)=>{
            state.error=action.error.message
        })
    }
})

export default socialslice.reducer