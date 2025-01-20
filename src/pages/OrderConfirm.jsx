import React from 'react'
import { useLocation } from 'react-router-dom';

const OrderConfirm = () => {
    const location=useLocation()
   const {orderdata,shippingPrice} = location.state;
   const totalItemPrice =  orderdata?.items?.reduce((total, item) => total + (item.price * item.quantity), 0);
  return (
    <div className="order-confirmation text-secondary">
    <h1 className="text-center text-2xl font-semibold text-success">Order Successful!</h1>
    <p className="text-center">Thank you for your order! Your order has been successfully placed.</p>

    <div className="order-details my-6">
        <h3 className="mt-4 text-lg font-semibold">Order Summary:</h3>
        <ul className="order-summary">
            {orderdata?.items?.map((item) => (
                <li key={item.id} className="flex justify-between">
                    <span>{item.name} (x{item.quantity})</span>
                    <span>{item.price * item.quantity} EGP</span>
                </li>
            ))}
        </ul>

        {/* Shipping Price */}
        <h3 className="mt-4 text-lg font-semibold">Shipping Price:</h3>
        <p>{shippingPrice} EGP</p>

        {/* Final Price with Shipping */}
        <h3 className="mt-4 text-lg font-semibold">Final Amount (Including Shipping):</h3>
        <p>{(totalItemPrice + shippingPrice)} EGP</p>

        <div className="mt-6 text-center">
            <p>For any questions, please contact our support team.</p>
        </div>
    </div>
</div>
  )
}

export default OrderConfirm
