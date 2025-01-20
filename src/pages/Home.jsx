import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import MoreSold from '@components/ecommerce/MoreSold/MoreSold';
import FeaturedCollection from '@components/ecommerce/SomeCollection/FeaturedCollection';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSocialData } from '@store/Thunks/SocialThunk';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const {t} =useTranslation();
  const navigate = useNavigate();
  const {data} = useSelector((state)=>state.social)

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchSocialData())
  },[dispatch])

  const imageUrl= data.image;
  const preloadImage = (url) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.href = url;
    link.as = "image";
    document.head.appendChild(link);
  };
  preloadImage(imageUrl)
      
        // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  
  return  <>
  {/* Hero Section */}
  <motion.div
        className="relative flex flex-col sm:flex-row items-center justify-between bg-black text-white py-10 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {/* Hero Text */}
        <motion.div
          className="flex-1"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <p className="text-secondary text-3xl md:text-4xl font-extrabold leading-tight">
            {data.disc}
          </p>
          <motion.button
            className="mt-4 border border-secondary text-white px-6 py-2 rounded hover:bg-secondary hover:text-primary transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={()=>navigate("/artivastore/collection")}
          >
            Shop Now
          </motion.button>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="flex-1 mt-6 sm:mt-0 sm:ml-6"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            srcSet={imageUrl}
            alt="Top Cover image for home page"
            className="mx-auto w-full h-full transform hover:scale-105 transition"
            loading='eager'
          />
        </motion.div>
      </motion.div>
      

      {/* Featured Collection Section */}
      <motion.div
        className="text-center my-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-white text-2xl md:text-3xl font-semibold">
          Our Featured Collection
        </h2>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
      >
        <FeaturedCollection />
      </motion.div>

      {/* Best Sellers Section */}
      <motion.div
        className="my-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
      >
        <MoreSold title="Best Sellers" />
      </motion.div>
</>
  
};

export default Home;