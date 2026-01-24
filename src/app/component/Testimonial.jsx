"use client";

import Slider from "react-slick";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Donna Stroupe",
    role: "Customers",
    message:
      "I had a last-minute Airbnb guest arriving and needed an urgent clean. They fit me in the same day and did an incredible job. The place looked hotel-ready.",
   image: "/f661ea61616909838a9fbfeda0d2ea14.jpg",
  },
  {
    name: "Rahul Sharma",
    role: "Fleet Manager",
    message:
      "This GPS tracking system helped us reduce fuel cost and improve tracking accuracy. Support team is amazing!",
    image: "/f661ea61616909838a9fbfeda0d2ea14.jpg",
  },
  {
    name: "Anita Verma",
    role: "Business Owner",
    message:
      "Clean UI, real-time data and detailed reports. One of the best tracking solutions we’ve used.",
    image: "/f661ea61616909838a9fbfeda0d2ea14.jpg",
  },
];

export default function TestimonialSlider() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <section className="h-auto  flex items-center justify-center  px-4 py-20">
      <div className="max-w-3xl w-full">

        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="px-3">

                  

              <div className="relative bg-white rounded-3xl p-15 my-10 ">

                {/* Top Quote */}
                <span className="absolute -top-6 left-6 text-orange-400 text-6xl">
                  “
                </span>

                {/* Profile Pill */}
                <div className="absolute -top-10 right-6 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full px-5 py-2 flex items-center gap-3 shadow-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    width={36}
                    height={36}
                    className="rounded-full border-2 border-white"
                  />
                  <div className="text-white leading-tight">
                    <p className="font-semibold text-sm">{item.name}</p>
                    <p className="text-xs opacity-90">{item.role}</p>
                  </div>
                </div>

                {/* Content */}
                <p className="font-montserrat font-light text-[13.3px] leading-[21.3px]  text-gray-600 text-sm leading-relaxed mt-6">
                  {item.message}
                </p>

                {/* Divider */}
                <div className="w-20 h-[1px] bg-gray-300 my-5" />

                {/* Stars */}
                <div className="flex gap-1 text-orange-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* Bottom Quote */}
                <span className="absolute -bottom-6 right-8 text-orange-400 text-6xl rotate-180">
                  “
                </span>
              </div>

            </div>
          ))}
        </Slider>

      </div>
    </section>
  );
}
