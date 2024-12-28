const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://artivecolthes.com'; 

const API_ENDPOINTS = {
    PRODUCTS: `${BASE_URL}/api/product/`,
    More_Sold_Product:`${BASE_URL}/api/product/more_sold_products`,
    View_Product:(id)=>`${BASE_URL}/api/product/${id}`,
    Category:`${BASE_URL}/api/category/`,
    Register:`${BASE_URL}/api/register`,
    Login:`${BASE_URL}/api/login`,
    Logout:`${BASE_URL}/api/logout`
   };
export default API_ENDPOINTS;