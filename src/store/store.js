import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsreducer from './slices/productsSlice'
import productdetailsreducer from './slices/productdetailsslice'
import loginreducer from './slices/loginslice'
import  cartslice  from "./slices/cartslice";
import customshirtreducer from './slices/customshirtslice'
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
    cart: cartslice
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