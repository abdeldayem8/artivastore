import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { useDispatch, useSelector } from 'react-redux'
import { fetchlogin } from '@store/Thunks/LoginThunk'



const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password must not exceed 20 characters"),
})
const Login = () => {

   const { register, handleSubmit,formState: { errors },} = useForm({resolver:zodResolver(loginSchema)});
   const navigate = useNavigate();
   const dispatch = useDispatch()
   const {loading,error} =useSelector((state)=>state.login)

   const submitform = (data) => {
    dispatch(fetchlogin({ email: data.email, password: data.password, navigate }));
  };
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
     <button 
  className="w-full text-secondary bg-primary dark:bg-secondary dark:text-primary py-2 rounded-md transition duration-300" 
  disabled={loading}>
  {loading ? 'Logging in...' : 'Login'}
</button>
      </form>
      <p className="text-center text-gray-600 mt-4">
        Don’t have an account?{" "}
        <Link
          to={'/artivastore/register'}
          className="text-primary dark:text-secondary hover:text-gray-600 transition duration-300"
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
  </>
}

export default Login
