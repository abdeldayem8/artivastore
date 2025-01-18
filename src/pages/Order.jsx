import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import API_ENDPOINTS from '../utils/API_ENDPOINTS';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {z} from "zod"
import toast from 'react-hot-toast';

const orderSchema = z.object({
  first_name: z.string().refine(value => value?.trim() !== '', { message: 'First Name is required' }),
  
  last_name: z.string().refine(value => value?.trim() !== '', { message: 'Last Name is required' }),

  email: z.string().email("Invalid email address").refine(value => value?.trim() !== '', { message: 'Email is required' }),

  phone: z
  .string()
  .regex(/^01[0-25][0-9]{8}$/, {
    message: "Invalid phone number. It should start with 01 and have 11 digits.",
  })
    .optional(),

  address: z.string().refine(value => value?.trim() !== '', { message: 'Address is required' }),

  city: z.string().or(z.number()).refine(value => value?.trim() !== '', { message: 'City is required' }),
});

const Order = () => {

  const { register, handleSubmit, setValue, formState: { errors }} = useForm({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      city: '' // Initialize with empty string
    }
  });
   const location = useLocation();
   const orderdata = location.state;
   const prevpage = location.state.from;
   const [cities, setCities] = useState([]); 
   const [shippingPrice, setShippingPrice] = useState(null); 

  useEffect(()=>{
    const getCities = async()=>{
      try {
        const response = await axios.post(API_ENDPOINTS.City);
        const fetchedCities = response.data.data
         setCities(fetchedCities);
         if (fetchedCities.length > 0) {
           const firstCity = fetchedCities[0];
          setValue("city", firstCity.id.toString()); // Convert ID to string
           setShippingPrice(parseFloat(firstCity.price) || 0); // Set initial shipping price
         }
     } catch (error) {
       console.log(error)
     }
    }
   getCities()
  },[setValue])

  const handleCityChange = (event) => {

    const cityId = event.target.value;

    if (cities.length === 0) {
        console.log("Cities state is not populated yet.");
        return;
    }

    // Ensure that the city ID is compared correctly by converting it to a string
    const cityData = cities.find((c) => c.id.toString() === cityId);

    if (cityData) {
        setShippingPrice(parseFloat(cityData.price) || 0); // Update price
    } else {
        setShippingPrice(null); // Reset price
    }
};


const submitOrder = async (formDataValues) => {
  // Check if items are available before proceeding
  if (!orderdata?.items || orderdata.items.length === 0) {
    toast.error("No items in the order.");
    return;
  }

  try {
    const formData = new FormData();
    
    // Add form data to FormData - optimize by checking value existence first
    for (const [key, value] of Object.entries(formDataValues)) {
      if (value != null) { // Handles both undefined and null
        formData.append(key, value);
      }
    }

    const { items } = orderdata;
    
    // Pre-process items to separate normal and custom items
    if (prevpage === "fromCart") {
      // Process items in parallel using separate counters
      const normalItems = [];
      const customItems = [];
      
      items.forEach(item => {
        if (item.isCustom) {
          customItems.push(item);
        } else {
          normalItems.push(item);
        }
      });

      // Process normal items
      normalItems.forEach((item, index) => {
        formData.append(`items[${index}][product_id]`, item.id);
        formData.append(`items[${index}][size]`, item.size);
        formData.append(`items[${index}][color]`, item.color);
        formData.append(`items[${index}][quantity]`, item.quantity);
      });

      // Process custom items - optimize image handling
      await Promise.all(customItems.map(async (item, index) => {
        formData.append(`special_items[${index}][name]`, item.category);
        formData.append(`special_items[${index}][size]`, item.size);
        formData.append(`special_items[${index}][color]`, item.color);
        formData.append(`special_items[${index}][quantity]`, item.quantity);

        // Optimize image processing
        if (item.frontDesignImage) {
          // Compress image before appending
          const compressedFront = await compressImage(item.frontDesignImage);
          formData.append(`special_items[${index}][image][0]`, compressedFront);
        }
        if (item.backdesignimage) {
          const compressedBack = await compressImage(item.backdesignimage);
          formData.append(`special_items[${index}][image][1]`, compressedBack);
        }
      }));

    } else if (prevpage === "fromproduct") {
      // Process normal product items
      items.forEach((item, index) => {
        formData.append(`items[${index}][product_id]`, item.id);
        formData.append(`items[${index}][size]`, item.size);
        formData.append(`items[${index}][color]`, item.color);
        formData.append(`items[${index}][quantity]`, item.quantity);
      });

    } else if (prevpage === "fromCustom") {
      // Process custom items with optimized image handling
      await Promise.all(items.map(async (item, index) => {
        formData.append(`special_items[${index}][name]`, item.category);
        formData.append(`special_items[${index}][size]`, item.size);
        formData.append(`special_items[${index}][color]`, item.color);
        formData.append(`special_items[${index}][quantity]`, item.quantity);

        if (item.front) {
          const compressedFront = await compressImage(item.front);
          formData.append(`special_items[${index}][image][0]`, compressedFront);
        }
        if (item.back) {
          const compressedBack = await compressImage(item.back);
          formData.append(`special_items[${index}][image][1]`, compressedBack);
        }
      }));
    }
    console.time()
    // Make the request with optimized settings
    const response = await axios.post(API_ENDPOINTS.Order, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      // Add timeout and optimize axios settings
      timeout: 30000, // 30 seconds timeout
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
    });
    console.timeEnd()

    toast.success("Order submitted successfully!");
    
  } catch (error) {
    toast.error(error.message);
  }
};

// Helper function to compress images
const compressImage = async (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Calculate new dimensions (max 1024px width/height while maintaining aspect ratio)
        let width = img.width;
        let height = img.height;
        const maxSize = 1024;
        
        if (width > height && width > maxSize) {
          height = (height * maxSize) / width;
          width = maxSize;
        } else if (height > maxSize) {
          width = (width * maxSize) / height;
          height = maxSize;
        }

        canvas.width = width;
        canvas.height = height;
        
        // Draw and compress
        ctx.drawImage(img, 0, 0, width, height);
        
        // Convert to blob with reduced quality
        canvas.toBlob(
          (blob) => {
            resolve(new File([blob], file.name, {
              type: 'image/jpeg',
              lastModified: Date.now(),
            }));
          },
          'image/jpeg',
          0.7 // Compression quality (0.7 = 70% quality)
        );
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  });
};

  
  return (
    <div className="flex gap-4 flex-col sm:flex-row max-w-4xl mx-auto p-6 text-secondary">
    {/* Delivery Section */}
    <div className="flex-1 sm:pr-4">
      <h2 className="text-2xl font-semibold mb-4">Delivery Details</h2>
    <form onSubmit={handleSubmit(submitOrder)}>
      <div className="my-4 relative space-y-4">
        {/* names */}
        <div className="grid grid-cols-2 gap-4">
          <input
          {...register("first_name")}
            type="text"
            placeholder="First Name"
            className="bg-transparent p-2 border-2 border-gray-500 w-full rounded-md"
          />
          {errors.first_name && <p className="text-red-500">{errors.first_name.message}</p>}
          
          <input
          {...register("last_name")}
            type="text"
            placeholder="Last Name"
            className="bg-transparent p-2 border-2 border-gray-500 w-full rounded-md"
          />
          {errors.last_name && <p className="text-red-500">{errors.last_name.message}</p>}
        </div>
        {/* mail,address,city,phone and payment */}
        <input
        {...register("email")}
          type="email"
          placeholder="Email"
          className="bg-transparent p-2 border-2 border-gray-500 w-full rounded-md"
        />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <input
        {...register("address")}
          type="text"
          placeholder="Address"
          className="bg-transparent p-2 border-2 border-gray-500 w-full rounded-md"
        />
         {errors.address && <p className="text-red-500">{errors.address.message}</p>}
         <select
              {...register("city")}
              onChange={(e) => {
                handleCityChange(e);
                register("city").onChange(e);
              }}
              className="bg-transparent p-2 border-2 border-gray-500 w-full rounded-md"
            >
              {cities.map((city) => (
                <option key={city.id} value={city.id.toString()} className='text-primary'>
                  {city.name}
                </option>
              ))}
            </select>
            {errors.city && <p className="text-red-500">{errors.city.message}</p>}

          <input
        {...register("phone")}
          type="tel"
          placeholder="Phone"
          className="bg-transparent p-2 border-2 border-gray-500 w-full rounded-md"
        />
         {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
      
      </div>
  
      <h3 className="text-xl font-semibold mt-8 mb-4">Shipping Method</h3>
      <div className="flex items-center justify-between border-2 border-gray-500 p-4 rounded-md">
        <p>Standard</p>
        <p>{shippingPrice === 0 ? "Free" : `${shippingPrice} EGP`}</p>
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
        {'Complete Order'}
      </button>
    </form>
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
            <span className="font-semibold">{orderdata?.totalPrice || orderdata?.items[0].price} EGP</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Order
