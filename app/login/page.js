"use client";

import Link from 'next/link';
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
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
        <div className="flex flex-col items-center">
          <h2 className="text-[32px] lg:text-[48px] mb-6 font-semibold">Sign In</h2>
          <form className="w-full max-w-md lg:max-w-none">
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
                  className="absolute top-[20px] right-4 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                </div>
              </div>
              <div className="form-control w-full h-auto mb-6">
                <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4">
                  <div className="flex gap-2 items-center">
                    <input type="checkbox" className="w-[20px] h-[20px]" />
                    <h3 className="text-[16px] lg:text-[20px] text-[#666666]">Remember me</h3>
                  </div>
                  <div>
                    <Link href="/forgetPassword" className="text-[16px] lg:text-[20px] text-[#666666]">Forget Password</Link>
                  </div>
                </div>
              </div>
              <div className="w-full h-[70px] flex justify-center items-center rounded-full bg-[#FF7D29] mb-6">
                <Link href="" className="text-[16px] lg:text-[20px] font-bold text-white">Login</Link>
              </div>
              <div className="w-full flex justify-center">
                <h3 className="text-[16px] lg:text-[20px] text-[#666666]">
                  Don’t have an account? <Link href="/register" className="text-black font-bold">Register</Link>
                </h3>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
