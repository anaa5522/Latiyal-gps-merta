"use client";

import { motion } from "framer-motion";
import Product from "./Product";


export default function Productpage() {
  const products = [
    { name: "Chair", price: "$80", img: "/DSC03450-600x600.jpg" },
    { name: "Stool", price: "$50", img: "/DSC03450-600x600.jpg" },
    { name: "Sofa", price: "$200", img: "/DSC03450-600x600.jpg" },
    { name: "Shelf", price: "$150", img: "/DSC03450-600x600.jpg" },
    { name: "Arm Chair", price: "$110", img: "/DSC03450-600x600.jpg" },
    { name: "Side Table", price: "$70", img: "/DSC03450-600x600.jpg" },
    { name: "Storage Rack", price: "$180", img: "/DSC03450-600x600.jpg" },
    { name: "Side Table", price: "$70", img: "/DSC03450-600x600.jpg" },
  ];

  return (
    <div className="bg-[#f5f5f5] p-6 space-y-16">

      {/* HERO */}
      <div className="grid gap-6 items-center">
        
      </div>

      {/* PRODUCTS */}
      <div>
        {/* Heading */}
        <div className="text-center mx-4 sm:mx-6 md:mx-0 my-20">
  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent 
               bg-gradient-to-r from-[#FBB247] via-[#FD9A2B] to-[#FFC371]"
  >
    Our Products
  </motion.h2>

  <motion.p
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.3 }}
    className="mt-3 text-gray-600 text-base sm:text-lg md:text-xl max-w-md sm:max-w-xl md:max-w-2xl mx-auto"
  >
    Monitor your vehicles and assets in real-time, receive notifications if they move outside safe zones, and stay in complete control
  </motion.p>
</div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -12 }}
              transition={{ duration: 0.4 }}
              className="relative bg-gradient-to-b from-white to-[#f9f9f9] rounded-3xl p-5 h-[360px] shadow-md hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between overflow-hidden"
            >
              {/* TOP BADGE */}
              <span className="absolute top-3 left-3 bg-white p-2 rounded-full">
                <img
                  src="/Latiyal Logo Final.png"
                  alt="logo"
                  className="w-10 h-10 object-contain"
                />
              </span>

              {/* IMAGE */}
              <div className="flex justify-center items-center h-[160px]">
                <img
                  src={item.img}
                  className="h-full object-contain group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="text-center">
                <h3 className="font-semibold text-lg text-gray-800">
                  {item.name}
                </h3>
                <p className="text-gray-500 text-sm mt-1">Premium Quality</p>
                <p className="font-bold text-xl mt-2 text-black">
                  {item.price}
                </p>
              </div>

              {/* BUTTONS */}
              <div className="flex gap-2 mt-4">
                <button className="flex-1 flex items-center justify-center gap-2 bg-[#FBB247] text-white py-2 rounded-full hover:bg-gray-900 transition">
                  🛒 Add
                </button>

                <button className="flex-1 border border-black py-2 rounded-full hover:bg-black hover:text-white transition">
                  Buy
                </button>
              </div>

              {/* HOVER GLOW EFFECT */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition rounded-3xl"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* DISCOUNT SECTION */}
      <div className="">
        <Product/>
      </div>

    </div>
  );
}