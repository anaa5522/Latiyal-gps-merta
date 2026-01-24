"use client";

import { motion } from "framer-motion";
import { FaSatelliteDish } from "react-icons/fa";
import { MdGpsFixed } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";

export default function How() {
  const steps = [
    {
      step: "Step 01",
      title: "Device Installation",
      desc: "Our expert technicians install the GPS device in your vehicle within minutes. No complex wiring required.",
      icon: <MdGpsFixed />,
    },
    {
      step: "Step 02",
      title: "Satellite Connection",
      desc: "The device connects to multiple satellites for precise location tracking with accuracy up to 2.5 meters.",
      icon: <FaSatelliteDish />,
    },
    {
      step: "Step 03",
      title: "Live Tracking",
      desc: "Access real-time location, speed, and vehicle data through our web dashboard or mobile app.",
      icon: <FaMobileAlt />,
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="font-montserrat  text-[#FCB13B] font-semibold tracking-widest uppercase mb-2">
            How It Works
          </p>

          <h2 className="font-inter font-semibold text-[28px] text-4xl md:text-5xl font-bold text-gray-900">
            Get Started in <span className="text-[#FCB13B]">3 Simple Steps</span>
          </h2>

          <p className="font-montserrat font-light text-[13.3px] leading-[21.3px] mt-4 text-gray-600 max-w-2xl mx-auto">
            From installation to tracking, we make it incredibly easy to monitor your vehicles.
          </p>
        </div>

        {/* Steps */}
        <div className="font-montserrat grid grid-cols-1 md:grid-cols-3 gap-10 relative ">

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
              className="relative bg-[#F6F2EA] rounded-3xl p-10 text-center shadow-xl "
            >
              {/* Step Badge */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#FCB13B] text-black px-5 py-1.5 rounded-full text-sm font-semibold shadow">
                {item.step}
              </div>

              {/* Icon */}
              <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-2xl bg-white text-[#FCB13B] text-4xl mb-8">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="font-inter font-semibold text-[28px] text-2xl   mb-4">
                {item.title}
              </h3>

              <p className="font-montserrat font-light text-[13.3px] leading-[21.3px]  text-[#383838] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
