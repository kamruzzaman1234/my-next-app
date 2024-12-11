import Link from 'next/link';
import React from 'react';
import { FaStar } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaChevronDown } from 'react-icons/fa';
import { FaSearch } from "react-icons/fa";


const AllResturant = ()=>{
    return(
        <div className="py-10">
            <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div>
                        <h2 className="text-[48px] font-medium">Explore
                         <span className="text-[#FF7D29]">Top Restaurants</span></h2>
                         <p className="text-[24px]">Check your city Near by <br></br> Restaurant</p>
                    </div>
                <div className="border-2 w-[455px] flex justify-between items-center  border-gray-200 rounded-l-full rounded-r-full p-1">
                    <div className="w-[197px] h-[65px] bg-[#FF7D29] flex px-3
                     justify-between items-center rounded-l-full">
                        <CiLocationOn className="text-white w-[18px] h-[18px]"></CiLocationOn>
                        <h2 className="flex gap-3 items-center text-[20px]
                         text-white">Location <FaChevronDown></FaChevronDown> </h2>
                    </div>
                    <div className="p-3 bg-[#FF7D29] w-[50px] h-[50px] 
                    flex justify-center rounded-full
                     items-center">
                        <FaSearch className="text-white"></FaSearch>
                    </div>
                
                 </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-5">
                    <div className="p-3 border-2 rounded-lg">
                    <div className="card bg-base-100  shadow-xl">
                <figure>
                <img
                src="https://i.ibb.co.com/tXCL4fr/Rectangle-2.png"
                alt="Shoes"  className="w-[470px] h-[321px]"/>
                </figure>
                <div className="space-y-4 p-2">
                <div className="flex justify-between">
                    <div>
                        <h2 className="text-[32px] font-medium">Trattoria dall'Oste</h2>
                    </div>
                    <div className="flex gap-2 items-center">
                        <FaStar className="text-[#FFC60B] w-[26px]
                         h-[26px]"></FaStar>
                        <h3 className="text-[24px] font-medium">(4.5)</h3>
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <CiLocationOn className="w-[27px] h-[27px]"></CiLocationOn>
                    <p className="text-[16px]">Via Luigi Alamanni, 3, 50123 Firenze</p>
                </div>
                <div>
                    <p className="text-[12px]">Featuring seasonal and sustainable seafood that is flown in fresh daily,
                         our chef-driven menu proves that no matter when you’re
                     dining, seafood can be truly exceptional.  <span className="font-bold text-black">Read More...</span></p>
                </div>
                <div className="">
                    <Link href="/visitResturant" className="btn w-full bg-[#00B047]
                     text-[16px] hover:bg-[#00B047] text-white">Visit</Link>
                </div>
                </div>
 
            </div>
                </div>
                <div className="p-3 border-2 rounded-lg">
                    <div className="card bg-base-100  shadow-xl">
                <figure>
                <img
                src="https://i.ibb.co.com/tXCL4fr/Rectangle-2.png"
                alt="Shoes"  className="w-[470px] h-[321px]"/>
                </figure>
                <div className="space-y-4 p-2">
                <div className="flex justify-between">
                    <div>
                        <h2 className="text-[32px] font-medium">Trattoria dall'Oste</h2>
                    </div>
                    <div className="flex gap-2 items-center">
                        <FaStar className="text-[#FFC60B] w-[26px]
                         h-[26px]"></FaStar>
                        <h3 className="text-[24px] font-medium">(4.5)</h3>
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <CiLocationOn className="w-[27px] h-[27px]"></CiLocationOn>
                    <p className="text-[16px]">Via Luigi Alamanni, 3, 50123 Firenze</p>
                </div>
                <div>
                    <p className="text-[12px]">Featuring seasonal and sustainable seafood that is flown in fresh daily,
                         our chef-driven menu proves that no matter when you’re
                     dining, seafood can be truly exceptional.  <span className="font-bold text-black">Read More...</span></p>
                </div>
                <div className="">
                    <Link href="/visitResturant" className="btn w-full bg-[#00B047]
                     text-[16px] hover:bg-[#00B047] text-white">Visit</Link>
                </div>
                </div>
 
            </div>
                </div>
                <div className="p-3 border-2 rounded-lg">
                    <div className="card bg-base-100  shadow-xl">
                <figure>
                <img
                src="https://i.ibb.co.com/tXCL4fr/Rectangle-2.png"
                alt="Shoes"  className="w-[470px] h-[321px]"/>
                </figure>
                <div className="space-y-4 p-2">
                <div className="flex justify-between">
                    <div>
                        <h2 className="text-[32px] font-medium">Trattoria dall'Oste</h2>
                    </div>
                    <div className="flex gap-2 items-center">
                        <FaStar className="text-[#FFC60B] w-[26px]
                         h-[26px]"></FaStar>
                        <h3 className="text-[24px] font-medium">(4.5)</h3>
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <CiLocationOn className="w-[27px] h-[27px]"></CiLocationOn>
                    <p className="text-[16px]">Via Luigi Alamanni, 3, 50123 Firenze</p>
                </div>
                <div>
                    <p className="text-[12px]">Featuring seasonal and sustainable seafood that is flown in fresh daily,
                         our chef-driven menu proves that no matter when you’re
                     dining, seafood can be truly exceptional.  <span className="font-bold text-black">Read More...</span></p>
                </div>
                <div className="">
                    <Link href="/visitResturant" className="btn w-full bg-[#00B047]
                     text-[16px] hover:bg-[#00B047] text-white">Visit</Link>
                </div>
                </div>
 
            </div>
                </div>
                <div className="p-3 border-2 rounded-lg">
                    <div className="card bg-base-100  shadow-xl">
                <figure>
                <img
                src="https://i.ibb.co.com/tXCL4fr/Rectangle-2.png"
                alt="Shoes"  className="w-[470px] h-[321px]"/>
                </figure>
                <div className="space-y-4 p-2">
                <div className="flex justify-between">
                    <div>
                        <h2 className="text-[32px] font-medium">Trattoria dall'Oste</h2>
                    </div>
                    <div className="flex gap-2 items-center">
                        <FaStar className="text-[#FFC60B] w-[26px]
                         h-[26px]"></FaStar>
                        <h3 className="text-[24px] font-medium">(4.5)</h3>
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <CiLocationOn className="w-[27px] h-[27px]"></CiLocationOn>
                    <p className="text-[16px]">Via Luigi Alamanni, 3, 50123 Firenze</p>
                </div>
                <div>
                    <p className="text-[12px]">Featuring seasonal and sustainable seafood that is flown in fresh daily,
                         our chef-driven menu proves that no matter when you’re
                     dining, seafood can be truly exceptional.  <span className="font-bold text-black">Read More...</span></p>
                </div>
                <div className="">
                    <Link href="/visitResturant" className="btn w-full bg-[#00B047]
                     text-[16px] hover:bg-[#00B047] text-white">Visit</Link>
                </div>
                </div>
 
            </div>
                </div>
                <div className="p-3 border-2 rounded-lg">
                    <div className="card bg-base-100  shadow-xl">
                <figure>
                <img
                src="https://i.ibb.co.com/tXCL4fr/Rectangle-2.png"
                alt="Shoes"  className="w-[470px] h-[321px]"/>
                </figure>
                <div className="space-y-4 p-2">
                <div className="flex justify-between">
                    <div>
                        <h2 className="text-[32px] font-medium">Trattoria dall'Oste</h2>
                    </div>
                    <div className="flex gap-2 items-center">
                        <FaStar className="text-[#FFC60B] w-[26px]
                         h-[26px]"></FaStar>
                        <h3 className="text-[24px] font-medium">(4.5)</h3>
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <CiLocationOn className="w-[27px] h-[27px]"></CiLocationOn>
                    <p className="text-[16px]">Via Luigi Alamanni, 3, 50123 Firenze</p>
                </div>
                <div>
                    <p className="text-[12px]">Featuring seasonal and sustainable seafood that is flown in fresh daily,
                         our chef-driven menu proves that no matter when you’re
                     dining, seafood can be truly exceptional.  <span className="font-bold text-black">Read More...</span></p>
                </div>
                <div className="">
                    <Link href="/visitResturant" className="btn w-full bg-[#00B047]
                     text-[16px] hover:bg-[#00B047] text-white">Visit</Link>
                </div>
                </div>
 
            </div>
                </div>
                <div className="p-3 border-2 rounded-lg">
                    <div className="card bg-base-100  shadow-xl">
                <figure>
                <img
                src="https://i.ibb.co.com/tXCL4fr/Rectangle-2.png"
                alt="Shoes"  className="w-[470px] h-[321px]"/>
                </figure>
                <div className="space-y-4 p-2">
                <div className="flex justify-between">
                    <div>
                        <h2 className="text-[32px] font-medium">Trattoria dall'Oste</h2>
                    </div>
                    <div className="flex gap-2 items-center">
                        <FaStar className="text-[#FFC60B] w-[26px]
                         h-[26px]"></FaStar>
                        <h3 className="text-[24px] font-medium">(4.5)</h3>
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <CiLocationOn className="w-[27px] h-[27px]"></CiLocationOn>
                    <p className="text-[16px]">Via Luigi Alamanni, 3, 50123 Firenze</p>
                </div>
                <div>
                    <p className="text-[12px]">Featuring seasonal and sustainable seafood that is flown in fresh daily,
                         our chef-driven menu proves that no matter when you’re
                     dining, seafood can be truly exceptional.  <span className="font-bold text-black">Read More...</span></p>
                </div>
                <div className="">
                    <Link href="/visitResturant" className="btn w-full bg-[#00B047]
                     text-[16px] hover:bg-[#00B047] text-white">Visit</Link>
                </div>
                </div>
 
            </div>
                </div>
                <div className="p-3 border-2 rounded-lg">
                    <div className="card bg-base-100  shadow-xl">
                <figure>
                <img
                src="https://i.ibb.co.com/nq2C2CZ/Rectangle-2-2.png"
                alt="Shoes"  className="w-[470px] h-[321px]"/>
                </figure>
                <div className="space-y-4 p-2">
                <div className="flex justify-between">
                    <div>
                        <h2 className="text-[32px] font-medium">Trattoria dall'Oste</h2>
                    </div>
                    <div className="flex gap-2 items-center">
                        <FaStar className="text-[#FFC60B] w-[26px]
                         h-[26px]"></FaStar>
                        <h3 className="text-[24px] font-medium">(4.5)</h3>
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <CiLocationOn className="w-[27px] h-[27px]"></CiLocationOn>
                    <p className="text-[16px]">Via Luigi Alamanni, 3, 50123 Firenze</p>
                </div>
                <div>
                    <p className="text-[12px]">Featuring seasonal and sustainable seafood that is flown in fresh daily,
                         our chef-driven menu proves that no matter when you’re
                     dining, seafood can be truly exceptional.  <span className="font-bold text-black">Read More...</span></p>
                </div>
                <div className="">
                    <Link href="/visitResturant" className="btn w-full bg-[#00B047]
                     text-[16px] hover:bg-[#00B047] text-white">Visit</Link>
                </div>
                </div>
 
            </div>
                </div>
                <div className="p-3 border-2 rounded-lg">
                    <div className="card bg-base-100  shadow-xl">
                <figure>
                <img
                src="https://i.ibb.co.com/tXCL4fr/Rectangle-2.png"
                alt="Shoes"  className="w-[470px] h-[321px]"/>
                </figure>
                <div className="space-y-4 p-2">
                <div className="flex justify-between">
                    <div>
                        <h2 className="text-[32px] font-medium">Trattoria dall'Oste</h2>
                    </div>
                    <div className="flex gap-2 items-center">
                        <FaStar className="text-[#FFC60B] w-[26px]
                         h-[26px]"></FaStar>
                        <h3 className="text-[24px] font-medium">(4.5)</h3>
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <CiLocationOn className="w-[27px] h-[27px]"></CiLocationOn>
                    <p className="text-[16px]">Via Luigi Alamanni, 3, 50123 Firenze</p>
                </div>
                <div>
                    <p className="text-[12px]">Featuring seasonal and sustainable seafood that is flown in fresh daily,
                         our chef-driven menu proves that no matter when you’re
                     dining, seafood can be truly exceptional.  <span className="font-bold text-black">Read More...</span></p>
                </div>
                <div className="">
                    <Link href="/visitResturant" className="btn w-full bg-[#00B047]
                     text-[16px] hover:bg-[#00B047] text-white">Visit</Link>
                </div>
                </div>
 
            </div>
                </div>
                <div className="p-3 border-2 rounded-lg">
                    <div className="card bg-base-100  shadow-xl">
                <figure>
                <img
                src="https://i.ibb.co.com/nq2C2CZ/Rectangle-2-2.png"
                alt="Shoes"  className="w-[470px] h-[321px]"/>
                </figure>
                <div className="space-y-4 p-2">
                <div className="flex justify-between">
                    <div>
                        <h2 className="text-[32px] font-medium">Trattoria dall'Oste</h2>
                    </div>
                    <div className="flex gap-2 items-center">
                        <FaStar className="text-[#FFC60B] w-[26px]
                         h-[26px]"></FaStar>
                        <h3 className="text-[24px] font-medium">(4.5)</h3>
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <CiLocationOn className="w-[27px] h-[27px]"></CiLocationOn>
                    <p className="text-[16px]">Via Luigi Alamanni, 3, 50123 Firenze</p>
                </div>
                <div>
                    <p className="text-[12px]">Featuring seasonal and sustainable seafood that is flown in fresh daily,
                         our chef-driven menu proves that no matter when you’re
                     dining, seafood can be truly exceptional.  <span className="font-bold text-black">Read More...</span></p>
                </div>
                <div className="">
                    <Link href="/visitResturant" className="btn w-full bg-[#00B047]
                     text-[16px] hover:bg-[#00B047] text-white">Visit</Link>
                </div>
                </div>
 
            </div>
                </div>
                <div className="p-3 border-2 rounded-lg">
                    <div className="card bg-base-100  shadow-xl">
                <figure>
                <img
                src="https://i.ibb.co.com/pPBythS/Rectangle-2-1.png"
                alt="Shoes"  className="w-[470px] h-[321px]"/>
                </figure>
                <div className="space-y-4 p-2">
                <div className="flex justify-between">
                    <div>
                        <h2 className="text-[32px] font-medium">Trattoria dall'Oste</h2>
                    </div>
                    <div className="flex gap-2 items-center">
                        <FaStar className="text-[#FFC60B] w-[26px]
                         h-[26px]"></FaStar>
                        <h3 className="text-[24px] font-medium">(4.5)</h3>
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <CiLocationOn className="w-[27px] h-[27px]"></CiLocationOn>
                    <p className="text-[16px]">Via Luigi Alamanni, 3, 50123 Firenze</p>
                </div>
                <div>
                    <p className="text-[12px]">Featuring seasonal and sustainable seafood that is flown in fresh daily,
                         our chef-driven menu proves that no matter when you’re
                     dining, seafood can be truly exceptional.  <span className="font-bold text-black">Read More...</span></p>
                </div>
                <div className="">
                    <Link href="/visitResturant" className="btn w-full bg-[#00B047]
                     text-[16px] hover:bg-[#00B047] text-white">Visit</Link>
                </div>
                </div>
 
            </div>
                </div>
                <div className="p-3 border-2 rounded-lg">
                    <div className="card bg-base-100  shadow-xl">
                <figure>
                <img
                src="https://i.ibb.co.com/tXCL4fr/Rectangle-2.png"
                alt="Shoes"  className="w-[470px] h-[321px]"/>
                </figure>
                <div className="space-y-4 p-2">
                <div className="flex justify-between">
                    <div>
                        <h2 className="text-[32px] font-medium">Trattoria dall'Oste</h2>
                    </div>
                    <div className="flex gap-2 items-center">
                        <FaStar className="text-[#FFC60B] w-[26px]
                         h-[26px]"></FaStar>
                        <h3 className="text-[24px] font-medium">(4.5)</h3>
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <CiLocationOn className="w-[27px] h-[27px]"></CiLocationOn>
                    <p className="text-[16px]">Via Luigi Alamanni, 3, 50123 Firenze</p>
                </div>
                <div>
                    <p className="text-[12px]">Featuring seasonal and sustainable seafood that is flown in fresh daily,
                         our chef-driven menu proves that no matter when you’re
                     dining, seafood can be truly exceptional.  <span className="font-bold text-black">Read More...</span></p>
                </div>
                <div className="">
                    <Link href="/visitResturant" className="btn w-full bg-[#00B047]
                     text-[16px] hover:bg-[#00B047] text-white">Visit</Link>
                </div>
                </div>
 
            </div>
                </div>
                <div className="p-3 border-2 rounded-lg">
                    <div className="card bg-base-100  shadow-xl">
                <figure>
                <img
                src="https://i.ibb.co.com/pPBythS/Rectangle-2-1.png"
                alt="Shoes"  className="w-[470px] h-[321px]"/>
                </figure>
                <div className="space-y-4 p-2">
                <div className="flex justify-between">
                    <div>
                        <h2 className="text-[32px] font-medium">Trattoria dall'Oste</h2>
                    </div>
                    <div className="flex gap-2 items-center">
                        <FaStar className="text-[#FFC60B] w-[26px]
                         h-[26px]"></FaStar>
                        <h3 className="text-[24px] font-medium">(4.5)</h3>
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <CiLocationOn className="w-[27px] h-[27px]"></CiLocationOn>
                    <p className="text-[16px]">Via Luigi Alamanni, 3, 50123 Firenze</p>
                </div>
                <div>
                    <p className="text-[12px]">Featuring seasonal and sustainable seafood that is flown in fresh daily,
                         our chef-driven menu proves that no matter when you’re
                     dining, seafood can be truly exceptional.  <span className="font-bold text-black">Read More...</span></p>
                </div>
                <div className="">
                    <Link href="/visitResturant" className="btn w-full bg-[#00B047]
                     text-[16px] hover:bg-[#00B047] text-white">Visit</Link>
                </div>
                </div>
 
            </div>
                </div>
                    </div>
            </div>
        </div>
    )
}
export default AllResturant;