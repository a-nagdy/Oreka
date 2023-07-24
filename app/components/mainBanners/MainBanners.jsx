"use client";

import Image from "next/image";
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
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import bannerImg from "../../../public/assets/test2.jpg";

const DUMMY_IMGS = [
  { src: bannerImg, alt: "test" },
  { src: bannerImg, alt: "test" },
  { src: bannerImg, alt: "test" },
  { src: bannerImg, alt: "test" },
  { src: bannerImg, alt: "test" },
];

const MainBanners = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={5}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {DUMMY_IMGS.map((img, index) => {
          return (
            <SwiperSlide key={index}>
              <Image src={img.src} alt={img.alt} className="h-[42rem]" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default MainBanners;
