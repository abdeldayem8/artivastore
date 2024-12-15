import { configureStore } from "@reduxjs/toolkit";
import productsreducer from './slices/productsSlice'

 const store =configureStore({
    reducer:{
        products:productsreducer
    }
})

export default store;