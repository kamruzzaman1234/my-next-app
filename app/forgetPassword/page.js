import Link from 'next/link'
import React from 'react'
const ForgetPassword =  ()=>{
    return(
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
        <div className="max-w-7xl mx-auto">
          <div className="breadcrumbs text-sm text-white">
            <ul>
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
                <div className="flex justify-center flex-col items-center">
          <h2 className="text-[48px] mb-10 font-semibold">Forget  Password</h2>
          <form>
            <div>
              <div className="form-control w-[687px] h-[70px]">
                <input
                  type="email"
                  className="input input-bordered"
                  placeholder="Email"
                />
              </div>
              <div className="w-[687px] h-[70px] flex justify-center items-center
              rounded-l-full rounded-r-full  bg-[#FF7D29] mb-7">
                  <Link href="/setPassword" className="text-[20px] font-bold  text-[#ffffff]">Submit</Link>
              </div>
            </div>
          </form>
        </div>
        </div>
    )
}
export default ForgetPassword