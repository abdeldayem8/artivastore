import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";


export const cartslice = createSlice({
  name:"cart",
  initialState:[],
  reducers:{

    addToCart: (state, action) => {
      const { id, size, quantity } = action.payload; // Get the product id, size, and quantity from the action payload

      if(!size){
        toast.error("Please select a size before adding to the cart!");
        return;
      }
    
      // Check if this product with the same size already exists in the cart
      const findProduct = state.find(
        (product) => product.id === id && product.size === size
      );
    
      if (findProduct) {
        // If the product with the same size exists, increase the quantity
        findProduct.quantity += quantity;
        toast.success('Updated Quantity in Cart');
      } else {
        // If the product doesn't exist in the cart, add it with size and quantity
        const productClone = { ...action.payload, quantity };
        state.push(productClone);
        toast.success('Added To Cart Successfully');
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
      const {id,size} = action.payload;

     const remove =  state.filter((product)=> !(product.id === id && product.size === size)
   
      )
      return remove
    },

    clearCart : (state,action)=>{
      return []
    }
  } 
})

export const {addToCart,removeFromCart,clearCart,increaseQuantity,decreaseQuantity} =cartslice.actions;
export default cartslice.reducer;