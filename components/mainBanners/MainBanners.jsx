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
import bannerImg from "../../public/assets/images/banner.png";

const DUMMY_IMGS = [
  { src: bannerImg, alt: "test" },
  { src: bannerImg, alt: "test" },
  { src: bannerImg, alt: "test" },
  { src: bannerImg, alt: "test" },
  { src: bannerImg, alt: "test" },
];
const MainBanners = async () => {
  return (
    <div className="w-full h-[9rem] sm:h-[15rem] md:h-[20rem] lg:h-[25rem] 2xl:h-[42rem]">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={5}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        className="h-full"
        loop={true}
      >
        {DUMMY_IMGS.map((img, index) => {
          return (
            <SwiperSlide key={index}>
              <Image
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="-z-[1] object-cover h-full"
                fill={true}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default MainBanners;
