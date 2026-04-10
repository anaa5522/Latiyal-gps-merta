"use client";

import { motion } from "framer-motion";
import Product from "./Product";


export default function Productpage() {
  const products = [
    { name: "Chair", price: "$80", img: "/DSC03450-600x600.jpg" },
    { name: "Stool", price: "$50", img: "/imgi_87_DSC03470-2048x2048.jpg" },
    { name: "Sofa", price: "$200", img: "/imgi_107_DSC03495-1536x1536.jpg" },
    { name: "Shelf", price: "$150", img: "/imgi_59_1-2048x2048.jpg" },
    { name: "Arm Chair", price: "$110", img: "/imgi_73_DSC03389-2048x2048.jpg" },
    { name: "Side Table", price: "$70", img: "/imgi_45_DSC03550-2048x2048.jpg" },
    { name: "Storage Rack", price: "$180", img: "/imgi_80_DSC06313-copy-2048x2048.jpg" },
    { name: "Side Table", price: "$70", img: "/DSC03450-600x600.jpg" },
  ];

  return (
    <div className="bg-[#f5f5f5]  space-y-16">

      {/* HERO */}
      <div
        className="text-center my-0 relative bg-cover bg-center bg-no-repeat py-20 md:py-40 px-4"
        style={{
          backgroundImage:
            "url('/df95db051ac7c4228bcbaecdc24deb9b.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-[#FCB13B]"
          >
            Products
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-4 text-white/80 text-base md:text-xl max-w-2xl mx-auto"
          >
            We are always ready to help you with GPS tracking solutions, support
            and business inquiries.
          </motion.p>
        </div>
      </div>

      {/* PRODUCTS */}
      <div>
        

        {/* Products Grid */}
        <div className="grid p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
      <div>
        <Product />
      </div>
    </div>


  );
}