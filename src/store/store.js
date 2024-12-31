import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsreducer from './slices/productsSlice'
import productdetailsreducer from './slices/productdetailsslice'
import registerreducer from './slices/registerslice'
import  cartslice  from "./slices/cartslice";
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
    register: registerreducer,
    cart: cartslice
})
const persistedReducer = persistReducer(persistconfig, reducers)

export const store = configureStore({
    reducer:persistedReducer    
})
    

export const persistor = persistStore(store);  
export default store;