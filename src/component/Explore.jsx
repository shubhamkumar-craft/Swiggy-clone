import React from 'react'

const Explore = () => {
  return (
    <div className='px-2 lg:px-24 mt-16 overflow-hidden'>
    <div>
        <h1 className='px-2 text-xl md:text-2xl font-bold md:font-extrabold '>Explore Every Restaurants Near Me
        </h1>
    </div>
    <div className='px-2  grid grid-cols-2 md: lg:grid-cols-4 justify-items-evenly  gap-y-4 mt-5 ' >
        <div className='px-4 py-3 rounded-xl font-semibold border-gray-500 border-[1px] text-gray-800 w-[140px] s:w-[180px] sm:w-[200px] md:w-[250px] lg:w-[200px] text-center items-center flex '> <a href="#">Explore Restaurant Near Me</a></div>
        <div className='px-4 py-3 rounded-xl font-semibold border-gray-500 border-[1px] text-gray-800 w-[140px] s:w-[180px] sm:w-[200px] md:w-[250px] lg:w-[200px] text-center items-center flex '> <a href="#">Explore Top Rated Restaurant Near Me</a></div>
     </div>
    </div>
  )
}

export default Explore
