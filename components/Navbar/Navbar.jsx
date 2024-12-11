"use client"; // Add this to make the file a client component in Next.js

import { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white border-b-2 border-gray-50 py-2">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link href="/">
              <img
                src="https://i.ibb.co/MfbxJrz/Group.png"
                alt="Logo"
                className="w-[160px] md:w-[200px] lg:w-[260px] h-auto"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden text-2xl"
            onClick={toggleMobileMenu}
          >
            <FiMenu />
          </button>

          {/* Search Area */}
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } md:flex items-center gap-8 mx-4 flex-col md:flex-row w-full md:w-auto`}
          >
            <div className="relative flex items-center w-full md:w-[498px] border-2 border-[#f8f4f4] rounded-full px-3">
              <IoSearch className="absolute left-2 text-gray-500 text-lg" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-8 py-2 rounded-md text-gray-800 focus:outline-none"
              />
              <button className="absolute right-0 px-4 h-[46px] rounded-r-full bg-[#FF7D29] text-white">
                Search
              </button>
            </div>

            {/* Dropdown */}
            <div className="relative mt-4 md:mt-0">
              <div
                className="flex items-center cursor-pointer"
                onClick={toggleDropdown}
              >
                <span className="ml-2 text-[18px] text-[#1D242D]">
                  All Category
                </span>
                <FaChevronDown className="text-[18px] text-[#1D242D]" />
              </div>

              {isDropdownOpen && (
                <div className="absolute bg-white shadow-lg border mt-2 rounded-md z-10 w-full md:w-auto">
                  <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-gray-200">
                      <Link href="/t-shirt">T-Shirt Product</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200">
                      <Link href="/product">Product</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200">
                      <Link href="/food">Food</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
              <Link
                href="/coupon"
                className="text-[18px] text-[#1D242D] hover:text-yellow-400"
              >
                Coupon
              </Link>
              <Link
                href="/support"
                className="text-[18px] text-[#1D242D] hover:text-yellow-400"
              >
                Support
              </Link>
            </div>
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex gap-5">
            <IoCartOutline className="w-[25px] h-[25px]" />
            <Link href="/login">
              <FaRegUser className="w-[25px] h-[25px]" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 border-t">
          <div className="flex gap-5">
            <IoCartOutline className="w-[25px] h-[25px]" />
            <Link href="/login">
              <FaRegUser className="w-[25px] h-[25px]" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
