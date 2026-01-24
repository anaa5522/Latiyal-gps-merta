"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaShieldAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdElectricBolt } from "react-icons/md";
import { FaLocationPinLock } from "react-icons/fa6";
import { IoMdWifi } from "react-icons/io";
import { IoMdClock } from "react-icons/io";

export default function SoloSlider() {

  const settings = {
    infinite: true,
    speed: 500,
    arrows: false,
    dots: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToScroll: 1,
    slidesToShow: 4,

    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const items = [
    {
      id: 1,
      icon:<FaShieldAlt className="text-[#FCB13B] text-2xl"/> , 
      title: "99.9% Uptime" 
    },
    {
      id: 2,
      icon: <FaMapLocationDot className="text-[#FCB13B] text-2xl"/>,
      title: "Live Tracking"
    },
    {
      id: 3,
      icon: <MdElectricBolt className="text-[#FCB13B] text-2xl"/>,
      title: "Easy Setup"
    },
    {
      id: 4,
      icon: <FaLocationPinLock className="text-[#FCB13B] text-2xl"/>,
      title: "Secure Data"
    },
    {
      id: 5,
      icon: <IoMdWifi className="text-[#FCB13B] text-2xl"/>,
      title: "Always Connected"
    },
    {
      id: 6,
      icon: <IoMdClock className="text-[#FCB13B] text-2xl"/>,
      title: "24/7 Support"
    },
    
    
    
  ];

  

  return (
    <section className="bg-[#F6F2EA] ">
      <div className="  bg-  py-2 ">
        <Slider {...settings}>
          {items.map((item) => (
            <div key={item.id}className="">
              <div className="flex gap-3 justify-center">
                <p>{item.icon}</p>
                <p className="text-lg font-semibold">{item.title}</p>
              </div>
                
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}