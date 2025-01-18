import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsreducer from './Slices/ProductsSlice'
import productdetailsreducer from './Slices/ProductDetailsSlice'
import loginreducer from './Slices/LoginSlice'
import  cartslice  from "./Slices/Cartslice";
import customshirtreducer from './Slices/CustomShirtSlice'
import socialreducer from './Slices/SocialSlice'
import storage from "redux-persist/lib/storage"; 
import { persistStore, persistReducer } from "redux-persist";

const persistconfig={
    key:"root",
    storage,
    whiteList:["cart"]
}

const reducers = combineReducers({
    products: productsreducer,
    Productdetails: productdetailsreducer,
    login: loginreducer,
    customshirts:customshirtreducer,
    cart: cartslice,
    social:socialreducer
})
const persistedReducer = persistReducer(persistconfig, reducers)

export const store = configureStore({
    reducer:persistedReducer, middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false, 
        }),    
})


export const persistor = persistStore(store);  
export default store;