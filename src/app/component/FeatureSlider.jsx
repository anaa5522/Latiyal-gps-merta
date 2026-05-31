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
    <div className="w-full px-4 bg-[#F6F2EA]">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        loop={true}
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
            <div className="py-3">
              <div className="group relative overflow-hidden rounded-[24px] bg-white px-5 py-5 border border-white/50 backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(252,177,59,0.18)] transition-all duration-500 hover:-translate-y-2">

                {/* Top Accent */}
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#FCB13B] via-[#FFD58A] to-[#FCB13B]"></div>

                {/* Background Glow */}
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-[#FCB13B]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Icon */}
                <div className="relative z-10 flex justify-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FCB13B] to-[#FFD58A] flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500">
                    <div className="text-white text-2xl">
                      {item.icon}
                    </div>
                  </div>
                </div>

                {/* Text */}
                <h3 className="relative z-10 text-center mt-4 text-[15px] font-semibold text-gray-900">
                  {item.title}
                </h3>

                {/* Bottom Indicator */}
                <div className="relative z-10 flex justify-center mt-3">
                  <div className="h-[3px] w-0 bg-[#FCB13B] rounded-full group-hover:w-10 transition-all duration-500"></div>
                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}