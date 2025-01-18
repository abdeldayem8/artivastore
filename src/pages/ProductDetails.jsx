import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchproductdetails } from '@store/Thunks/ProductDetailsThunks';
import Loading from '@components/common/Loading/Loading';
import MoreSold from '@components/ecommerce/MoreSold/MoreSold'
import { addToCart } from '@store/Slices/Cartslice';
import toast from 'react-hot-toast';

const ProductDetails = () => {
    const { id } = useParams();
    const { productdetails, loading, error } = useSelector((state) => state.Productdetails);
    const dispatch = useDispatch();
    const [image,setImage] = useState('');
    const [size,setSize] = useState('');
    const [selectedcolor,setSelectedcolor] = useState(null)
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(fetchproductdetails(id));
    }, [id, dispatch]);

    useEffect(() => {
        if (productdetails?.images?.length > 0) {
            setImage(productdetails.images[0]); // Set first image as the main image
        }
    }, [productdetails]);

    const handleCheckout = () => {
        if(!size || !selectedcolor){
            toast.error("Please select a size and color before proceeding.")
            return;
        }
        const orderData = {
          items: [
            {
              id: productdetails.id,
              name: productdetails.name,
              image:productdetails.images[0],
              size: size,
              color: selectedcolor,
              quantity: quantity,
              price: productdetails.price,
            },
          ],
          totalPrice: productdetails.price * quantity,
        };
      
        navigate('/artivastore/order', {
            state: {
              ...orderData,
              from: "fromproduct",  // Pass a specific word to indicate the origin
            },
          });
        };
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
                    <h1 className='font-medium text-secondary text-2xl mt-2'>{productdetails.name}</h1>
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
                    <p className='my-5 text-gray-500 md:w-4/5'>{productdetails.description}</p>
                    {/* colors */}
                    <p className='text-secondary my-4'>Available Colors</p>
                    <div className='flex gap-2'>
                    {productdetails?.color?.map((color) => (
        <button
          key={color}
          className={`w-8 h-8 rounded-full border-2 transition ${
            selectedcolor === color
            ? 'border-gray-500' // Change border to gray when selected
            : 'border-orange-500' // Default orange border
        }`}
          style={{ backgroundColor: color }}
          onClick={()=>setSelectedcolor(color)}
        />
      ))}
                    </div>
                    

                    {/* sizes */}
                    <div className='flex flex-col gap-4 my-8'>
                      <p>Select Size</p>
                      <div className='flex gap-2'>
                        {productdetails.size.map((item,index)=>(
                            <button onClick={()=>setSize(item)} className={`border py-2 px-4 text-secondary ${item === size ? 'bg-gray-500' : ''}`} key={index}>{item}</button>
                        ))}
                      </div>
                    </div>
                      {/* Quantity Selection */}
                      <div className='flex items-center gap-2 my-4'>
                            <button
                                className='border border-gray-500 text-secondary px-4 py-2'
                                onClick={() => setQuantity(Math.max(quantity - 1, 1))}
                            >
                                -
                            </button>
                            <input
                                type="number"
                                value={quantity}
                                min={1}
                                className="border border-gray-500 bg-black text-white text-lg rounded-md py-2 px-4 w-16 text-center"
                                readOnly
                            />
                            <button
                                className='border border-gray-500 text-secondary px-4 py-2'
                                onClick={() => setQuantity(quantity + 1)}
                            >
                                +
                            </button>
                        </div>

                    <div className='flex items-center gap-2'>
                    <button className='bg-transparent border border-white-500 text-secondary  px-8 py-3 text-sm' onClick={()=>dispatch(addToCart({...productdetails,size,quantity,color:selectedcolor}))}>ADD TO CART</button>
                    <button onClick={handleCheckout} className='bg-secondary text-primary px-8 py-3 text-sm active:bg-gray-700'>BUY IT NOW</button>
                    </div>
                    <hr className='mt-8 sm:w-4/5 w-full border-t border-black' />
                    <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                        <p>100% Original Product</p>
                        <p>Cash On Delivery</p>
                        <p>Easy Return and Exchange Policy within 7 Days</p>
                    </div>
                </div>
              </div>
              <MoreSold title="You May Also Like"/>
           </div> 
        </>
    ) : <div className='opacity-0'></div>;
};

export default ProductDetails;