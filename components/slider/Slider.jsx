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
      lazyPreloadPrevNext={1}
      breakpoints={{
        320: {
          slidesPerView: 1.5,
          spaceBetween: 10,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1.5,
          spaceBetween: 10,
        },
        700: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1500: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1820: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      }}
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
// "use client";
// import React from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";

// // import required modules
// import { EffectCoverflow, Pagination } from "swiper/modules";

// export default function Slider(props) {
//   return (
//     <>
//       <Swiper
//         effect={"coverflow"}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={"auto"}
//         coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         pagination={true}
//         modules={[EffectCoverflow, Pagination]}
//         className="mySwiper"
//       >
//         {React.Children.map(props.children, (child, index) => (
//           <SwiperSlide key={child} virtualIndex={index}>
//             {child}
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </>
//   );
// }
