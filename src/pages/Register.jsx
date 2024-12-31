import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { fetchregister } from '../store/thunks/registerthunk';


const registerSchema = z
  .object({
    first_name: z
      .string()
      .min(3, "First Name must be at least 3 characters")
      .max(20, "First Name must not exceed 20 characters"),
      last_name: z
      .string()
      .min(3, "Last Name must be at least 3 characters")
      .max(20, "Last Name must not exceed 20 characters"),
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password must not exceed 20 characters"),
      password_confirmation: z.string().min(8, "Confirm Password must be at least 8 characters"),
    phone: z
    .string()
    .regex(/^01[0-25][0-9]{8}$/, {
      message: "Invalid phone number. It should start with 01 and have 11 digits.",
    })
      .optional(),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.password_confirmation) {
      ctx.addIssue({
        path: ["confirm"], //  confirm field
        message: "Passwords do not match",
      });
    }
  });

const Register = () => {

  const { register, handleSubmit,formState: { errors },} = useForm({resolver:zodResolver(registerSchema)});
  const dispatch =useDispatch();
  const navigate = useNavigate();


  const submitForm = async (data) => {
    try {
      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key]);
      }
     
      // Await the thunk and unwrap to handle success/failure
     await dispatch(fetchregister(formData)).unwrap();
      // On success
      toast.success('Register Successfully', {
        duration: 1000,
      });
     navigate('/artivastore/login');
    } catch (error) {
      // On failure
      toast.error(error.response.data.message)
    }
  };
 
  return (
    <>
      <div className="h-screen flex flex-col items-center">
        <div className="w-full max-w-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
          <div className="flex flex-col gap-4">
            <form onSubmit={handleSubmit(submitForm)}>
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4"
                {...register("first_name")}
              />
              {errors.first_name && (
                <p className="text-red-500 text-sm">{errors.first_name.message}</p>
              )}

              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4"
                {...register("last_name")}
              />
              {errors.last_name && (
                <p className="text-red-500 text-sm">{errors.last_name.message}</p>
              )}

              <input
                type="text"
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

              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4"
                {...register("password_confirmation")}
              />
              {errors.password_confirmation && (
                <p className="text-red-500 text-sm">{errors.password_confirmation.message}</p>
              )}
              <input
                type="phone"
                placeholder="Phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4"
                {...register("phone")}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
              <button className="w-full bg-secondary text-white py-2 rounded-md transition duration-300 cursor-pointer">
                CREATE ACCOUNT
              </button>
            </form>
            <p className="text-center text-gray-600 mt-4">
              <Link
                to={"/artivastore/"}
                className="text-secondary hover:text-gray-600 transition duration-300"
              >
                Return To Store
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;