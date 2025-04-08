import React from 'react'
import google from '/Google.avif';
import apple from '/Apple.avif';
import logo from '/images.jpeg';
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";


const Footer = () => {
  return (
    <div className='bg-gray-100 mt-16 '>
       <div className=' px-2 lg:px-24 shadow-2xl  ' >
          <div className='px-2 lg:px-5 max-w-full h-[1px] bg-black '></div>
          <div className='grid text-center lg:gap-x-5 lg:flex items-center justify-center py-8 ' >
                  <div><h1 className='text-xl md:text-2xl font-bold lg:font-extrabold
                   text-gray-700 '>For better experience,download the Swiggy app now</h1></div>
                  <div className='flex justify-evenly  '>
                    <a href="#"><img  className='w-[200px] p-2  ' src="/Google.avif" alt="google playstore" /></a>
                    <a href="#"><img className='w-[200px] p-2  ' src="/Apple.avif" alt="apple store" /></a>
                    
                  </div>
          </div>
         {/* footer  */}
         <div className='relative grid grid-cols-2 lg:flex justify-between  pb-8 gap-5'>
              <div >
                <a className='flex px-2 items-center gap-x-2 ' href="#"><img className='w-[50px] rounded-xl ' src="/images.jpeg" alt="swiggy" />
                <span className='text-2xl font-bold text-orange-600' >Swiggy</span>
                </a>
                <h4 className='flex items-center px-2 mt-2 text-gray-500 font-normal gap-x-2' ><span className='border-[1px] border-gray-500 rounded-full px-1 text-sm '>c</span> 2025 Swiggy Limited</h4>
              </div>
         
         <div className='grid gap-4 px-2  '>
            <h2 className='text-md font-semibold'>Company</h2>
            <a className='text-gray-500 font-medium' href="#">About Us </a>
            <a className='text-gray-500 font-medium' href="#">Swiggy Corporate </a>
            <a className='text-gray-500 font-medium' href="#">Careers </a>
            <a className='text-gray-500 font-medium' href="#">Team </a>
            <a className='text-gray-500 font-medium' href="#">Swiggy One </a>
            <a className='text-gray-500 font-medium' href="#">Swiggy Instamart </a>
            <a className='text-gray-500 font-medium' href="#">Swiggy Dineout</a>
            <a className='text-gray-500 font-medium' href="#">Swiggy Genie </a>
            <a className='text-gray-500 font-medium' href="#">Minis </a>
            <a className='text-gray-500 font-medium' href="#">Pyng </a>

         </div>
{/* second */}
<div className='grid gap-4 px-2 h-fit '>
            <h2 className='text-md font-semibold'>Contact us</h2>
            <a className='text-gray-500 font-medium' href="#">Help & Support </a>
            <a  className='text-gray-500 font-medium' href="#">Partner with us </a>
            <a className='text-gray-500 font-medium'  href="#">Ride with us </a>
            
         </div>

         {/* third */}
<div className='grid gap-4 px-2 h-fit '>
            <h2 className='text-md font-semibold'>Available in:</h2>
            <a className='text-gray-500 font-medium'  href="#">Bangalore </a>
            <a  className='text-gray-500 font-medium' href="#">Gurgaon </a>
            <a className='text-gray-500 font-medium'  href="#">Hyderabad </a>
            <a className='text-gray-500 font-medium'  href="#">Delhi </a>
            <a className='text-gray-500 font-medium'  href="#">Mumbai </a>
            <a className='text-gray-500 font-medium'  href="#">Pune </a>
            <a className='text-gray-500 font-medium'  href="#">Bihar </a>

            
         </div>
         {/* fourth */}
<div className='grid gap-4 px-2 h-fit '>
            <h2 className='text-md font-semibold'>Life at Swiggy</h2>
            <a className='text-gray-500 font-medium'  href="#">Explore with Swiggy </a>
            <a  className='text-gray-500 font-medium' href="#">Swiggy News </a>
            <a className='text-gray-500 font-medium'  href="#">Snackables </a>
            
         </div>
       {/* fifth  */}
       <div className='absolute bottom-10 right-1  rounded-lg flex justify-evenly items-center  gap-x-5 border-[1px]  h-fit px-3 py-1 '>
         
        <a href="#"><CiLinkedin /></a>
         <a href="#"><FaInstagram /></a>
        <a href="#"><CiFacebook />        </a>
         <a href="#"><CiTwitter/></a>
         
       </div>
       
               </div>
       </div>
    </div>
  )
}

export default Footer
