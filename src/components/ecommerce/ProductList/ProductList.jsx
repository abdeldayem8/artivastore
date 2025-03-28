import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Loading from '@components/common/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { fetchproducts } from '../../../store/Thunks/ProductsThunks';
import ProductItem from '@components/ecommerce/ProductItem/ProductItem'
import axios from 'axios';
import API_ENDPOINTS from '@utils/API_ENDPOINTS';
import dropdown from '@assets/dropdown.png'
import { addToCart } from '@store/Slices/Cartslice';
import { motion } from "framer-motion";
import ProductModal from '@components/ecommerce/Model/ProductModel';
import { Pagination, Stack } from '@mui/material';
import OptionsBtn from '@/components/common/OptionsBtn/OptionsBtn';

const ProductList = () => {
    
   const dispatch = useDispatch()
   const {products,loading,error} = useSelector((state)=>state.products)
   const {t} =useTranslation();
  
   const [categories,setCategories] = useState([]);
   const [selectedCategories, setSelectedCategories] = useState([]);
   const [showfilter,setShowfilter] = useState(false)
   const [selectedProduct, setSelectedProduct] = useState(null); 
   const [isModalOpen, setIsModalOpen] = useState(false); 
   const pageSize=16;
      const [pagination,setPagination] = useState({
    from:0,
    to:pageSize,
   })
   const savedTheme = localStorage.getItem("theme");
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

     // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const handlePagination = (event, page) => {
   
    const from = (page - 1) * pageSize;
    const to = page * pageSize;
    setPagination({ from, to });
  };


  return (
    <motion.div
      className="flex flex-col gap-6 pt-10"
     
      exit="hidden"
      variants={staggerContainer}
    >
      {/* Heading */}
      <motion.h2
        className="text-2xl font-bold"
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
      >
        {t("products")}
      </motion.h2>

      {/* Filter Options */}
      <motion.div
        className="min-w-60 rounded-md"
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
      >
        <p
          onClick={() => setShowfilter(!showfilter)}
          className="text-lg font-semibold cursor-pointer flex items-center gap-2"
        >
          FILTERS
          <img
            className={`h-4 transform transition-transform ${
              showfilter ? "rotate-90" : ""
            }`}
            src={dropdown}
            alt="dropdown"
          />
        </p>
        {/* Category Filters */}
        <div className={`mt-4 space-y-3 ${showfilter ? "" : "hidden"}`}>
          <p className="font-semibold text-sm">CATEGORY</p>
          {categories.length > 0 ? (
            categories.map((category) => (
              <p
                key={category.id}
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => handleCategoryFilter(category.id)}
              >
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  checked={selectedCategories.includes(category.id)}
                  onChange={() => handleCategoryFilter(category.id)}
                />
                <label className="text-sm">{category.name}</label>
              </p>
            ))
          ) : (
            <p>No categories available</p>
          )}
        </div>
      </motion.div>

      {/* Product Grid */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        variants={staggerContainer}
      >
        {filteredProducts && filteredProducts.length > 0 ? (
          filteredProducts.slice(pagination.from,pagination.to).map((product) => (
            <motion.div
              key={product.id}
              className="flex flex-col items-center"
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
      
              <ProductItem product={product} />
              <div className="w-full">
                <OptionsBtn onClick={() => {
                    setSelectedProduct(product);
                    setIsModalOpen(true);
                  }}>Choose Options</OptionsBtn>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-secondary">No products available</p>
        )}
      </motion.div>
       {/* Product Modal */}
       <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
        onAddToCart={(product) => dispatch(addToCart(product))}
      />
      {/* pagination */}
      <Stack spacing={2} className='flex justify-center my-4 mx-auto'>
      <Pagination onChange={handlePagination} count={Math.ceil(filteredProducts.length/pageSize)} variant="outlined" shape="rounded"  sx={{
          "& .MuiPaginationItem-root": {
            backgroundColor:'gray',
            color: '#000', // Default text color for light mode
            borderColor: '#D1D5DB',
            "&.Mui-selected": {
              backgroundColor: '#F3E4DD', // Default background color for light mode
              color: '#000', // Default text color for light mode
              borderColor: '#D1D5DB',
            },
            "&:hover": {
              backgroundColor: '#D1D5DB', // Default hover background for light mode
              color: '#000', // Default hover text color for light mode
            },
          }}}
      />
    </Stack>
    </motion.div>
  );
};

export default ProductList;