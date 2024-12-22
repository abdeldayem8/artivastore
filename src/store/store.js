import { configureStore } from "@reduxjs/toolkit";
import productsreducer from './slices/productsSlice'
import productdetailsreducer from './slices/productdetailsslice'

 const store =configureStore({
    reducer:{
        products:productsreducer,
        Productdetails:productdetailsreducer
    }
})

export default store;