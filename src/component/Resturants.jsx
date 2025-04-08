import React from 'react'
import { FaAngleDown } from "react-icons/fa";
import { MdOutlineStars } from "react-icons/md";
import image from '/Pizzahut.avif';
import chinesswork from '/chineeswork..avif';
const Resturants = () => {
  return (
    <div className='px-2 lg:px-24 overflow-x-hidden' >
        <div  >
      <div >
        <h1 className='text-md md:text-2xl  lg:text-3xl font-bold px-2 py-4  ' >Restaurants with online food delivery in Kolkata</h1>
      </div>
       <div className='flex px-2 gap-4 text-nowrap overflow-x-auto scroll-smooth scrollbar-hide mb-14 '>
           <div className='px-3 w-fit font-normal py-1 rounded-2xl border-[1.5px] border-gray-300  cursor-pointer  '><span>Filter</span></div>
           <div className='px-3 w-fit font-normal py-1 rounded-2xl border-[1.5px] border-gray-300 flex items-center space-x-2  cursor-pointer '><span>Sort By</span> <FaAngleDown className='font-light' />
           </div>
           <div className='px-3 w-fit font-normal py-1 rounded-2xl border-[1.5px] border-gray-300 cursor-pointer '><span>Fast Delivery</span></div>
           <div className='px-3 w-fit font-normal py-1 rounded-2xl border-[1.5px] border-gray-300  cursor-pointer '><span>New on Swiggy</span></div>
           <div className='px-3 w-fit font-normal py-1 rounded-2xl border-[1.5px] border-gray-300  cursor-pointer '><span>Rating 4.0+</span></div>
           <div className='px-3 w-fit font-normal py-1 rounded-2xl border-[1.5px] border-gray-300 cursor-pointer  '><span>Pure Veg </span></div>
           <div className='px-3 w-fit font-normal py-1 rounded-2xl border-[1.5px] border-gray-300 cursor-pointer  '><span>Offers</span></div>
           <div className='px-3 w-fit font-normal py-1 rounded-2xl border-[1.5px] border-gray-300  cursor-pointer '><span>Rs.300-Rs.600</span></div>
           <div className='px-3 w-fit font-normal py-1 rounded-2xl border-[1.5px] border-gray-300  cursor-pointer '><span>Less than Rs.300</span></div>
       </div>
      </div>
      {/* Resturants */}
      <div className="grid grid-cols-1 s:justify-items-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8">

        {/* one  */}
        <a className='hover:scale-95 transition-all delay-150  ' href="#">
            <div className='cursor-pointer  '>
            <div className='flex items-end w-[300px] h-[200px] md:w-[320px] md:h-[320px] lg:w-[240px] lg:h-[180px]  bg-center bg-cover rounded-2xl bg-[url(/Pizzahut.avif)] '>
                <h2 className='text-xl md:text-2xl px-3  font-extrabold text-[#FFFFFFEB] '>ITEMS AT 189</h2>
            </div>
            <div className='w-[240px] mt-2 px-1  '>
                <h3 className='font-bold'>Pizza Hut</h3>
                <h3 className='flex items-center gap-2 font-medium '><MdOutlineStars />
                4.4 40-45 mins</h3>
                <h4 className='font-medium text-gray-500 ' >Pizzas</h4>
                <h4 className='font-medium text-gray-500 ' >Hightland Park</h4>
            </div>
        </div>
        </a>
    {/* second */}
    <a className='hover:scale-95 transition-all delay-150  ' href="#">
            <div className='cursor-pointer'>
            <div className='flex items-end  w-[300px] h-[200px] md:w-[320px] md:h-[320px] lg:w-[240px] lg:h-[180px] bg-center bg-cover rounded-2xl bg-[url(/chineeswork..avif)] '>
                <h2 className='text-xl md:text-2xl px-3  font-extrabold text-[#FFFFFFEB] '>ITEMS AT 129</h2>
            </div>
            <div className='w-[240px] mt-2 px-1  '>
                <h3 className='font-bold'>Chinese Wok</h3>
                <h3 className='flex items-center gap-2 font-semibold '><MdOutlineStars />
                4.3 40-45 mins</h3>
                <h4 className='font-medium text-gray-500 ' >Chinese, Asian, Tibetan...  </h4>
                <h4 className='font-medium text-gray-500 ' >Mouza Raipur</h4>
            </div>
        </div>
        </a>
        {/* third */}
        <a className='hover:scale-95 transition-all delay-150  ' href="#">
            <div className='cursor-pointer'>
            <div className='flex items-end  w-[300px] h-[200px] md:w-[320px] md:h-[320px] lg:w-[240px] lg:h-[180px] bg-center bg-cover rounded-2xl bg-[url(/Chiliamericangrill.avif)] '>
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
        {/* fourth */}
        <a className='hover:scale-95 transition-all delay-150  ' href="#">
            <div className='cursor-pointer'>
            <div className='flex items-end  w-[300px] h-[200px] md:w-[320px] md:h-[320px] lg:w-[240px] lg:h-[180px] bg-center bg-cover rounded-2xl bg-[url(/Burgerking.avif)] '>
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
        {/* fifth */}
        <a className='hover:scale-95 transition-all delay-150  ' href="#">
            <div className='cursor-pointer'>
            <div className='flex items-end  w-[300px] h-[200px] md:w-[320px] md:h-[320px] lg:w-[240px] lg:h-[180px] bg-center bg-cover rounded-2xl bg-[url(/Bigbowl.avif)] '>
                <h2 className=' px-3  font-extrabold text-[#FFFFFFEB] '>ITEMS AT 129</h2>
            </div>
            <div className='w-[240px] mt-2 px-1  '>
                <h3 className='font-bold'>Big Bowl</h3>
                <h3 className='flex items-center gap-2 font-semibold '><MdOutlineStars />
                4.4 40-45 mins</h3>
                <h4 className='font-medium text-gray-500 ' >Chinese, Tibetan, Desserts</h4>
                <h4 className='font-medium text-gray-500 ' >Mouza Raipur</h4>
            </div>
        </div>
        </a>
        {/* sixth  */}
        <a className='hover:scale-95 transition-all delay-150  ' href="#">
            <div className='cursor-pointer'>
            <div className='flex items-end  w-[300px] h-[200px] md:w-[320px] md:h-[320px] lg:w-[240px] lg:h-[180px] bg-center bg-cover rounded-2xl bg-[url(/R-pizza.avif)] '>
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
       {/* seven */}
       <a className='hover:scale-95 transition-all delay-150  ' href="#">
            <div className='cursor-pointer'>
            <div className='flex items-end w-[300px] h-[200px] md:w-[320px] md:h-[320px] lg:w-[240px] lg:h-[180px] bg-center bg-cover rounded-2xl bg-[url(/KFC.avif)] '>
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
          {/*eight*/}
          <a className='hover:scale-95 transition-all delay-150  ' href="#">
            <div className='cursor-pointer'>
            <div className='flex items-end w-[300px] h-[200px] md:w-[320px] md:h-[320px] lg:w-[240px] lg:h-[180px]   bg-center bg-cover rounded-2xl bg-[url(/Baboorchi.avif)] '>
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
    {/* nine */}
    <a className='hover:scale-95 transition-all delay-150  ' href="#">
            <div className='cursor-pointer'>
            <div className='flex items-end w-[300px] h-[200px] md:w-[320px] md:h-[320px] lg:w-[240px] lg:h-[180px]  bg-center bg-cover rounded-2xl bg-[url(/Cheesecake.avif)] '>
                <h2 className=' px-3  font-extrabold text-[#FFFFFFEB] '>ITEMS AT 119</h2>
            </div>
            <div className='w-[240px] mt-2 px-1  '>
                <h3 className='font-bold'>Cheesecakes By CakeZone</h3>
                <h3 className='flex items-center gap-2 font-medium '><MdOutlineStars />
                4.4 30-35 mins</h3>
                <h4 className='font-medium text-gray-500 ' >Desserts, Bakery</h4>
                <h4 className='font-medium text-gray-500 ' >Garia</h4>
            </div>
        </div>
        </a>
        {/* ten */}
        <a className='hover:scale-95 transition-all delay-150  ' href="#">
            <div className='cursor-pointer'>
            <div className='flex items-end  w-[300px] h-[200px] md:w-[320px] md:h-[320px] lg:w-[240px] lg:h-[180px] bg-center bg-cover rounded-2xl bg-[url(/Himur.avif)] '>
                <h2 className=' px-3  font-extrabold text-[#FFFFFFEB] '>ITEMS AT 89</h2>
            </div>
            <div className='w-[240px] mt-2 px-1  '>
                <h3 className='font-bold'>Himur Heshel</h3>
                <h3 className='flex items-center gap-2 font-semibold '><MdOutlineStars />
                4.5 30-35 mins</h3>
                <h4 className='font-medium text-gray-500 ' >Bengali, Bangladeshi, Thalis</h4>
                <h4 className='font-medium text-gray-500 ' >Patuli</h4>
            </div>
        </div>
        </a>
        {/* 11 */}
        <a className='hover:scale-95 transition-all delay-150  ' href="#">
            <div className='cursor-pointer'>
            <div className='flex items-end w-[300px] h-[200px] md:w-[320px] md:h-[320px] lg:w-[240px] lg:h-[180px]  bg-center bg-cover rounded-2xl bg-[url(/Banana.avif)] '>
                <h2 className=' px-3  font-extrabold text-[#FFFFFFEB] '></h2>
            </div>
            <div className='w-[240px] mt-2 px-1  '>
                <h3 className='font-bold'>Banana Leaf @ Komala Vilas</h3>
                <h3 className='flex items-center gap-2 font-semibold '><MdOutlineStars />
                4.5 20-25 mins</h3>
                <h4 className='font-medium text-gray-500 ' >South Indian, Snacks...</h4>
                <h4 className='font-medium text-gray-500 ' >Pancha sayar</h4>
            </div>
        </div>
        </a>
        {/* 12 */}
        <a className='hover:scale-95 transition-all delay-150  ' href="#">
            <div className='cursor-pointer'>
            <div className='flex items-end  w-[300px] h-[200px] md:w-[320px] md:h-[320px] lg:w-[240px] lg:h-[180px] bg-center bg-cover rounded-2xl bg-[url(/Wow.avif)] '>
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
        {/* 13  */}
        <a className='hover:scale-95 transition-all delay-150  ' href="#">
            <div className='cursor-pointer'>
            <div className='flex items-end  w-[300px] h-[200px] md:w-[320px] md:h-[320px] lg:w-[240px] lg:h-[180px] bg-center bg-cover rounded-2xl bg-[url(/chimney.avif)] '>
                <h2 className=' px-3  font-extrabold text-[#FFFFFFEB] '>ITEMS AT 29</h2>
            </div>
            <div className='w-[240px] mt-2 px-1  '>
                <h3 className='font-bold'>Chimney Cove</h3>
                <h3 className='flex items-center gap-2 font-semibold '><MdOutlineStars />
                4.5 30-35 mins</h3>
                <h4 className='font-medium text-gray-500 ' >Continental, Snacks, Italian,..</h4>
                <h4 className='font-medium text-gray-500 ' >Basdroni</h4>
            </div>
        </div>
        </a>
       {/* 14  */}
       <a className='hover:scale-95 transition-all delay-150  ' href="#">
            <div className='cursor-pointer'>
            <div className='flex items-end w-[300px] h-[200px] md:w-[320px] md:h-[320px] lg:w-[240px] lg:h-[180px]  bg-center bg-cover rounded-2xl bg-[url(/Thalaiva.avif)] '>
                <h2 className=' px-3  font-extrabold text-[#FFFFFFEB] '>ITEMS AT 79</h2>
            </div>
            <div className='w-[240px] mt-2 px-1  '>
                <h3 className='font-bold'>Thalaiva Biryani</h3>
                <h3 className='flex items-center gap-2 font-semibold '><MdOutlineStars />
                4.1 20-25 mins</h3>
                <h4 className='font-medium text-gray-500 ' >Biryani,Mughlai, Lucknowi,..</h4>
                <h4 className='font-medium text-gray-500 ' >Garia</h4>
            </div>
        </div>
        </a>
          {/* 15  */}
          <a className='hover:scale-95 transition-all delay-150  ' href="#">
            <div className='cursor-pointer'>
            <div className='flex items-end w-[300px] h-[200px] md:w-[320px] md:h-[320px] lg:w-[240px] lg:h-[180px]  bg-center bg-cover rounded-2xl bg-[url(/Fassos.avif)] '>
                <h2 className=' px-1  font-extrabold text-[#FFFFFFEB] '>166 OFF ABOVE 449</h2>
            </div>
            <div className='w-[240px] mt-2 px-1  '>
                <h3 className='font-bold'>The Wood Fired Pizzeria</h3>
                <h3 className='flex items-center gap-2 font-semibold '><MdOutlineStars />
                4.4 30-35 mins</h3>
                <h4 className='font-medium text-gray-500 ' >Fast Food, Snacks, North..</h4>
                <h4 className='font-medium text-gray-500 ' >Garia</h4>
            </div>
        </div>
        </a>
    {/* 16 */}
    <a className='hover:scale-95 transition-all delay-150  ' href="#">
            <div className='cursor-pointer'>
            <div className='flex items-end  w-[300px] h-[200px] md:w-[320px] md:h-[320px] lg:w-[240px] lg:h-[180px] bg-center bg-cover rounded-2xl bg-[url(/Thepizza.avif)] '>
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
        {/* 17 */}
        <a className='hover:scale-95 transition-all delay-150  ' href="#">
            <div className='cursor-pointer'>
            <div className='flex items-end w-[300px] h-[200px] md:w-[320px] md:h-[320px] lg:w-[240px] lg:h-[180px]  bg-center bg-cover rounded-2xl bg-[url(/Vegmeal.avif)] '>
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
        {/* 18*/}
        <a className='hover:scale-95 transition-all delay-150  ' href="#">
            <div className='cursor-pointer'>
            <div className='flex items-end w-[200px] w-[300px] h-[200px] md:w-[320px] md:h-[320px] lg:w-[240px] lg:h-[180px]  bg-center bg-cover rounded-2xl bg-[url(/Foodjunction.avif)] '>
                <h2 className=' px-3  font-extrabold text-[#FFFFFFEB] '>20% OFF UPTO 50</h2>
            </div>
            <div className='w-[240px] mt-2 px-1  '>
                <h3 className='font-bold'>Food Junction</h3>
                <h3 className='flex items-center gap-2 font-semibold '><MdOutlineStars />
                3.9 30-35 mins</h3>
                <h4 className='font-medium text-gray-500 ' >Food Junction</h4>
                <h4 className='font-medium text-gray-500 ' >Garia</h4>
            </div>
        </div>
        </a>
        {/* 19 */}
        <a className='hover:scale-95 transition-all delay-150  ' href="#">
            <div className='cursor-pointer'>
            <div className='flex items-end w-[300px] h-[200px] md:w-[320px] md:h-[320px] lg:w-[240px] lg:h-[180px]  bg-center bg-cover rounded-2xl bg-[url(/Chakaum.avif)] '>
                <h2 className=' px-2  font-extrabold text-[#FFFFFFEB] '>66% OFF UPTO 126</h2>
            </div>
            <div className='w-[240px] mt-2 px-1  '>
                <h3 className='font-bold'>Chakum Chukum</h3>
                <h3 className='flex items-center gap-2 font-semibold '><MdOutlineStars />
                4.2 20-25 mins</h3>
                <h4 className='font-medium text-gray-500 ' >Chinese, North Indian, Fast..</h4>
                <h4 className='font-medium text-gray-500 ' >Rajpur Sonarpur</h4>
            </div>
        </div>
        </a>
        {/* 20  */}
        <a className='hover:scale-95 transition-all delay-150  ' href="#">
            <div className='cursor-pointer'>
            <div className='flex items-end w-[300px] h-[200px] md:w-[320px] md:h-[320px] lg:w-[240px] lg:h-[180px]  bg-center bg-cover rounded-2xl bg-[url(/shangai.avif)] '>
                <h2 className=' px-2  font-extrabold text-[#FFFFFFEB] '>66% OFF UPTO 156</h2>
            </div>
            <div className='w-[240px] mt-2 px-1  '>
                <h3 className='font-bold'>Shanghai Flavours Of..</h3>
                <h3 className='flex items-center gap-2 font-semibold '><MdOutlineStars />
                4.2 25-30 mins</h3>
                <h4 className='font-medium text-gray-500 ' >Chinese,Asian, Oriental, Pan..</h4>
                <h4 className='font-medium text-gray-500 ' >Sonarpur Station Road</h4>
            </div>
        </div>
        </a>
       {/* 21 */}
       <a className='hover:scale-95 transition-all delay-150  ' href="#">
            <div className='cursor-pointer'>
            <div className='flex items-end w-[300px] h-[200px] md:w-[320px] md:h-[320px] lg:w-[240px] lg:h-[180px]  bg-center bg-cover rounded-2xl bg-[url(/Bananaleafs.avif)] '>
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
           {/* 22  */}
           <a className='hover:scale-95 transition-all delay-150  ' href="#">
            <div className='cursor-pointer'>
            <div className='flex items-end w-[300px] h-[200px] md:w-[320px] md:h-[320px] lg:w-[240px] lg:h-[180px]  bg-center bg-cover rounded-2xl bg-[url(/Donut.avif)] '>
                <h2 className=' px-1  font-extrabold text-[#FFFFFFEB] '>15% OFF UPTO 80</h2>
            </div>
            <div className='w-[240px] mt-2 px-1  '>
                <h3 className='font-bold'>That Donut Shop</h3>
                <h3 className='flex items-center gap-2 font-semibold '><MdOutlineStars />
                4.8 30-35 mins</h3>
                <h4 className='font-medium text-gray-500 ' >Bakery</h4>
                <h4 className='font-medium text-gray-500 ' >Santoshpur</h4>
            </div>
        </div>
        </a>
    {/* 23 */}
    <a className='hover:scale-95 transition-all delay-150  ' href="#">
            <div className='cursor-pointer'>
            <div className='flex items-end w-[300px] h-[200px] md:w-[320px] md:h-[320px] lg:w-[240px] lg:h-[180px]  bg-center bg-cover rounded-2xl bg-[url(/Haji.avif)] '>
                <h2 className=' px-1  font-extrabold text-[#FFFFFFEB] '>166 OFF ABOVE 299</h2>
            </div>
            <div className='w-[240px] mt-2 px-1  '>
                <h3 className='font-bold'>Haji's</h3>
                <h3 className='flex items-center gap-2 font-semibold '><MdOutlineStars />
                4.3 25-30 mins</h3>
                <h4 className='font-medium text-gray-500 ' >Biryani, Mughlai, North Indian..</h4>
                <h4 className='font-medium text-gray-500 ' >Garia</h4>
            </div>
        </div>
        </a>
        {/* 24 */}
        <a className='hover:scale-95 transition-all delay-150  ' href="#">
            <div className='cursor-pointer'>
            <div className='flex items-end w-[300px] h-[200px] md:w-[320px] md:h-[320px] lg:w-[240px] lg:h-[180px]  bg-center bg-cover rounded-2xl bg-[url(/House.avif)] '>
                <h2 className=' px-1  font-extrabold text-[#FFFFFFEB] '>125 OFF ABOVE 199</h2>
            </div>
            <div className='w-[240px] mt-2 px-1  '>
                <h3 className='font-bold'>House of Kabab</h3>
                <h3 className='flex items-center gap-2 font-semibold '><MdOutlineStars />
                4.5 25-30 mins</h3>
                <h4 className='font-medium text-gray-500 ' >Kebabs, Mughlai,Snacks,.. </h4>
                <h4 className='font-medium text-gray-500 ' >Garia</h4>
            </div>
        </div>
        </a>
        {/* 25 */}
        <a className='hover:scale-95 transition-all delay-150  ' href="#">
            <div className='cursor-pointer'>
            <div className='flex items-end w-[300px] h-[200px] md:w-[320px] md:h-[320px] lg:w-[240px] lg:h-[180px]  bg-center bg-cover rounded-2xl bg-[url(/Vegdaawat.avif)] '>
                <h2 className=' px-1  font-extrabold text-[#FFFFFFEB] '>166 OFF ABOVE 649</h2>
            </div>
            <div className='w-[240px] mt-2 px-1  '>
                <h3 className='font-bold'>Veg Daawat by Behrouz</h3>
                <h3 className='flex items-center gap-2 font-semibold '><MdOutlineStars />
                4.4 25-30 mins</h3>
                <h4 className='font-medium text-gray-500 ' >Biryani, North Indian, Kebabs..</h4>
                <h4 className='font-medium text-gray-500 ' >Garia</h4>
            </div>
        </div>
        </a>
        {/* 26 */}
        <a className='hover:scale-95 transition-all delay-150  ' href="#">
            <div className='cursor-pointer'>
            <div className='flex items-end w-[300px] h-[200px] md:w-[320px] md:h-[320px] lg:w-[240px] lg:h-[180px]  bg-center bg-cover rounded-2xl bg-[url(public/Quick.avif)] '>
                <h2 className=' px-1  font-extrabold text-[#FFFFFFEB] '>166 OFF ABOVE 399</h2>
            </div>
            <div className='w-[240px] mt-2 px-1  '>
                <h3 className='font-bold'>Quick Crave</h3>
                <h3 className='flex items-center gap-2 font-semibold '><MdOutlineStars />
                4.6 20-25 mins</h3>
                <h4 className='font-medium text-gray-500 ' >Fast Food,Biryani,North..</h4>
                <h4 className='font-medium text-gray-500 ' >Garia</h4>
            </div>
        </div>
        </a>
        {/* 27  */}
        <a className='hover:scale-95 transition-all delay-150  ' href="#">
            <div className='cursor-pointer'>
            <div className='flex items-end  w-[300px] h-[200px] md:w-[320px] md:h-[320px] lg:w-[240px] lg:h-[180px] bg-center bg-cover rounded-2xl bg-[url(/Makhani.avif)] '>
                <h2 className=' px-1  font-extrabold text-[#FFFFFFEB] '>166 OFF ABOVE 499</h2>
            </div>
            <div className='w-[240px] mt-2 px-1  '>
                <h3 className='font-bold'>Makhani Darbar</h3>
                <h3 className='flex items-center gap-2 font-semibold '><MdOutlineStars />
                4.4 25-30 mins</h3>
                <h4 className='font-medium text-gray-500 ' >Biryani, North Indian Indian, kebabs..</h4>
                <h4 className='font-medium text-gray-500 ' >ANUKUL CHANDRA ROAD</h4>
            </div>
        </div>
        </a>
       {/* 28 */}
       <a className='hover:scale-95 transition-all delay-150  ' href="#">
            <div className='cursor-pointer'>
            <div className='flex items-end w-[300px] h-[200px] md:w-[320px] md:h-[320px] lg:w-[240px] lg:h-[180px]  bg-center bg-cover rounded-2xl bg-[url(/Honest.avif)] '>
                <h2 className=' px-1  font-extrabold text-[#FFFFFFEB] '>66% OFF UPTO 126</h2>
            </div>
            <div className='w-[240px] mt-2 px-1  '>
                <h3 className='font-bold'>Honest Bowl</h3>
                <h3 className='flex items-center gap-2 font-semibold '><MdOutlineStars />
                 25-30 mins</h3>
                <h4 className='font-medium text-gray-500 ' >Kebabs, Fast Food, Snacks,..</h4>
                <h4 className='font-medium text-gray-500 ' >Garia</h4>
            </div>
        </div>
        </a>
        
   {/* 29 */}
   <a className='hover:scale-95 transition-all delay-150  ' href="#">
            <div className='cursor-pointer'>
            <div className='flex items-end w-[300px] h-[200px] md:w-[320px] md:h-[320px] lg:w-[240px] lg:h-[180px]  bg-center bg-cover rounded-2xl bg-[url(/Mama.avif)] '>
                <h2 className=' px-1  font-extrabold text-[#FFFFFFEB] '>66% OFF UPTO 136</h2>
            </div>
            <div className='w-[240px] mt-2 px-1  '>
                <h3 className='font-bold'></h3>
                <h3 className='flex items-center gap-2 font-semibold '><MdOutlineStars />
                4.7 25-30 mins</h3>
                <h4 className='font-medium text-gray-500 ' >Mama Mia!-Italian Ice..</h4>
                <h4 className='font-medium text-gray-500 ' >Garia</h4>
            </div>
        </div>
        </a>
    {/* 30 */}
    <a className='hover:scale-95 transition-all delay-150  ' href="#">
            <div className='cursor-pointer'>
            <div className='flex items-end w-[300px] h-[200px] md:w-[320px] md:h-[320px] lg:w-[240px] lg:h-[180px]  bg-center bg-cover rounded-2xl bg-[url(/Cakesl.avif)] '>
                <h2 className='text-2xl px-1  font-extrabold text-[#FFFFFFEB] '></h2>
            </div>
            <div className='w-[240px] mt-2 px-1  '>
                <h3 className='font-bold'>Olio - The Wood Fired Pizzeria</h3>
                <h3 className='flex items-center gap-2 font-semibold '><MdOutlineStars />
                4.8 20-35 mins</h3>
                <h4 className='font-medium text-gray-500 ' >Bakery, Snacks</h4>
                <h4 className='font-medium text-gray-500 ' >Garia</h4>
            </div>
        </div>
        </a>
        {/* 31 */}
        <a className='hover:scale-95 transition-all delay-150  ' href="#">
            <div className='cursor-pointer'>
            <div className='flex items-end w-[300px] h-[200px] md:w-[320px] md:h-[320px] lg:w-[240px] lg:h-[180px]  bg-center bg-cover rounded-2xl bg-[url(/Wowkulfi.avif)] '>
                <h2 className=' px-1 font-extrabold text-[#FFFFFFEB] '>166 OFF ABOVE 399</h2>
            </div>
            <div className='w-[240px] mt-2 px-1  '>
                <h3 className='font-bold'>Wow! Kulfi</h3>
                <h3 className='flex items-center gap-2 font-semibold '><MdOutlineStars />
                4.6 25-30 mins</h3>
                <h4 className='font-medium text-gray-500 ' >Ice Cream, Desserts</h4>
                <h4 className='font-medium text-gray-500 ' >Patuli</h4>
            </div>
        </div>
        </a>
        {/* 32 */}
        <a className='hover:scale-95 transition-all delay-150  ' href="#">
            <div className='cursor-pointer'>
            <div className='flex items-end w-[300px] h-[200px] md:w-[320px] md:h-[320px] lg:w-[240px] lg:h-[180px]  bg-center bg-cover rounded-2xl bg-[url(/Dariole.avif)] '>
                <h2 className=' px-3  font-extrabold text-[#FFFFFFEB] '>75 OFF ABOVE 249</h2>
            </div>
            <div className='w-[240px] mt-2 px-1  '>
                <h3 className='font-bold'>Dariole</h3>
                <h3 className='flex items-center gap-2 font-semibold '><MdOutlineStars />
                4.7 30-35 mins</h3>
                <h4 className='font-medium text-gray-500 ' >Bakery, Desserts</h4>
                <h4 className='font-medium text-gray-500 ' >Naktala</h4>
            </div>
        </div>
        </a>
       
        
 
               


      </div>
      






    </div>
  )
}

export default Resturants
