const BASE_URL = import.meta.env.VITE_API_BASE_URL  || "http://localhost:5173";

const API_ENDPOINTS = {
    NEW_PRODUCT: `${BASE_URL}/api/product/new_product`,
   };
    export default API_ENDPOINTS;