import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API_ENDPOINTS from "../../utils/API_ENDPOINTS";



export const submitOrder = createAsyncThunk("orders",async(orderData , { rejectWithValue })=>{
    try {
        const response = await axios.post(API_ENDPOINTS.Order, orderData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        return response.data; // Return the API response data
      } catch (error) {
        return rejectWithValue(error.response?.data || "Failed to submit order");
      }
    });