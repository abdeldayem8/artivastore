import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API_ENDPOINTS from "@utils/API_ENDPOINTS";


export const fetchproducts = createAsyncThunk("products/fetchProducts",async (_, {rejectWithValue})=>{
    try {
        const response = await axios.get(API_ENDPOINTS.PRODUCTS, {
          headers: {
            Accept: "application/json", 
          },
        });
        return response.data.data.data;
      } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
      }
    }
  );


