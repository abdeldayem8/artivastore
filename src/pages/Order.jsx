import React from 'react'
import { useLocation } from 'react-router-dom'

const Order = () => {
  const location = useLocation();
  const orderdata = location.state;
  console.log(orderdata)
  return (
    <div className="flex gap-4 flex-col sm:flex-row max-w-4xl mx-auto p-6 text-secondary">
    {/* Delivery Section */}
    <div className="flex-1 sm:pr-4">
      <h2 className="text-2xl font-semibold mb-4">Delivery Details</h2>
      <div className="my-4 relative space-y-4">
        <select
          name="countrycode"
          className="bg-transparent border-2 border-gray-500 w-full p-2 rounded-md"
          defaultValue=""
        >
          <option value="" disabled>
            Select Country
          </option>
          <option value="EG">EGYPT</option>
        </select>
  
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="bg-transparent p-2 border-2 border-gray-500 w-full rounded-md"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="bg-transparent p-2 border-2 border-gray-500 w-full rounded-md"
          />
        </div>
  
        <input
          type="text"
          placeholder="Address"
          className="bg-transparent p-2 border-2 border-gray-500 w-full rounded-md"
        />
  
        <input
          type="text"
          placeholder="Apartment, Suite, etc."
          className="bg-transparent p-2 border-2 border-gray-500 w-full rounded-md"
        />
  
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="City"
            className="bg-transparent p-2 border-2 border-gray-500 w-full rounded-md"
          />
          <input
            type="text"
            placeholder="Governorate"
            className="bg-transparent p-2 border-2 border-gray-500 w-full rounded-md"
          />
        </div>
  
        <input
          type="tel"
          placeholder="Phone"
          className="bg-transparent p-2 border-2 border-gray-500 w-full rounded-md"
        />
      </div>
  
      <h3 className="text-xl font-semibold mt-8 mb-4">Shipping Method</h3>
      <div className="flex items-center justify-between border-2 border-gray-500 p-4 rounded-md">
        <p>Standard</p>
        <p>Free</p>
      </div>
  
      <h3 className="text-xl font-semibold mt-8 mb-4">Payment Method</h3>
      <div className="flex flex-col gap-2 border-2 border-gray-500 p-4 rounded-md">
        <label className="flex items-center">
          <input
            type="radio"
            name="payment"
            value="COD"
            checked
            readOnly
            className="mr-2"
          />
          Cash on Delivery (COD)
        </label>
      </div>
  
      <button
        className="bg-secondary text-primary py-3 px-4 mt-8 w-full rounded-md font-semibold hover:bg-secondary/90 transition-colors"
      >
        Place Order
      </button>
    </div>
  
    {/* Order Summary Section */}
    <div className="flex-shrink-0 sm:w-1/3">
      <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
      <div className="bg-white/5 rounded-lg p-4">
        {orderdata?.items?.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 py-4 border-b border-gray-700 last:border-0"
          >
            <div className="w-20 h-20 flex-shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-auto h-full object-cover rounded-md"
              />
            </div>
            <div className="flex-grow">
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm opacity-75">Quantity: {item.quantity}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">{item.price} EGP</p>
            </div>
          </div>
        ))}
        <div className="mt-4 pt-4">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span className="font-semibold">{orderdata?.totalPrice} EGP</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  

  )
}

export default Order
