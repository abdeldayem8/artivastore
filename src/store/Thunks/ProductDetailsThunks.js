import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API_ENDPOINTS from "@utils/API_ENDPOINTS";


export  const fetchproductdetails = createAsyncThunk("fetchproductdetails",async(id,{ rejectWithValue })=>{
    try{
        const response = await axios.get(API_ENDPOINTS.View_Product(id),{
            headers: {
                Accept: "application/json", 
              },
          })
          return response.data.data;
    }catch (error) {
        return rejectWithValue(error.response?.data || error.message);
      }
     
})