"use client";

import { motion } from "framer-motion";
import { FaSatelliteDish } from "react-icons/fa";
import { MdGpsFixed } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";

export default function Choose() {
  const steps = [
    {
      
      title: "INNOVATE",
      uco:"Fresh Solutions",
      desc: "Our expert technicians install the GPS device in your vehicle within minutes. No complex wiring required.",
      icon: <MdGpsFixed />,
      
    },
    {
      
      title: "OPTIMISE",
      uco:"Streamline Operations",
      desc: "The device connects to multiple satellites for precise location tracking with accuracy up to 2.5 meters.",
      icon: <FaSatelliteDish />,
    },
    {
      
      title: "DELIVER",
      uco:"Reliable Results",
      desc: "Access real-time location, speed, and vehicle data through our web dashboard or mobile app.",
      icon: <FaMobileAlt />,
    },
  ];

  return (
    <section className=" bg-[#F6F2EA] py-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#FCB13B] font-bold font-montserrat tracking-widest uppercase mb-2">
            why choose us 
          </p>

          <h2 className="text-4xl md:text-5xl font-inter font-semibold text-[28px] text-gray-900">
            We Help You <span className="text-[#FCB13B]">Succeed</span>
          </h2>

          <p className="font-montserrat font-light text-[13.3px] leading-[21.3px] mt-4 text-gray-600 max-w-2xl mx-auto">
            With 16+ years of experience, we understand what it takes to deliver exceptional GPS tracking solutions.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">

          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.15,
              }}
              className="relative rounded-3xl p-10 text-center shadow-xl bg-white"
            >
              {/* Step Badge */}
             

              {/* Icon */}
              <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-2xl bg-white text-[#FCB13B] text-4xl mb-8">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl  text-[#FCB13B] font-inter font-semibold text-[28px]  mb-4">
                {item.title}
              </h3>
              <h4 className="font-montserrat tracking-widest text-lg mb-4">
                {item.uco}
              </h4>

              <p className="font-montserrat font-light text-[13.3px] leading-[21.3px] text-[#383838] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
