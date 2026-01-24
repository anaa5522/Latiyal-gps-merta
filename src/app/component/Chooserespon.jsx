"use client";

import Image from "next/image";
import { FaMicrochip, FaCloud, FaShieldAlt, FaCogs, } from "react-icons/fa";
import { SiSoundcharts } from "react-icons/si";
import { RiGpsFill } from "react-icons/ri";
import { FaLocationArrow } from "react-icons/fa6";


export default function Chooserespon() {
  const features = [
    {
      icon: <FaMicrochip className="text-[#FCB13B] text-4xl" />,
      title: "Robust Devices",
      desc: "Industrial-grade hardware built to withstand extreme conditions",
    },
    {
      icon: <SiSoundcharts className="text-[#FCB13B] text-4xl" />,
      title: "Stable & Accurate Data",
      desc: "Precision tracking with 99.9% data accuracy guarantee",
    },
    {
      icon: <FaShieldAlt className="text-[#FCB13B] text-4xl" />,
      title: "Edge Processing",
      desc: "On-device analytics for real-time decision making",
    },
    {
      icon: <RiGpsFill className="text-[#FCB13B] text-4xl" />,
      title: "Remote ECU Provisioning",
      desc: "Over-the-air updates and remote configuration",
    },
    {
      icon: <FaLocationArrow className="text-[#FCB13B] text-4xl" />,
      title: "Dead Reckoning",
      desc: "Continuous tracking even in GPS-denied environments",
    },
    {
      icon: <FaCloud className="text-[#FCB13B] text-4xl" />,
      title: "Cloud Mobility Platform",
      desc: "Scalable cloud infrastructure for enterprise needs",
    },
  ];

  return (
    <div className="w-full">

      {/* 🔹 HERO SECTION */}
      <section className="  py-15 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-inter font-semibold text-[28px] mb-6">
          About <span className="text-[#FCB13B]">Technology</span>
        </h1>
        <p className="font-montserrat font-light text-[13.3px] leading-[21.3px] max-w-2xl mx-auto text-lg opacity-90">
          Discover how our cutting-edge technology is revolutionizing fleet management,
          delivering accurate data, enhancing safety, and enabling smarter operations.
        </p>
      </section>

      {/* 🔹 FEATURES SECTION */}
      <section className=" py-15">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 ">
          {features.map((item, index) => (
            <div key={index} className="flex items-start gap-6 bg-white p-6  rounded-2xl shadow  transition hover:shadow-[0_10px_20px_rgba(252,177,59,0.45)]">
              <div>{item.icon}</div>
              <div>
                <h3 className="font-inter font-semibold text-[28px] text-2xl font-bold text-[#1A1A1A]">{item.title}</h3>
                <p className="font-montserrat font-light text-[13.3px] leading-[21.3px] text-gray-600 mt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 TECHNOLOGY IMAGE SECTION */}
      <section className="md:py-20 bg-[#F6F2EA]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row  gap-30">
          <div className="md:w-1/2 px-8 pt-10">
            <h2 className="font-inter font-semibold text-[28px] md:text-4xl font-bold mb-8">
              <span className="text-[#FCB13B]">Innovation</span> at its Core
            </h2>
            <p className="font-montserrat font-light text-[13.3px] leading-[21.3px] text-gray-600 leading-relaxed text-lg">
              Our technology combines advanced hardware, cloud connectivity, and smart algorithms
              to provide a complete solution for fleet management, vehicle tracking, and operational optimization.
              Every feature is designed to give you real-time insights and reliable data.
            </p>
          </div>
          <div className="md:w-1/2 ">
            <img
              src="895ce474aba672cc0b0ab5d5756be321.jpg"
              alt="Technology Illustration"
              width={400}
              height={300}
              className="rounded-2xl  shadow-2xl"
            />
          </div>
        </div>
      </section>



    </div>
  );
}
