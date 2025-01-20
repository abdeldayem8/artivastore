import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { fetchproducts } from '@store/Thunks/ProductsThunks';
import Loading from '@components/common/Loading/Loading';
import ProductItem from '@components/ecommerce/ProductItem/ProductItem';
import { motion } from 'framer-motion';
import ProductModal from '@components/ecommerce/Model/ProductModel';
import { addToCart } from '@/store/Slices/Cartslice';

const FeaturedCollection = () => {
  const { products, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    dispatch(fetchproducts());
  }, [dispatch]);

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const homeProducts = Array.isArray(products) ? products.slice(0, 4) : [];
  if (loading) return <Loading />;
  if (error) return <p>Error: {error?.message || 'An error occurred'}</p>;

  return (
    <motion.div
      className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-5"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      }}
    >
      {homeProducts && homeProducts.length > 0 ? (
        homeProducts.map((product) => (
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
        onAddToCart={(product) =>
          dispatch(
            addToCart({product})
          )
        }
      />
    </motion.div>
  );
};

export default FeaturedCollection;
