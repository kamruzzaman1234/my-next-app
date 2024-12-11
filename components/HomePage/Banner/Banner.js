import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";

const Banner = ()=>{
    return(
        <div className="py-10">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="w-full lg:w-[849px] lg:h-[486px] ">
                        <div className="space-y-6">
                            <h2 className="text-[60px] lg:text-[80px]  font-bold">Good <span className="text-[#FF7D29]">Food</span>, great memories</h2>
                            <p className="text-[35px]">Enable diners to customize their booking by  <br></br>
                                requesting a specific table location or view.</p>
                            <div className="flex justify-between items-center py-1 border-2 border-gray-200 
                            rounded-l-full rounded-r-full">
                                <div className="w-[120px] lg:w-[197px] ml-2  h-[64px] bg-[#00B047] px-4 rounded-l-full
                                 flex items-center justify-between">
                                    {/* <IoLocationOutline className="w-[18px] h-[18px] text-white"></IoLocationOutline> */}
                                    <img src="https://i.ibb.co.com/fGKsZSs/maps-and-flags-1.png" className="w-[18px] h-[18px]"></img>
                                    <div
                className="flex items-center cursor-pointer"
               
              >
                 <span className="ml-2 text-[18px] text-white font-bold">
                  Location
                </span>
                < FaChevronDown className="text-[18px] text-white " />
               
              </div>
                                </div>
                                <div className="w-[50px] mr-2 rounded-full h-[50px] flex justify-center items-center bg-[#00B047]">
                                    <img src="https://i.ibb.co.com/fdHKWB7/search-interface-symbol-1.png"></img>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="w-full lg:w-[699px] h-[699px]">
                        <img src="https://i.ibb.co.com/m0kZvGV/Coffee-shop-amico-1.png"></img>
                    </div>
                </div>
                <div>
                <div className="w-full lg:w-[1153px] mx-auto">
                    <div className="flex items-center">
                        <h2>Feature</h2>
                    </div>
                    <div className="flex justify-start lg:justify-center items-center py-3">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 bg-white shadow-2xl py-8 px-8">
                        <div className="flex gap-4 items-center">
                            <div>
                                <img src="https://i.ibb.co.com/k1Dzs9h/Group-1.png"
                                 className="w-[38px] h-[40px]"></img>
                            </div>
                            <div>
                                <h3 className="text-[16px] text-[#272343]">Discount</h3>
                                <p className="text-[#9A9CAA]">Every week new sales</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div>
                                <img src="https://i.ibb.co.com/ysdvzdM/delivery-truck.png"
                                 className="w-[38px] h-[40px]"></img>
                            </div>
                            <div>
                                <h3 className="text-[16px] text-[#272343]">Free Delivery </h3>
                                <p className="text-[#9A9CAA]">100% Free for all order</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div>
                                <img src="https://i.ibb.co.com/y4fdspL/24-hours.png"
                                 className="w-[38px] h-[40px]"></img>
                            </div>
                            <div>
                                <h3 className="text-[16px] text-[#272343]">Great Support</h3>
                                <p className="text-[#9A9CAA]">We Care your experience</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div>
                                <img src="https://i.ibb.co.com/mzKZRrw/shield-2x.png"
                                 className="w-[38px] h-[40px]"></img>
                            </div>
                            <div>
                                <h3 className="text-[16px] text-[#272343]">Secure Payment</h3>
                                <p className="text-[#9A9CAA]">100% Secure Payment Method</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Banner;