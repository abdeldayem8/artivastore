import React, { useState } from 'react'
import useFetchmoresold from '@hooks/useFetchMoreSold'
import API_ENDPOINTS from '@utils/API_ENDPOINTS'
import Loading from '@components/common/Loading/Loading';
import TitleSection from '@components/common/TitleSection/TitleSection';
import ProductItem from '@components/ecommerce/ProductItem/ProductItem';
import ProductModal from '../Model/ProductModel';
import { addToCart } from '@/store/Slices/Cartslice';
import { useDispatch } from 'react-redux';
import { motion } from "framer-motion";


const MoreSold = ({title}) => {
    const {data,loading,error} = useFetchmoresold(API_ENDPOINTS.More_Sold_Product);
    const dispatch = useDispatch()
    const [isModalOpen, setIsModalOpen] = useState(false); 
            const [selectedProduct, setSelectedProduct] = useState(null); 
    if (loading) return <p><Loading/></p>;
    if (error) return <p>Error: {error.message}</p>;
     
    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      };
    
     
   const bestsellersdata = Array.isArray(data) ? data.slice(0, 4) : [];
   
  return (
    <div>
                <TitleSection title={title} />
               <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-5">
                   {bestsellersdata && bestsellersdata.length > 0 ? (
                       bestsellersdata.map((product) => (
                        <motion.div
                        key={product.id}
                        className="flex flex-col items-center"
                        variants={fadeInUp}
                        transition={{ duration: 0.5 }}
                      >
                
                        <ProductItem product={product} />
                        <div className="w-full">
                          <motion.button
                            className="w-full mb-2 bg-transparent border border-white-500 text-secondary font-semibold py-2 sm:px-6 rounded transition-colors hover:bg-secondary hover:text-primary"
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
                       <p className="text-center text-gray-500">No products available</p>
                   )}
                   {/* Product Modal */}
                                  <ProductModal
                                   isOpen={isModalOpen}
                                   onClose={() => setIsModalOpen(false)}
                                   product={selectedProduct}
                                   onAddToCart={(product) => dispatch(addToCart(product))}
                                 />
               </div>
           </div>
  )
}

export default MoreSold
