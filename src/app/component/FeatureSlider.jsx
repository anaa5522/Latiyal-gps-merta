"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { FaMapMarkerAlt, FaShieldAlt, FaCloud, FaBolt } from "react-icons/fa";

export default function FeatureSlider() {
  const features = [
    { icon: <FaMapMarkerAlt />, title: "Live Location" },
    { icon: <FaShieldAlt />, title: "Secure Data" },
    { icon: <FaCloud />, title: "Cloud Sync" },
    { icon: <FaBolt />, title: "Instant Alerts" },
    { icon: <FaMapMarkerAlt />, title: "Live Location" },
    { icon: <FaShieldAlt />, title: "Secure Data" },
    { icon: <FaCloud />, title: "Cloud Sync" },
    { icon: <FaBolt />, title: "Instant Alerts" },
  ];

  return (
    <div className="w-full px-4  bg-[#F6F2EA]">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 5 },
        }}
      >
        {features.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#F6F2EA] mb-6 md:mb-10 p-4 md:p-6 flex items-center justify-center min-h-[120px] md:min-h-[160px]">

              <div className="flex flex-col items-center justify-center text-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105 cursor-pointer">

                <div className="text-3xl md:text-4xl text-[#FCB13B] mb-2 md:mb-3">
                  {item.icon}
                </div>

                <p className="text-sm md:text-base text-gray-800 font-medium">
                  {item.title}
                </p>

              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}