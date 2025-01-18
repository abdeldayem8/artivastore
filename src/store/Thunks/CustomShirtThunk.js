import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API_ENDPOINTS from "@utils/API_ENDPOINTS";


export const fetchcustomshirts = createAsyncThunk("fetchcustomshirts", async(_,{rejectWithValue})=>{
    try {
        const response = await axios.get(API_ENDPOINTS.Models,{
            headers: {
                Accept: "application/json", 
              },
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data.message || error.message)
    }
})