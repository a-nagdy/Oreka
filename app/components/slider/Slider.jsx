"use client";

import React from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  Virtual,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Slider = (props) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Virtual]}
      spaceBetween={10}
      slidesPerView={props.count}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: props.delay,
        disableOnInteraction: false,
      }}
      loop={true}
      className={props.styles}
    >
      {/* Render each SwiperSlide using the props.children */}
      {React.Children.map(props.children, (child, index) => (
        <SwiperSlide key={child} virtualIndex={index}>
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
