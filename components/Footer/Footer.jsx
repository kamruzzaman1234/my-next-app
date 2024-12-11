import Link from 'next/link';
import React from 'react';

const Footer = ()=>{
    return(
        <div className=" bg-[#232323]"> 
        <footer className="footer max-w-7xl mx-auto text-[#F8FAFC] p-10">
  <aside className="space-y-6">
  <Link href="/">
              <img
                src="https://i.ibb.co/MfbxJrz/Group.png" // Fixed the URL
                alt="Logo"
                className="w-[260px] h-[85px]"
              />
            </Link>
    <p className="text-[#F8FAFC] text-[14.4px]">
    Ecommerce is a free UI Kit from Paperpillar <br /> that you 
    can use for your personal or <br /> commercial project.
    </p>
    <div className="flex flex-col lg:flex-row gap-4">
        <div className="border-2 rounded-r-full rounded-l-full border-[#F8FAFC] text-[#F8FAFC] py-3 px-4 w-[240px]">
            Type Your Email Address
        </div>
        <button className="px-6 font-bold py-2 bg-white rounded-r-full text-black rounded-l-full" >Submit</button>
    </div>
  </aside>
  <nav>
    <h6 className="footer-title">Account</h6>
    <a className="link link-hover text-white">My Account</a>
    <a className="link link-hover">Login / Register</a>
    <a className="link link-hover">Cart</a>
    <a className="link link-hover">Wishlist</a>
    <a className="link link-hover">Shop</a>
  </nav>
  <nav>
    <h6 className="footer-title">Quic Link</h6>
    <a className="link link-hover">Privacy Policy</a>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">FAQ</a>
    <a className="link link-hover">Contact</a>
  </nav>
  <nav>
    <h6 className="footer-title">Support</h6>
    <a className="link link-hover">exclusive@gmail.com</a>
    <a className="link link-hover">+88015-88888-9999</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <nav>
    <h6 className="footer-title">Download App</h6>
    <div className="flex gap-2 items-center">
        <div>
            <img src="https://i.ibb.co.com/yf7BYg5/Qrcode-1.png" className="w-[76px]
             h-[76px]" alt="" />
        </div>
        <div>
                <img src="https://i.ibb.co.com/ZBq7JHH/Google-Play.png" className="w-[110px] 
                h-[40px]" alt="" />
                <img src="https://i.ibb.co.com/ggfg7Ms/download-appstore.png" 
                className="w-[110px] h-[40px]" alt="" />
        </div>
    </div>
  </nav>
</footer>
        </div>
    )
}
export default Footer;