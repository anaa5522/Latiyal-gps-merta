"use client";

import {
  FaTruck,
  FaMapMarkedAlt,
  FaSatelliteDish,
  FaShieldAlt,
  FaCar,
  FaChartLine,
} from "react-icons/fa";

const services = [
  {
    id: "01",
    title: "Real-Time Vehicle Tracking",
    desc: "Track your vehicles live with accurate GPS location, speed, route history and instant updates.",
    icon: <FaMapMarkedAlt />,
    active: true,
  },
  {
    id: "02",
    title: "Fleet Management Solutions",
    desc: "Manage fleets efficiently with driver behavior monitoring, route optimization and fuel tracking.",
    icon: <FaTruck />,
  },
  {
    id: "03",
    title: "Live GPS Monitoring Dashboard",
    desc: "User-friendly dashboard to monitor vehicles, set alerts and generate detailed reports.",
    icon: <FaSatelliteDish />,
  },
  {
    id: "04",
    title: "Vehicle Safety & Anti-Theft",
    desc: "Protect your vehicles with geo-fencing, ignition cut-off and theft alert systems.",
    icon: <FaShieldAlt />,
  },
  {
    id: "05",
    title: "Personal & Asset Tracking",
    desc: "Track personal vehicles, assets and equipment with compact and reliable GPS devices.",
    icon: <FaCar />,
  },
  {
    id: "06",
    title: "Reports & Analytics",
    desc: "Get detailed insights with trip reports, idle time, speed analysis and performance data.",
    icon: <FaChartLine />,
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#F6F7FB]">

      {/* HERO */}
      <section className="relative h-[300px] bg-[url('/ee679e37341f536297e1fd7454c00e69.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold">Our GPS Services</h1>
          <p className="text-sm opacity-80 mt-2">
            Smart tracking solutions for vehicles, fleets and assets
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold mb-3">What We Offer</h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-12">
          Advanced GPS tracking services designed for safety, control and efficiency
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item) => (
            <div
              key={item.id}
              className={`relative rounded-2xl p-8 text-left transition-all duration-300
              ${
                item.active
                  ? "bg-gradient-to-br from-[#262F6C] to-[#1A1F4A] text-white shadow-xl scale-105"
                  : "bg-white hover:shadow-lg"
              }`}
            >
              <span className="text-4xl font-bold opacity-20 absolute top-4 right-6">
                {item.id}
              </span>

              <div
                className={`text-4xl mb-6 ${
                  item.active ? "text-[#FCB13B]" : "text-[#262F6C]"
                }`}
              >
                {item.icon}
              </div>

              <h3 className="font-semibold text-lg mb-3">
                {item.title}
              </h3>

              <p className={`text-sm ${item.active ? "text-white/90" : "text-gray-500"}`}>
                {item.desc}
              </p>

              <button
                className={`mt-6 px-5 py-2 rounded-full text-sm font-medium
                ${
                  item.active
                    ? "bg-[#FCB13B] text-black"
                    : "border border-gray-300 hover:bg-gray-100"
                }`}
              >
                VIEW DETAILS
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#262F6C] py-20 text-center text-white px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Smarter Tracking. Better Control.
        </h2>
        <p className="text-sm md:text-base mb-6 opacity-90">
          Join thousands of businesses using our GPS tracking solutions.
        </p>
        <button className="bg-[#FCB13B] text-black px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition">
          GET GPS DEMO
        </button>
      </section>

    </div>
  );
}
