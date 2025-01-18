import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, decreaseQuantity, increaseQuantity, removeFromCart } from '../store/Slices/Cartslice';
import { useLocation, useNavigate } from 'react-router-dom';
import { MdAdd, MdDelete, MdRemove } from "react-icons/md";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalPrice = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

  const handleCheckout = () => {
    const orderData = {
      items: cart.map((product) => ({
        id: product.id,
        name: product.name,
        category:product.category,
        image: product.isCustom 
        ? (product.frontPreview || product.backPreview)
        : product.images[0],
        frontDesignImage:product.frontDesignImageFile,
        backdesignimage:product.backDesignImageFile,
        size: product.size,
        color: product.color,
        quantity: product.quantity,
        price: product.price,
        isCustom: product.isCustom
      })),
      totalPrice,
    };
    dispatch(clearCart());
    navigate('/artivastore/order', {
      state: {
        ...orderData,
        from: "fromCart",
      },
    });
  };
  return (
    <div className="container mx-auto py-8">
      {cart.length === 0 ? (
        // Empty Cart State
        <div className="flex justify-center items-center flex-col">
          
            <p className="text-secondary text-4xl mb-4">Your cart is empty.</p>
            <button
              onClick={() => navigate('/artivastore/collection')}
              className="bg-secondary text-black px-4 py-2 rounded-md hover:bg-gray-300 flex items-center justify-center gap-2"
            >
              ← Continue Shopping
            </button>
          
        </div>
      ) : (
        // Non-Empty Cart State
        <>
          {/* Header */}
          <div className="flex sm:items-center justify-between flex-col sm:flex-row mb-8">
            <h1 className="text-3xl font-bold text-secondary">Your Cart</h1>
            <button
              onClick={() => navigate('/artivastore/collection')}
              className="text-secondary hover:text-gray-300 flex items-center gap-2"
            >
              ← Continue Shopping
            </button>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              {cart.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col sm:flex-row gap-4 py-4 border-b border-gray-200 last:border-0"
                >
                  {/* Product Image */}
                  <div className="relative w-32 h-32 flex items-center justify-center">
                    <img
                      src={product.isCustom 
                        ? (product.frontPreview || product.backPreview)
                        : product.images[0]
                      }
                      alt={product.name}
                      className="absolute inset-0 w-auto h-full object-cover rounded-md"
                    />
                    {console.log(product)}
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 space-y-2">
                    <div className="flex justify-between items-center text-secondary">
                      <h3 className="font-semibold text-lg"> {product.isCustom ? 'Custom Design Product' : product.name}
                        {product.typedText && (
                          <span className="block text-sm text-gray-500">
                            Text: {product.typedText}
                          </span>
                        )}</h3>
                      <p className="font-medium">{(product.price * product.quantity).toFixed(2)} EGP</p>
                    </div>
                    <p className="text-sm text-gray-500">Size: {product.size || 'N/A'}</p>
                    <div className='flex items-center'>
                    <span className='text-sm text-gray-500 mr-2'>Color:</span><button className='w-8 h-8 rounded-full border-2 border-gray-500'style={{color:product.color , backgroundColor:product.color}}></button>
                    </div>
                    

                    {/* Quantity and Remove Button */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border rounded-md text-secondary">
                        <button
                          className="p-2"
                          onClick={() => dispatch(decreaseQuantity({ id: product.id,size:product.size,color:product.color }))}
                        >
                          <MdRemove className="w-4 h-4" />
                        </button>
                        <span className="w-12 text-center">{product.quantity}</span>
                        <button
                          className="p-2"
                          onClick={() => dispatch(increaseQuantity({ id: product.id,size:product.size,color:product.color }))}
                        >
                          <MdAdd className="w-4 h-4" />
                        </button>
                      </div>
                      <button
                        className="text-red-500 hover:text-red-700 p-2"
                        onClick={() => dispatch(removeFromCart({ id: product.id,size:product.size,color:product.color }))}
                      >
                        <MdDelete className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Subtotal</span>
                      <span>{totalPrice.toFixed(2)} EGP</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Shipping</span>
                      <span>Free</span>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between font-semibold text-lg">
                        <span>Total</span>
                        <span>{totalPrice.toFixed(2)} EGP</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-gray-50 border-t border-gray-200 rounded-b-lg">
                  <button onClick={handleCheckout} className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 mb-2">
                    Checkout Now
                  </button>
                  <button
                    className="w-full border border-gray-300 text-gray-700 py-3 rounded-md hover:bg-gray-50"
                    onClick={() => dispatch(clearCart())}
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
