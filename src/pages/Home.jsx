import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import sliderImg from '../util/slider';

export default function Home() {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          sliderImg.map((v, i) => {
            return <SwiperSlide className='relative'>
              <img className='w-full h-96 blur-sm' src={v} />
              <img className='h-96 m-auto absolute top-0 left-0 right-0' src={v} />
            </SwiperSlide>
          })
        }
      </Swiper>
    </>
  );
}