import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";


export const cartslice = createSlice({
  name:"cart",
  initialState:[],
  reducers:{

    addToCart: (state, action) => {
      const { isCustom, frontDesignImage, backDesignImage, frontPreview,backPreview ,category,typedText, textColor, size, quantity, color, id } = action.payload;
    
      if (!size || !color) {
        toast.error("Please select a size and color before adding to the cart!");
        return;
      }
    
      if (isCustom) {
        // Generate a unique ID for custom products if not provided
        const customId = id || `custom-${Date.now()}`;
        
        const findCustomProduct = state.find(
          (product) =>
            product.id === customId &&
            product.frontDesignImage === frontDesignImage &&
            product.backDesignImage === backDesignImage &&
            product.typedText === typedText &&
            product.size === size &&
            product.color === color &&
            product.category === category
        );
    
        if (findCustomProduct) {
          findCustomProduct.quantity += quantity;
          toast.success('Updated Quantity in Cart');
        } else {
          const customProductClone = { 
            ...action.payload,
            id: customId,
            quantity,
            isCustom: true,
            // Ensure these fields exist for custom products
            images: [frontDesignImage || backDesignImage],
            name: 'Custom Design Product'
          };
          state.push(customProductClone);
          toast.success('Added To Cart Successfully');
        }
      } else {
        // Normal product logic
        const findProduct = state.find(
          (product) => product.id === id && product.size === size && product.color === color
        );
    
        if (findProduct) {
          findProduct.quantity += quantity;
          toast.success('Updated Quantity in Cart');
        } else {
          const productClone = { ...action.payload, quantity };
          state.push(productClone);
          toast.success('Added To Cart Successfully');
        }
      }
    },
    
    
    
    increaseQuantity: (state, action) => {
      const { id, size, color } = action.payload;
      const findProduct = state.find(
        (product) => product.id === id && product.size === size && product.color === color
      );
      if (findProduct) {
        findProduct.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const { id, size, color } = action.payload;
      const findProduct = state.find(
        (product) => product.id === id && product.size === size && product.color === color
      );
      if (findProduct && findProduct.quantity > 1) {
        findProduct.quantity -= 1;
      } else {
        return state.filter(
          (product) => !(product.id === id && product.size === size && product.color === color)
        );
      }
    },

    removeFromCart : (state,action)=>{
      const {id,size,color} = action.payload;

     const remove =  state.filter((product)=> !(product.id === id && product.size === size && product.color === color)
   
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