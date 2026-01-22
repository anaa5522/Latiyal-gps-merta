import React from "react";

export default function About() {
  return (
    <div className="w-full bg-white text-gray-800">

      {/* ===== HERO (Contact Theme) ===== */}
      <section className="relative h-[40vh] flex items-center justify-center bg-[url('/4c9bc507bd6c4bda4cd5b60222c092c7.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative text-center px-4">
          <h1 className="text-4xl md:text-6xl font-serif text-white">About Us</h1>
          
        </div>
      </section>

      {/* ===== ABOUT CONTENT ===== */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <img
          src="fcd3c92c1005803424a3b0b650097cf5.jpg"
          alt="About Work"
        
          className="rounded-2xl shadow-lg"
        />

        <div>
          <span className="text-yellow-500 text-sm font-semibold">About Us</span>
          <h2 className="text-3xl md:text-4xl font-serif mt-3 mb-4">
            We Deliver Smart GPS Solutions
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We specialize in advanced GPS tracking solutions designed to help
            individuals and businesses monitor vehicles, enhance security, and
            improve operational efficiency in real time.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full font-semibold transition">
            Contact Us
          </button>
        </div>
      </section>

      {/* ===== SKILLS / STATS ===== */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Skills */}
        <div>
          <h3 className="text-4xl font-serif mb-10">Our Expertise</h3>
          {["Live Vehicle Tracking", "Fleet Management", "Real-time Alerts"].map(
            (skill, i) => (
              <div key={i} className="mb-10">
                <div className="flex justify-between text-md mb-1">
                  <span>{skill}</span>
                  <span>{[90, 85, 80][i]}%</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded">
                  <div
                    className="bg-yellow-500 h-2 rounded"
                    style={{ width: `${[90, 85, 80][i]}%` }}
                  ></div>
                </div>
              </div>
            )
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 text-center">
          {[
            ["8+", "Years Experience"],
            ["50K+", "Devices Installed"],
            ["5K+", "Happy Clients"],
            ["24/7", "Support"],
          ].map(([num, label], i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="text-3xl font-bold text-[#FCB13B]">{num}</h4>
              <p className=" text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA (Same as Contact Page) ===== */}
      <section className="relative py-24  bg-center text-center">
        <div className="absolute inset-0 "></div>
        <div className="relative max-w-2xl mx-auto text-black">
          <h2 className="text-4xl font-serif mb-4">
            Smart Tracking for Safer Journeys
          </h2>
          <p className="text-[#383838] mb-8">
            We are always ready to help you secure and manage your vehicles
            with advanced GPS technology.
          </p>
          <button className="bg-white text-white px-8 py-3 rounded-full font-semibold
           hover:shadow-xl hover:scale-[1.02] transition-all duration-500  hover:bg-yellow-600 bg-yellow-500">
            GET START
          </button>
        </div>
      </section>

    </div>
  );
}
