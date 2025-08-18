'use client'

import Image from 'next/image';
import React, { useState, useEffect } from "react";

export default function Home() {
  const data = [
        {
          src: '/jacobmeet.jpg',
          alt: 'JacobMeet'

        },
        {
          src: '/thomas.jpg',
          alt: 'Thomas'

        },
        {
          src: '/codingmeeting.jpg',
          alt: 'Coding Meeting'

        }]
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselInfiniteScroll = () => {
    if (currentIndex === data.length-1) {
      return setCurrentIndex(0)
    }
    return setCurrentIndex(currentIndex + 1)
  }

  useEffect(()=>{
    const interval = setInterval(()=> {carouselInfiniteScroll()}, 3000)
  return () => clearInterval(interval)})
  


  return (
      
      <div className="flex flex-nowrap md:overflow-hidden bg-yellow">
        { data.map((item, index) => {
          return <div className='h-20 w-full min-w-full flex items-center justify-content-center transition delay-150 duration-300 ease-in-out'
                  style={{transform: `translate(-${currentIndex * 100}%)`}}
                  key={index}>
                    <div>
                      <Image
                      src = {item.src}
                      alt= {item.alt}
                      width={200}
                      height={200}
                      />
                    </div>
                  </div>
              
        })}
        </div>

    
  );
}