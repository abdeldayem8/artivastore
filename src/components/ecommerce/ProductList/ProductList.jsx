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
import { motion } from "framer-motion";
import ProductModal from '../Model/Productmodel';

const ProductList = () => {
    
   const dispatch = useDispatch()
   const {products,loading,error} = useSelector((state)=>state.products)
   const {t} =useTranslation();

   const [categories,setCategories] = useState([]);
   const [selectedCategories, setSelectedCategories] = useState([]);
   const [showfilter,setShowfilter] = useState(false)
   const [selectedProduct, setSelectedProduct] = useState(null); 
   const [isModalOpen, setIsModalOpen] = useState(false); 
    
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

  console.log(selectedProduct)
  return (
    <motion.div
      className="flex flex-col gap-6 pt-10"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={staggerContainer}
    >
      {/* Heading */}
      <motion.h2
        className="text-2xl font-bold text-secondary"
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
      >
        {t("products")}
      </motion.h2>

      {/* Filter Options */}
      <motion.div
        className="min-w-60 rounded-md text-secondary"
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
          filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              className="flex flex-col items-center"
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              <Productitem
                id={product.id}
                image={product.images}
                name={product.name}
                price={product.price}
              />
              <div className="w-full">
                <motion.button
                  className="w-full mb-2 bg-transparent border border-white-500 text-secondary font-semibold py-2 px-6 rounded transition-colors hover:bg-secondary hover:text-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSelectedProduct(product);
                    setIsModalOpen(true);
                  }}
                >
                  Choose Options
                </motion.button>
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
    </motion.div>
  );
};

export default ProductList;