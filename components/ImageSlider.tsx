import React from 'react'
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

const pics = [
    {id: 1, img: require('../assets/images/IMG1.png')}, 
    {id: 2, img: require('../assets/images/IMG2.png')}, 
    {id: 3, img: require('../assets/images/IMG3.png')}, 
] 

const ImageSlider = () => {
  return (
      <div className='bg-yellow-300 h-full flex' >
          <Swiper
              spaceBetween={0}
              slidesPerView={1}
              onSlideChange={() => {}}
              onSwiper={(swiper) => {}}
              effect='fade'
          >
              {
                  pics?.map((item) => (<SwiperSlide>
                      <div className='w-full h-full' >
                          <Image 
                              src={item.img}
                              alt='stacfx.com'
                              className='w-full h-full object-cover'
                          />

                      </div>
                  </SwiperSlide>))
              }
              
          </Swiper> 
    </div>
  )
}

export default ImageSlider