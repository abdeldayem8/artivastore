import React, { useState } from 'react'
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return <>
   <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
        {/* Logo */}
        <div className="logo">
          <h2 className="text-2xl font-bold">Artiva</h2>
        </div>

        {/* Mobile Menu Icon */}
        <div className="cursor-pointer lg:hidden" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex lg:gap-4 items-center">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-1 focus:outline-none"
            >
              <span>Collections</span>
              <FaChevronDown
                className={`transition-transform ${
                  isDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white text-gray-800 rounded-md shadow-lg p-2 w-40">
                <Link to="/collections/pants">
                  <li className="hover:bg-gray-200 p-2 rounded-md">Pants</li>
                </Link>
                <Link to="/collections/t-shirts">
                  <li className="hover:bg-gray-200 p-2 rounded-md">T-Shirts</li>
                </Link>
              </div>
            )}
          </div>
          <Link to="/login">
            <li>Login</li>
          </Link>
          <Link to="/register">
            <li>Register</li>
          </Link>
        </ul>
      </nav>

      {/* Mobile Nav Links */}
      {isMobileMenuOpen && (
        <ul className="flex flex-col items-start gap-4 p-4 bg-gray-700 text-white lg:hidden">
          <Link to="/">
            <li className="py-2">Home</li>
          </Link>
          <Link to="/about">
            <li className="py-2">About</li>
          </Link>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-1 focus:outline-none py-2"
            >
              <span>Collections</span>
              <FaChevronDown
                className={`transition-transform ${
                  isDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isDropdownOpen && (
              <div className="ml-4 bg-white text-gray-800 rounded-md shadow-lg p-2 w-40">
                <Link to="/collections/pants">
                  <li className="hover:bg-gray-200 p-2 rounded-md">Pants</li>
                </Link>
                <Link to="/collections/t-shirts">
                  <li className="hover:bg-gray-200 p-2 rounded-md">T-Shirts</li>
                </Link>
              </div>
            )}
          </div>
          <Link to="/login">
            <li className="py-2">Login</li>
          </Link>
          <Link to="/register">
            <li className="py-2">Register</li>
          </Link>
        </ul>
      )}
    </>
}

export default Navbar
