import { createSlice } from "@reduxjs/toolkit";
import { fetchregister } from "../thunks/registerthunk";
  
  const registerslice= createSlice({
    name:"register",
    initialState: {
        data: {
          token: null,
          user: null,
        },
        error: null,
      },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchregister.pending,(state)=>{
            state.error=null;
        }).addCase(fetchregister.fulfilled,(state,action)=>{
            state.data = {
                token: action.payload.access_token,
                user: {
                  first_name: action.payload.first_name,
                  last_name: action.payload.last_name,
                  email: action.payload.email,
                  phone: action.payload.phone,
                  id: action.payload.id,
                },
              }; 
              console.log(state.data.user)
            }).addCase(fetchregister.rejected,(state,action)=>{
            state.error=action.payload
        })
    }
  })

  export default registerslice.reducer;