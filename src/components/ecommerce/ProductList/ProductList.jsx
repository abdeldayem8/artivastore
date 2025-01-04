import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Loading from '../../common/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { fetchproducts } from '../../../store/thunks/productsThunks';
import Productitem from '../Productitem/Productitem'
import axios from 'axios';
import API_ENDPOINTS from '../../../utils/API_ENDPOINTS';
import dropdown from '../../../assets/dropdown.png'
import { addToCart } from '../../../store/slices/cartslice';

const ProductList = () => {
    
   const dispatch = useDispatch()
   const {products,loading,error} = useSelector((state)=>state.products)
   const {t} =useTranslation();

   const [categories,setCategories] = useState([]);
   const [selectedCategories, setSelectedCategories] = useState([]);
   const [showfilter,setShowfilter] = useState(false)
    
  //  fetch catgories
    const fetchCategories = async () => {
      try {
        const response = await axios.get(API_ENDPOINTS.Category,{
          headers: {
            Accept: "application/json", 
          },
        });
        setCategories(response.data.data); 
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

     // Filter products based on active category
     const filteredProducts =
     selectedCategories.length > 0
       ? products.filter((product) =>
           selectedCategories.includes(product.Categore_id)
         )
       : products;

      //  handle category change
  const handleCategoryFilter = (categoryId) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId) // Remove the category if it's already selected
        : [...prev, categoryId] // Add the category if not selected
    );
  };


    // fetch products
useEffect(()=>{
  dispatch(fetchproducts())
 },[dispatch])

// Fetch categories on mount
useEffect(() => {
  fetchCategories();
}, []);


    if (loading) return <p><Loading/></p>;
    if (error) return <p>Error: {error.message}</p>;
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* filter options */}
      <div className='min-w-60'>
          <p onClick={()=>setShowfilter(!showfilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
            <img className={`h-3 sm:hidden ${showfilter? 'rotate-90' :''}`} src={dropdown} alt='dropdown'/>
          </p>
          {/* category */}
          <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showfilter ? "" : "hidden"} sm:block`}>
    <p className="mb-3 text-sm font-medium">CATEGORY</p>
    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
      {categories.length > 0 ? (
        categories.map((category) => (
          <p className="flex gap-2 cursor-pointer" key={category.id} onClick={() => handleCategoryFilter(category.id)}>
            <input 
              className="w-3" 
              type="checkbox" 
              value={category.slug} 
              id={`category-${category.id}`} 
              checked={selectedCategories.includes(category.id)} 
              onChange={() => handleCategoryFilter(category.id)} 
            />
            <label htmlFor={`category-${category.id}`}>{category.name}</label>
          </p>
        ))
      ) : (
        <p>No categories available</p>
      )}
    </div>
  </div>
</div>
{/* right side */}
<div className='flex-1'>
 <div className='flex justify-between text-base sm:text-2xl mb-4'>
 <h2 className="text-2xl text-center font-semibold mb-6">{t('products')}</h2>
 </div>
 {/* map products */}
 <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
 {filteredProducts && filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
                        <div key={product.id}>
                        <Productitem 
                          id={product.id} 
                          image={product.images} 
                          name={product.name} 
                          price={product.price} 
                        />
                        <div className="flex justify-center my-4">
                          <button
                            className="uppercase bg-secondary cursor-pointer text-white font-semibold rounded-md border-2 border-primary px-6 py-2"
                            onClick={()=>dispatch(addToCart(product))}
                          >
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No products available</p>
                )}
          </div>
</div>
    </div>
    );
};

export default ProductList;
