"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import {
  FaMapMarkerAlt,
  FaShieldAlt,
  FaCloud,
  FaBolt,
} from "react-icons/fa";

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
    <div className="w-full py-6 px-4 bg-[#F6F2EA]">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={16}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        {features.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="px-2">
              <div className="max-w-[320px] mx-auto group flex items-center gap-4 bg-white border border-[#FCB13B]/20 rounded-2xl px-4 py-4 shadow-sm hover:shadow-lg transition-all duration-300">

                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#FCB13B] flex items-center justify-center text-white text-xl">
                  {item.icon}
                </div>

                {/* Divider */}
                <div className="w-px h-10 bg-[#FCB13B]/30"></div>

                {/* Text */}
                <h3 className="text-sm font-semibold text-gray-800 leading-tight">
                  {item.title}
                </h3>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}