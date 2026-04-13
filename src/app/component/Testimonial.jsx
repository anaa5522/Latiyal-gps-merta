"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

export default function Testimonial() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Fleet Manager",
      image: "/121950523b28efbce9568e1f568d871e.jpg",
      review:
        "This GPS system completely transformed how we track our vehicles. Super accurate and easy to use!",
    },
    {
      name: "Amit Verma",
      role: "Business Owner",
      image: "/f661ea61616909838a9fbfeda0d2ea14.jpg",
      review:
        "Real-time tracking this are also good  alerts are amazing. I feel much more secure about my fleet now.",
    },
    {
      name: "Neha Gupta",
      role: "Logistics Head",
      image: "/f661ea61616909838a9fbfeda0d2ea14.jpg",
      review:
        "Clean dashboard, fast updates, and excellent support. Highly recommended for any business.",
    },
    {
      name: "Rahul Sharma",
      role: "Fleet Manager",
      image: "/121950523b28efbce9568e1f568d871e.jpg",
      review:
        "This GPS system completely transformed how we track our vehicles. Super accurate and easy to use!",
    },
    {
      name: "Amit Verma",
      role: "Business Owner",
      image: "/f661ea61616909838a9fbfeda0d2ea14.jpg",
      review:
        "Real-time tracking this are also good and alerts are amazing. I feel much more secure about my fleet now.",
    },
    {
      name: "Neha Gupta",
      role: "Logistics Head",
      image: "/f661ea61616909838a9fbfeda0d2ea14.jpg",
      review:
        "Clean dashboard, fast updates, and excellent support. Highly recommended for any business.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F6F2EA] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#FCB13B] text-xs md:text-sm font-semibold tracking-widest uppercase mb-2">
            Testimonials
          </p>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-900">
            What Our Clients Say
          </h2>

          <p className="text-gray-600 mt-3 md:mt-4 max-w-xl mx-auto text-xs md:text-sm">
            Trusted by businesses across industries for reliable GPS tracking solutions.
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          slidesPerView={1} // ✅ mobile fix
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10 md:pb-12"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="group h-full"
              >
                {/* Card */}
                <div className="relative bg-white mb-10 md:mb-10 rounded-3xl p-5 md:p-8 h-full border border-[#F1ECE4] shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

                  {/* Review */}
                  <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed mb-8 md:mb-10">
                    {item.review}
                  </p>

                  {/* Bottom Strip */}
                  <div className="flex items-center justify-between bg-[#F9F7F3] px-3 md:px-4 py-2 md:py-3 rounded-xl">

                    {/* User */}
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-9 h-9 md:w-10 md:h-10 rounded-full object-cover"
                        />
                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 border-2 border-white rounded-full"></span>
                      </div>

                      <div>
                        <p className="text-xs md:text-sm font-semibold text-gray-900">
                          {item.name}
                        </p>
                        <p className="text-[10px] md:text-[11px] text-gray-500">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex gap-[2px] text-[#FCB13B] text-[10px] md:text-xs">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>

                  </div>

                  {/* Hover Accent */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#FCB13B]/10 to-transparent rounded-3xl"></div>
                  </div>

                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}