"use client";

import { FaSatelliteDish, FaMobileAlt } from "react-icons/fa";
import { MdGpsFixed } from "react-icons/md";

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
    <section
      className="relative py-24 bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: "url('/IMG_20260404_164436.png')", // 👈 same image use kar
      }}
    >
      {/* Overlay (important for readability) */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#FCB13B] font-semibold tracking-widest uppercase mb-2">
            How It Works
          </p>

          <h2 className="font-bold text-4xl md:text-5xl text-white">
            Get Started in{" "}
            <span className="text-[#FCB13B]">3 Simple Steps</span>
          </h2>

          <p className="text-white mt-4 max-w-2xl mx-auto">
            From installation to tracking, we make it incredibly easy to monitor your vehicles.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white border border-[#F6F2EA] rounded-3xl p-10 text-center shadow-md hover:shadow-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] transform hover:scale-[1.04]"
            >
              
              {/* Step Badge */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#FCB13B] text-black px-5 py-1.5 rounded-full text-sm font-semibold shadow">
                {item.step}
              </div>

              {/* Icon */}
              <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-2xl bg-[#F6F2EA] text-[#FCB13B] text-4xl mb-8 transition-transform duration-500 group-hover:scale-110">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="font-semibold text-2xl mb-4 text-black">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.desc}
              </p>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FCB13B]/20 to-transparent rounded-3xl"></div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}