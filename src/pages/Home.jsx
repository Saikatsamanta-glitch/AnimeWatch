import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

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
        <SwiperSlide className='w-full  bg-slate-400'> <img className='h-96 m-auto' src='https://assets-prd.ignimgs.com/2022/08/17/top25animecharacters-blogroll-1660777571580.jpg' /> </SwiperSlide>
        <SwiperSlide className='w-full  bg-slate-400'></SwiperSlide>
        <SwiperSlide className='w-full  bg-slate-400'></SwiperSlide>
        <SwiperSlide className='w-full  bg-slate-400'></SwiperSlide>
        <SwiperSlide className='w-full  bg-slate-400'></SwiperSlide>

      </Swiper>
    </>
  );
}