import React from "react";
import "./HomeSlider.css";
import { Link, NavLink } from 'react-router-dom'

// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import required modules
import { Navigation } from "swiper/modules";
import { useRef } from 'react';

// import slider1 from "/images/slider/slider1.webp";
// import slider2 from "/images/slider/slider2.webp";
// import slider3 from "/images/slider/slider3.webp";

const HomeSlider = () => {
    const swiperRef = useRef();
  return (
    <div className=" pb-5">
      <Swiper className="slider" modules={[Navigation]} onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}>
        <SwiperSlide ><img src="/images/slider/slider1.webp" className="slider-photo" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/slider/slider2.webp" className="slider-photo" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/slider/slider3.webp" className="slider-photo" alt="" /></SwiperSlide>

      </Swiper>
      <div className="slider-buttons">
        <button className="border-white" onClick={() => swiperRef.current?.slidePrev()}><i class="bi bi-chevron-double-left slider-button"></i></button>
        <button className="border-white" onClick={() => swiperRef.current?.slideNext()}><i class="bi bi-chevron-double-right slider-button"></i></button>
      </div>
{/* !------------------------------------ */}
<div className="slider-square">
   

</div>
<div  className="slider-square-2 ">

   </div>
   
   <div className="sozler">
 <p className="Stay-Warm ">Stay Warm</p>
 <p className="Winter-2023">Winter-2023</p>
 <Link to="/shop" className=" square-button text-decoration-none">Shop Now<i class="bi bi-chevron-double-right shop-now-arrow"></i></Link>
</div>
    </div>
  );
};

export default HomeSlider;
