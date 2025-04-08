import React from 'react';
import image from '/images.jpeg'
import { FaAngleDown } from "react-icons/fa6";
import { IoWatchOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { BsMinecart } from "react-icons/bs";

const Nav = () => {
  return (
    <div  >
      <div className=' h-20  lg:h-20 px-10 flex items-center justify-between shadow-2xl bg-#FFFFFF  ' >
        {/* swiggy */}
         <div className='flex items-center   ' >
            
            <a href="#"><img className='w-[48.2px] h-[48.2px] cursor-pointer rounded-xl hover:scale-105 ease-in-out ' src="/images.jpeg" alt="swiggy icon" /></a>
            <span className='pl-8 font-semibold cursor-pointer hover:text-orange-600 underline  underline-offset-4 decoration-2 ' >Other</span>
           <span className='hidden lg:flex pl-1 text-gray-700 cursor-pointer'>Kolkata, India</span>
           <span className='text-orange-500 pl-2 cursor-pointer '><  FaAngleDown /></span>

        </div>
        <div className='flex justify-end list-none gap-x-14 '>
          
            <li className='hidden lg:flex items-center  cursor-pointer gap-2  ' >
            <IoWatchOutline className='w-5 h-5  '/>
            <h3 className='font-semibold hover:text-orange-500  ' >Swiggy Corporate</h3>
            </li>
            <li className='hidden lg:flex items-center  cursor-pointer gap-2 font-semibold hover:text-orange-500  ' >
            <IoSearch className='w-5 h-5  '/>
            Search
            </li>
            <li className='hidden lg:flex items-center  cursor-pointer gap-2 font-semibold hover:text-orange-500  ' >
            <BiSolidOffer className='w-5 h-5  ' />
            Offers
            </li>
            <li className='hidden lg:flex items-center  cursor-pointer gap-2 font-semibold hover:text-orange-500  ' >
            <IoHelpBuoyOutline className='w-5 h-5  ' />
            Help
            </li>
            <li className='flex items-center  cursor-pointer gap-2 font-semibold hover:text-orange-500  ' >
            <FaRegUser className='w-5 h-5  ' />
            Sign In
            </li>
            <li className='hidden md:flex items-center  cursor-pointer gap-2 font-semibold hover:text-orange-500  ' >
            <BsMinecart className='w-5 h-5  ' />
            Cart
            </li>
            
  
        </div>

         

        


      </div>
    </div>
  )
}

export default Nav
