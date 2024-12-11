"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div>
      <div
        className="py-20"
        style={{
          backgroundImage: `url('https://i.ibb.co/zNr4Qkm/pexels-igor-ovsyannykov-56123.jpg')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="breadcrumbs text-sm text-white">
            <ul className="flex gap-2">
              <li>
                <Link href="/">
                  <img
                    src="https://i.ibb.co/dQk4qYx/Group-2.png"
                    className="w-[16px] h-[17px]"
                    alt="Home"
                  />
                </Link>
              </li>
              <li>
                <Link href="/login">Set Password</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col py-6">
      <h2 className="text-[48px] mb-10 font-semibold">Set Password</h2>
        <form>
          {/* Password Field */}
          <div className="form-control w-[687px] h-[70px] mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              className="input input-bordered w-full pr-12"
              placeholder="Password"
            />
            <div
              className="absolute top-3 right-4 transform -translate-y-1/2 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </div>
          </div>
          {/* Confirm Password Field */}
          <div className="form-control w-[687px] h-[70px] mb-4 relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="input input-bordered w-full pr-12"
              placeholder="Confirm Password"
            />
            <div
              className="absolute top-3 right-4 transform -translate-y-1/2 cursor-pointer"
              onClick={toggleConfirmPasswordVisibility}
            >
              {showConfirmPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </div>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="btn rounded-l-full rounded-r-full text-white hover:bg-[#FF7D29] bg-[#FF7D29] w-full"
          >
            Set Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default SetPassword;
