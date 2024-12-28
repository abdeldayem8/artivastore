import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'
import API_ENDPOINTS from '../utils/API_ENDPOINTS'
import toast, { Toaster } from 'react-hot-toast'


const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password must not exceed 20 characters"),
})
const Login = () => {
   const { register, handleSubmit,formState: { errors },} = useForm({resolver:zodResolver(loginSchema)});

   const submitform = async (data)=>{
    try {
      const response = await axios.post(API_ENDPOINTS.Login ,{
        email: data.email,
        password: data.password,
      });
      if(response.status === 200){
        localStorage.setItem("token",response.data.data.access_token);
        toast.success(response.data.message,{
          duration:1000,
         }); 
         setTimeout(() => {
          window.location.href = "/artivastore/";
         }, 1000);
      }
      console.log(response.data.message);
      }catch (error) {  
       toast.error(error.response.data.message)
    }
   }
  return <>
    <div className="h-screen flex flex-col items-center">
  <div className="w-full max-w-md rounded-lg p-6">
    <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
    <div className="flex flex-col gap-4">
      <form onSubmit={handleSubmit(submitform)}>
      <input
        type="email"
        placeholder="Email"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4"
        {...register("email")}
      />
       {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}

      <input
        type="password"
        placeholder="Password"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4"
        {...register("password")}
      />
      {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
      <button className="w-full bg-secondary text-white py-2 rounded-md  transition duration-300">
        SIGN IN
      </button>
      </form>
      <p className="text-center text-gray-600 mt-4">
        Don’t have an account?{" "}
        <Link
          to={'/artivastore/register'}
          className="text-secondary hover:text-gray-600 transition duration-300"
        >
          Create Account
        </Link>
      </p>
      <p className="text-center text-gray-600 mt-4">
                <Link
                  to={'/artivastore/'}
                >
                 Return To Store
                </Link>
              </p>
    </div>
  </div>
</div>
<Toaster/>
  </>
}

export default Login
