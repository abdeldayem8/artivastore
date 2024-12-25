import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchproductdetails } from '../store/thunks/productdetailsthunks';
import Loading from '../components/common/Loading/Loading';
import star from '../assets/star.png'
import unstar from '../assets/unstar.png'
import Moresold from '../components/ecommerce/moresold/Moresold'

const Productdetails = () => {
    const { id } = useParams();
    const { productdetails, loading, error } = useSelector((state) => state.Productdetails);
    const dispatch = useDispatch();
    const [image,setImage] = useState('');
    const [size,setSize] = useState('');


    useEffect(() => {
        dispatch(fetchproductdetails(id));
    }, [id, dispatch]);

    useEffect(() => {
        if (productdetails?.images?.length > 0) {
            setImage(productdetails.images[0]); // Set first image as the main image
        }
    }, [productdetails]);

    if (loading) return <p><Loading/></p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!productdetails) return <div>No product details found.</div>;

   

    return productdetails ? (
        <>
           <div className='border-t-2 pt-10 transition-opacity ease in duration-500 opacity-100'>
            {/* product data */}
              <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row mb-8'>
                {/* product image */}
                <div  className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                    {/* thumbnil images */}
                <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
                            {productdetails.images.map((item, index) => (
                                <img
                                    src={item}
                                    className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 hover:scale-110 transition ease-in-out cursor-pointer"
                                    key={index}
                                    alt={productdetails.name}
                                    onClick={() => setImage(item)} 
                                />
                            ))}
                        </div>
                        {/* main image */}
                    <div className='w-full sm:w-[80%]'>
                     <img className='w-full h-auto hover:scale-90 transition ease-in-out cursor-pointer' src={image} />
                    </div>
                </div>
                {/* product information */}
                <div className='flex-1 '>
                    <h1 className='font-medium text-2xl mt-2'>{productdetails.name}</h1>
                    <div className='flex items-center gap-1 mt-2 '>
                        <img src={star} className='w-3 5'/>
                        <img src={star} className='w-3 5'/>
                        <img src={star} className='w-3 5'/>
                        <img src={star} className='w-3 5'/>
                        <img src={unstar} className='w-3 5'/>
                         <p className='pl-2'>(122)</p>
                    </div>
                       {/* Calculate and display price and discount */}
    <div className='mt-5'>
        {productdetails.discount > 0 ? (
            <>
                <p className='line-through text-gray-500 text-xl'>
                    {parseFloat(productdetails.price)} EGP
                </p>
                <p className='text-3xl font-medium text-red-500'>
                    {(
                        parseFloat(productdetails.price) - parseFloat(productdetails.discount)
                        
                    )}{' '}
                    EGP
                </p>
            </>
        ) : (
            <p className='text-3xl font-medium'>
                {productdetails.price} EGP
            </p>
        )}
    </div>
                    <p className='mt-5 text-gray-500 md:w-4/5'>{productdetails.description}</p>
                    <div className='flex flex-col gap-4 my-8'>
                      <p>Select Size</p>
                      <div className='flex gap-2'>
                        {productdetails.size.map((item,index)=>(
                            <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
                        ))}
                      </div>
                    </div>
                    <div className='flex items-center gap-2'>
                    <button className='bg-transparent text-secondary border border-black px-8 py-3 text-sm'>ADD TO CART</button>
                    <button className='bg-secondary text-white px-8 py-3 text-sm active:bg-gray-700'>BUY IT NOW</button>
                    </div>
                    <hr className='mt-8 sm:w-4/5 w-full border-t border-black' />
                    <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                        <p>100% Original Product</p>
                        <p>Cash On Delivery</p>
                        <p>Easy Return and Exchange Policy within 7 Days</p>
                    </div>
                </div>
              </div>
              <Moresold title="You May Also Like"/>
           </div> 
        </>
    ) : <div className='opacity-0'></div>;
};

export default Productdetails;