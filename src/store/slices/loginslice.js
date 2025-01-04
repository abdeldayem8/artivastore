import { createSlice } from "@reduxjs/toolkit";
import { fetchlogin } from "../thunks/loginthunk";
  
  const loginslice= createSlice({
    name:"login",
    initialState: {
        user:null,
        loading:false,
        error: null,
      },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchlogin.pending,(state)=>{
            state.loading=true
            state.error=null;
        }).addCase(fetchlogin.fulfilled,(state,action)=>{
               state.loading=false;
               state.user=action.payload;
              console.log(state.user)
            }).addCase(fetchlogin.rejected,(state,action)=>{
              state.loading=false;
            state.error=action.payload
        })
    }
  })

  export default loginslice.reducer;