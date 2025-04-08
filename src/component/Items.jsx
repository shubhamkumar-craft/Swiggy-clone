import React from 'react';

const Items = () => {
  const foodItems = [
    { src: "/Ramnavami.avif", alt: "Ramnavami" },
    { src: "/Pizza.avif", alt: "Pizza" },
    { src: "/Bariyani.avif", alt: "Biryani" },
    { src: "/cake.avif", alt: "Cake" },
    { src: "/northindian1.avif", alt: "North Indian" },
    { src: "/burger.avif", alt: "Burger" },
    { src: "/Momos.avif", alt: "Momos" },
    { src: "/Rasgulla.avif", alt: "Rasgulla" },
    { src: "/Noodles.avif", alt: "Noodles" },
    { src: "/Chinese2.avif", alt: "Chinese" },
    { src: "/Dosa.avif", alt: "Dosa" },
    { src: "/Paratha.avif", alt: "Paratha" },
    { src: "/Rasmalai.avif", alt: "Rasmalai" },
    { src: "/Rolls1.avif", alt: "Rolls" }
  ];

  return (
    <div className='px-2 lg:px-24'>
      <div>
        <h1 className='font-bold text-xl px-2 py-2'>What's on your mind?</h1>
      </div>
      <div className='relative'>
        <div className='flex overflow-x-auto h-52 pb-4 scrollbar-hide'>
          {foodItems.map((item, index) => (
            <div key={index} className='flex-shrink-0 px-1'>
              <a href="#">
                <img 
                  className='h-[173px] w-[150px] object-cover rounded-lg hover:scale-105 transition-transform duration-300'
                  src={item.src} 
                  alt={item.alt} 
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Items;
