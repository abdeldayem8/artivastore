import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return <>
  <div className="h-screen flex flex-col items-center justify-center">
    <div className="w-full max-w-sm rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="First Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
         <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
         <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">
          CREATE
        </button>
        <p className="text-center text-gray-600 mt-4">
          <Link
            to={'/artivastore/'}
            className="text-blue-500 hover:text-blue-600 transition duration-300"
          >
           Return To STore
          </Link>
        </p>
      </div>
    </div>
  </div>
  </>
}

export default Register
