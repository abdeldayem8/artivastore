import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API_ENDPOINTS from "../../utils/API_ENDPOINTS";

export const fetchregister = createAsyncThunk("register",async (formdata,{rejectWithValue})=>{
    try {
         const response =await axios.post(API_ENDPOINTS.Register,formdata);
         return response.data.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message);
    }
})