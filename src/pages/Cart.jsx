import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, decreaseQuantity, increaseQuantity, removeFromCart } from '../store/slices/cartslice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

  return (
    <div className="cart container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      <div className="rounded-lg p-4 text-center">
        {cart.length === 0 ? (
          <>
            <p className="text-center text-secondary mb-4">Your cart is empty.</p>
            <Link className="text-center text-secondary" to={'/artivastore/collection'}>Continue Browsing here.</Link>
          </>
        ) : (
          <>
            {cart.map((product) => (
              <div
                key={product.id}
                className="flex flex-col md:flex-row items-center justify-between mb-4 border-b-2 border-gray-300 pb-4 "
              >
                <div className="flex items-center mb-4 md:mb-0 w-full sm:w-auto">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="md:w-24 h-24 object-cover rounded mr-4"
                  />
                  <div className='w-full'>
                    <p className="text-lg font-medium text-secondary">{product.name}</p>
                    <p className="text-secondary">Price: {product.price} EGP</p>
                  </div>
                </div>
                <div className="btns-cart-wrapper flex items-center">
                  <button
                    className="bg-transparent text-secondary border border-white-500 px-3 py-1 rounded  mr-2"
                    onClick={() => dispatch(decreaseQuantity({ id: product.id }))}
                  >
                    -
                  </button>
                  <span className="mx-4 text-lg text-secondary">{product.quantity}</span>
                  <button
                    className="bg-transparent text-secondary border border-white-500 px-3 py-1 rounded  mr-2"
                    onClick={() => dispatch(increaseQuantity({ id: product.id }))}
                  >
                    +
                  </button>
                </div>
                <button
                  className="btn-remove bg-transparent border border-white-500 text-white px-8 py-3 text-sm active:bg-gray-700"
                  onClick={() => dispatch(removeFromCart({ id: product.id }))}
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="flex flex-col md:flex-row justify-between items-center border-b pb-4 mb-4">
              <h3 className="text-xl font-semibold mb-4 text-secondary">Total Price: {totalPrice.toFixed(2)} EGP</h3>
              <div className='flex items-center gap-2'>
              <button
                className="bg-transparent  text-secondary border border-white-500 px-8 py-3 text-sm"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>
              <button className='bg-secondary text-black px-8 py-3 text-sm active:bg-gray-700'>BUY IT NOW</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
