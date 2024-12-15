import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchproducts = createAsyncThunk("fetchproducts",async ()=>{
    const reponse = await axios.get(`https://fakestoreapi.com/products`)
    return reponse.data;
})