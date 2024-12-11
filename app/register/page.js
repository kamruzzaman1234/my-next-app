"use client";

import Link from 'next/link';
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div
        className="py-20"
        style={{
          backgroundImage: `url('https://i.ibb.co.com/zNr4Qkm/pexels-igor-ovsyannykov-56123-205961.jpg')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="breadcrumbs text-sm text-white">
            <ul className="flex gap-2">
              <li>
                <Link href="/">
                  <img
                    src="https://i.ibb.co.com/dQk4qYx/Group-2.png"
                    className="w-[16px] h-[17px]"
                    alt="Home"
                  />
                </Link>
              </li>
              <li>
                <Link href="/login">Sign In</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-10 px-4">
        <div className="flex flex-col items-center bg-[#F6F6F6] drop-shadow-2xl p-6 md:p-10 rounded-lg">
          <h2 className="text-[32px] md:text-[48px] mb-6 font-semibold text-center">Create Account</h2>
          <form className="w-full max-w-md md:max-w-lg">
            <div>
              <div className="form-control w-full h-[70px] mb-4">
                <input
                  type="email"
                  className="input input-bordered w-full"
                  placeholder="Email"
                />
              </div>
              <div className="form-control w-full h-[70px] mb-4 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="input input-bordered w-full pr-12"
                  placeholder="Password"
                />
                <div
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                </div>
              </div>
              <div className="form-control w-full h-[70px] mb-4 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="input input-bordered w-full pr-12"
                  placeholder="Confirm Password"
                />
                <div
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                </div>
              </div>
              <div className="form-control w-full h-auto mb-6">
                <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4">
                  <div className="flex gap-2 items-center">
                    <input type="checkbox" className="w-[20px] h-[20px]" />
                    <h3 className="text-[16px] md:text-[20px] text-[#666666]">Accept All Terms & Conditions</h3>
                  </div>
                </div>
              </div>
              <div className="w-full h-[70px] flex justify-center items-center rounded-full bg-[#FF7D29] mb-6">
                <Link href="" className="text-[16px] md:text-[20px] font-bold text-white">Create New User</Link>
              </div>
              <div className="w-full h-auto flex items-center px-4 gap-4 bg-[#F7f7f7] border-2 border-gray-200 rounded-lg">
                <button>
                  <img src="https://i.ibb.co.com/Rv1NVMm/Icon.png" alt="Google Icon" className="w-6 h-6 md:w-8 md:h-8" />
                </button>
                <div className="flex justify-center w-full">
                  <button className="text-[16px] md:text-[20px] font-bold text-black">Continue With Google</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
