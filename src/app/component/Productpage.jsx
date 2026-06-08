"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ProductPage() {
  const services = [
    "GPS Tracker",
    "AIS 140 GPS Tracking",
    "Fuel Monitoring",
    "Weighbridge",
    "IoT Solutions",
  ];

  const products = [
    {
      id: 1,
      name: "AIS 140 GPS Tracker",
      image: "/DSC08383.JPG",
      category: "AIS 140 GPS Tracking",
      price: "₹5,000",
    },
    {
      id: 2,
      name: "AIS 140 GPS Tracker",
      image: "/DSC08389.JPG",
      category: "AIS 140 GPS Tracking",
      price: "₹5,000",
    },
    {
      id: 3,
      name: "AIS 140 GPS Tracker",
      image: "/DSC08361.JPG",
      category: "AIS 140 GPS Tracking",
      price: "₹5,000",
    },
    {
      id: 4,
      name: "AIS 140 GPS Tracker",
      image: "/DSC08363.JPG",
      category: "AIS 140 GPS Tracking",
      price: "₹5,000",
    },
    {
      id: 5,
      name: "AIS 140 GPS Tracker",
      image: "/DSC08365.JPG",
      category: "AIS 140 GPS Tracking",
      price: "₹5,000",
    },
    {
      id: 6,
      name: "AIS 140 GPS Tracker",
      image: "/DSC08369.JPG",
      category: "AIS 140 GPS Tracking",
      price: "₹5,000",
    },
    {
      id: 1,
      name: "GPS Tracker",
      image: "/imgi_80_DSC06313-copy-2048x2048.jpg",
      category: "GPS Tracker",
      price: "₹5,000",
    },{
      id: 2,
      name: "GPS Tracker",
      image: "/imgi_87_DSC03470-2048x2048.jpg",
      category: "GPS Tracker",
      price: "₹5,000",
    },

    {
      id: 2,
      name: "Fuel Sensor",
      image: "/product2.jpg",
      category: "Fuel Monitoring",
      price: "₹5,000",
    },
    {
      id: 3,
      name: "Fleet GPS Device",
      image: "/product3.jpg",
      category: "Fleet Management",
      price: "₹5,000",
    },
    {
      id: 4,
      name: "Vehicle Monitoring Unit",
      image: "/product4.jpg",
      category: "Vehicle Monitoring",
      price: "₹5,000",
    },
    {
      id: 5,
      name: "Weighbridge Controller",
      image: "/product5.jpg",
      category: "Weighbridge Automation",
      price: "₹5,000",
    },
    {
      id: 6,
      name: "IoT Tracking Device",
      image: "/product6.jpg",
      category: "IoT Solutions",
      price: "₹5,000",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <section className=" mx-auto bg-[#F6F2EA] ">

       <motion.div
        className="relative h-[420px] sm:h-[500px] lg:h-[520px] flex items-center overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src="/4aa26272-1ccf-46ac-a0a8-55d003023ba2.png"
          className="absolute inset-0 w-full h-full object-cover object-center"
          alt="hero"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 w-full px-6 lg:px-16">
          <div className="max-w-2xl text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white"
            >
              Products
            </motion.h1>

            {/* <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-4 lg:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200"
            >
              Get in touch with our team for GPS tracking,<br/> fleet
              management and AIS 140 compliant solutions.
            </motion.p> */}
          </div>
        </div>
      </motion.div> 

              <div className="text-center font-semibold mt-5 lg:mt-20 text-4xl ">
              Products
        </div>

      <div className="grid lg:grid-cols-4 gap-8 max-w-7xl py-25 px-15 mx-auto ">

        
        
        {/* LEFT FILTER */}
        <div className="lg:col-span-1   ">
          <div className="bg-white shadow-xl border border-[#FCB13A]  rounded-xl p-6 sticky top-24">
            <h2 className="text-2xl font-bold mb-6">
              Services
            </h2>

            <button
              onClick={() => setSelectedCategory("All")}
              className={`w-full text-left px-4 py-3 rounded-lg mb-3 transition ${
                selectedCategory === "All"
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              All Products
            </button>

            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(service)}
                className={`w-full text-left px-4 py-3 rounded-lg mb-3 transition ${
                  selectedCategory === service
                    ? "bg-yellow-500 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {service}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT PRODUCT GRID */}
        <div className="lg:col-span-3">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-cover object-contain object-center"
                />

                <div className="p-5">
                  <p className="text-sm text-yellow-500 font-medium mb-2">
                    {product.category}
                  </p>

                  <h3 className="text-lg font-semibold">
                    {product.price}
                  </h3>

                  <button className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}