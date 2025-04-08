import React from 'react'
import { MdOutlineStars } from "react-icons/md";


const Topresturants = () => {
  return (
    <div className='px-2 lg:px-24 overflow-hidden mb-14'>
      <div className='px-2 py-3 '>
         <h1 className='text-xl font-extrabold '>Top Resturants Chains in Kolkata</h1>
      </div>

      <div className='flex overflow-auto scrollbar-hide gap-x-4  d:gap-x-7  '>
        <a href="#">
            <div className='  cursor-pointer '>
            <div className='flex items-end w-[200px] h-[150px] md:w-[320px] md:h-[320px] lg:w-[240px] lg:h-[180px]  bg-center bg-cover rounded-2xl bg-[url(/Pizzahut.avif)] '>
                <h2 className='text-xl md:text-2xl px-3  font-extrabold text-[#FFFFFFEB] '>ITEMS AT 189</h2>
            </div>
            <div className=' w-[240px] mt-2 px-1 '>
                
                <h3 className='font-bold'>Pizza Hut</h3>
                 <h3 className='flex items-center gap-2 font-medium '>
                    <MdOutlineStars />
                    4.4 40-45 mins</h3>
                <h4 className='font-medium text-gray-500 ' >Pizzas</h4>
                <h4 className='font-medium text-gray-500 ' >Hightland Park</h4>
            </div>
                
            </div>
        </a>
        {/* second  */}
        <a className='hover:scale-95 transition-all delay-150  ' href="#">
                    <div className='cursor-pointer'>
                    <div className='flex items-end  w-[200px] h-[150px] md:w-[320px] md:h-[320px] lg:w-[240px] lg:h-[180px] bg-center bg-cover rounded-2xl bg-[url(/R-pizza.avif)] '>
                        <h2 className=' px-3  font-extrabold text-[#FFFFFFEB] '>ITEMS AT 99</h2>
                    </div>
                    <div className='w-[240px] mt-2 px-1  '>
                        <h3 className='font-bold'>Olio - The Wood Fired Pizzeria</h3>
                        <h3 className='flex items-center gap-2 font-semibold '><MdOutlineStars />
                        4.4 40-45 mins</h3>
                        <h4 className='font-medium text-gray-500 ' >Pizza, Pasta, Itailan, Fast Food..</h4>
                        <h4 className='font-medium text-gray-500 ' >Basana Kali Bari</h4>
                    </div>
                </div>
                </a>
          {/* third */}
                <a className='hover:scale-95 transition-all delay-150  ' href="#">
                    <div className='cursor-pointer'>
                    <div className='flex items-end  w-[200px] h-[150px] md:w-[320px] md:h-[320px] lg:w-[240px] lg:h-[180px] bg-center bg-cover rounded-2xl bg-[url(/Chiliamericangrill.avif)] '>
                        <h2 className='text-xl md:text-2xl px-3  font-extrabold text-[#FFFFFFEB] '>30% OFF UPTO 75</h2>
                    </div>
                    <div className='w-[240px] mt-2 px-1  '>
                        <h3 className='font-bold'>Chili's American Grill And..</h3>
                        <h3 className='flex items-center gap-2 font-semibold '><MdOutlineStars />
                        4.5 80-85 mins</h3>
                        <h4 className='font-medium text-gray-500 ' >American, Salads, Mexican...</h4>
                        <h4 className='font-medium text-gray-500 ' >Jadavpur</h4>
                    </div>
                </div>
                </a>
              {/*4 */}
                   <a className='hover:scale-95 transition-all delay-150  ' href="#">
                        <div className='cursor-pointer'>
                        <div className='flex items-end w-[200px] h-[150px] md:w-[320px] md:h-[320px] lg:w-[240px] lg:h-[180px] bg-center bg-cover rounded-2xl bg-[url(/KFC.avif)] '>
                            <h2 className=' px-3  font-extrabold text-[#FFFFFFEB] '>ITEMS AT 59</h2>
                        </div>
                        <div className='w-[240px] mt-2 px-1  '>
                            <h3 className='font-bold'>KFC</h3>
                            <h3 className='flex items-center gap-2 font-semibold '><MdOutlineStars />
                            4.4 40-45 mins</h3>
                            <h4 className='font-medium text-gray-500 ' >Fast Food, Burgers, Rolls </h4>
                            <h4 className='font-medium text-gray-500 ' >Highland Park</h4>
                        </div>
                    </div>
                    </a>
              {/* fourth */}
                    <a className='hover:scale-95 transition-all delay-150  ' href="#">
                        <div className='cursor-pointer'>
                        <div className='flex items-end  w-[200px] h-[150px] md:w-[320px] md:h-[320px] lg:w-[240px] lg:h-[180px] bg-center bg-cover rounded-2xl bg-[url(/Burgerking.avif)] '>
                            <h2 className='text-xl md:text-2xl px-2  font-extrabold text-[#FFFFFFEB] '>60% OFF UPTO 120</h2>
                        </div>
                        <div className='w-[240px] mt-2 px-1  '>
                            <h3 className='font-bold'>Burger King</h3>
                            <h3 className='flex items-center gap-2 font-semibold '><MdOutlineStars />
                            4.5 25-30 mins</h3>
                            <h4 className='font-medium text-gray-500 ' >Burgers, American
                          </h4>
                            <h4 className='font-medium text-gray-500 ' >Narender pur</h4>
                        </div>
                    </div>
                    </a>
           {/*5 */}
               <a className='hover:scale-95 transition-all delay-150  ' href="#">
                   <div className='cursor-pointer'>
                   <div className='flex items-end w-[200px] h-[150px] md:w-[320px] md:h-[320px] lg:w-[240px] lg:h-[180px]  bg-center bg-cover rounded-2xl bg-[url(/Vegmeal.avif)] '>
                       <h2 className=' px-1  font-extrabold text-[#FFFFFFEB] '>66 OFF ABOVE 249</h2>
                   </div>
                   <div className='w-[240px] mt-2 px-1  '>
                       <h3 className='font-bold'>Veg Meals by Lunchbox</h3>
                       <h3 className='flex items-center gap-2 font-semibold '><MdOutlineStars />
                       4.6 25-35 mins</h3>
                       <h4 className='font-medium text-gray-500 ' >Biryani, North Indian, Dessert..</h4>
                       <h4 className='font-medium text-gray-500 ' >Garia</h4>
                   </div>
               </div>
               </a>
             {/*eight*/}
                      <a className='hover:scale-95 transition-all delay-150  ' href="#">
                        <div className='cursor-pointer'>
                        <div className='flex items-end w-[200px] h-[150px] md:w-[320px] md:h-[320px] lg:w-[240px] lg:h-[180px]   bg-center bg-cover rounded-2xl bg-[url(/Baboorchi.avif)] '>
                            <h2 className=' px-3  font-extrabold text-[#FFFFFFEB] '>ITEMS AT 119</h2>
                        </div>
                        <div className='w-[240px] mt-2 px-1  '>
                            <h3 className='font-bold'>Baboorchi</h3>
                            <h3 className='flex items-center gap-2 font-semibold '><MdOutlineStars />
                            4.4 25-30 mins</h3>
                            <h4 className='font-medium text-gray-500 ' >Biryani, Chinese, North Indian,
            </h4>
                            <h4 className='font-medium text-gray-500 ' >Narendrapur</h4>
                        </div>
                    </div>
                    </a>

        {/* 12 */}
                <a className='hover:scale-95 transition-all delay-150  ' href="#">
                    <div className='cursor-pointer'>
                    <div className='flex items-end  w-[200px] h-[150px] md:w-[320px] md:h-[320px] lg:w-[240px] lg:h-[180px] bg-center bg-cover rounded-2xl bg-[url(/Wow.avif)] '>
                        <h2 className=' px-3  font-extrabold text-[#FFFFFFEB] '>ITEMS AT 99</h2>
                    </div>
                    <div className='w-[240px] mt-2 px-1  '>
                        <h3 className='font-bold'>Wow Momo</h3>
                        <h3 className='flex items-center gap-2 font-semibold '><MdOutlineStars />
                        4.6 15-25 mins</h3>
                        <h4 className='font-medium text-gray-500 ' >Tibetan, Healthy Food, Asian..</h4>
                        <h4 className='font-medium text-gray-500 ' >Panchpota</h4>
                    </div>
                </div>
                </a>
             {/* 16 */}
                <a className='hover:scale-95 transition-all delay-150  ' href="#">
                        <div className='cursor-pointer'>
                        <div className='flex items-end  w-[200px] h-[150px] md:w-[320px] md:h-[320px] lg:w-[240px] lg:h-[180px] bg-center bg-cover rounded-2xl bg-[url(/Thepizza.avif)] '>
                            <h2 className=' px-1  font-extrabold text-[#FFFFFFEB] '>166 OFF ABOVE 599</h2>
                        </div>
                        <div className='w-[240px] mt-2 px-1  '>
                            <h3 className='font-bold'> The Pizza Project by Ove..</h3>
                            <h3 className='flex items-center gap-2 font-semibold '><MdOutlineStars />
                            4.4 20-30 mins</h3>
                            <h4 className='font-medium text-gray-500 ' >Pizza,Itailan,Desserts,..</h4>
                            <h4 className='font-medium text-gray-500 ' >Garia</h4>
                        </div>
                    </div>
                    </a>
             {/* 21 */}
                   <a className='hover:scale-95 transition-all delay-150  ' href="#">
                        <div className='cursor-pointer'>
                        <div className='flex items-end w-[200px] h-[150px] md:w-[320px] md:h-[320px] lg:w-[240px] lg:h-[180px]  bg-center bg-cover rounded-2xl bg-[url(/Bananaleafs.avif)] '>
                            <h2 className=' px-1  font-extrabold text-[#FFFFFFEB] '></h2>
                        </div>
                        <div className='w-[240px] mt-2 px-1  '>
                            <h3 className='font-bold'>Banana Leaf</h3>
                            <h3 className='flex items-center gap-2 font-semibold '><MdOutlineStars />
                            4.6 25-30 mins</h3>
                            <h4 className='font-medium text-gray-500 ' >South Indian, Beverages,..</h4>
                            <h4 className='font-medium text-gray-500 ' >
            Garia
                            </h4>
                        </div>
                    </div>
                    </a>
        

      </div>
    </div>
  )
}

export default Topresturants
