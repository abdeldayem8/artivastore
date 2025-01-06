import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";


export const cartslice = createSlice({
  name:"cart",
  initialState:[],
  reducers:{

    addToCart : (state,action)=>{
      const findproduct = state.find((product)=> product.id === action.payload.id)
      if(findproduct){
           findproduct.quantity +=1;
      }else{
        const productclone = {...action.payload,quantity :1}
        state.push(productclone)
        toast.success('Added To Cart Successfuuly')
      }
    },
    increaseQuantity : (state,action)=>{
      const findproduct = state.find((product)=> product.id === action.payload.id)
      if(findproduct){
        findproduct.quantity +=1;
      }
    
    },
    decreaseQuantity : (state,action)=>{
      const findproduct = state.find((product)=> product.id === action.payload.id)
      if(findproduct && findproduct.quantity > 1){
        findproduct.quantity -=1
      }else{
        return state.filter((product)=> product.id !== action.payload.id)
      }
     
    },

    removeFromCart : (state,action)=>{
     return  state.filter((product)=> product.id != action.payload.id
      )
    },

    clearCart : (state,action)=>{
      return []
    }
  } 
})

export const {addToCart,removeFromCart,clearCart,increaseQuantity,decreaseQuantity} =cartslice.actions;
export default cartslice.reducer;