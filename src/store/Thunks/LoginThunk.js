import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API_ENDPOINTS from "../../utils/API_ENDPOINTS";
import toast from "react-hot-toast";

export const fetchlogin = createAsyncThunk("login",async ({email,password,navigate},{rejectWithValue})=>{
    try {
        const response = await axios.post(API_ENDPOINTS.Login,{email, password});
        if (response.status === 200) {
          localStorage.setItem('token', response.data.data.access_token);
          toast.success(response.data.message, { duration: 1000 });
          setTimeout(() => {
            navigate('/artivastore/profile');
          }, 1000);
          return response.data.data;
        }
      } catch (error) {
        toast.error(error.response?.data?.message || 'Login failed');
        return rejectWithValue(error.response?.data?.message);
      }
})