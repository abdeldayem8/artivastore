const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://artivecolthes.com'; 

const API_ENDPOINTS = {
    PRODUCTS: `${BASE_URL}/api/product/`,
    New_Product:`${BASE_URL}/api/product/new_product`,
    More_Sold_Product:`${BASE_URL}/api/product/more_sold_products`,
    View_Product:(id)=>`${BASE_URL}/api/product/${id}`,
   };
export default API_ENDPOINTS;