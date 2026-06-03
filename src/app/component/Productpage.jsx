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
    <div className="bg-[#f4f4f6]">

      {/* ===== HERO ===== */}
      <motion.div
        className="relative h-[520px] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src="/df95db051ac7c4228bcbaecdc24deb9b.jpg"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          alt="hero"
        />

        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />

        <div className="relative z-10 text-center px-6">

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2 mb-4 rounded-full bg-white/10 backdrop-blur-md text-white text-sm tracking-widest"
          >
            PREMIUM COLLECTION
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-[#FCB13A]"
          >
            Products
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6 max-w-2xl mx-auto text-gray-200 text-lg md:text-xl"
          >
            Premium furniture crafted for comfort, elegance and modern lifestyle.
          </motion.p>

        </div>
      </motion.div>

      {/* ===== PRODUCTS ===== */}
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Featured Products
          </h2>
          <p className="text-gray-500 mt-3">
            Clean design. Premium quality. Best comfort.
          </p>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-[26px] overflow-hidden
              border border-gray-100 shadow-sm hover:shadow-2xl
              transition-all duration-500 hover:-translate-y-2"
            >

              {/* IMAGE SECTION */}
              <div className="relative h-[260px] bg-gray-100 overflow-hidden">

                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* LOGO TOP LEFT */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md p-2 rounded-full shadow">
                  <img src="/logo.png" alt="logo" className="w-8 h-8" />
                </div>

                {/* hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition" />

              </div>

              {/* CONTENT */}
              <div className="p-5">

                <h3 className="text-lg font-semibold text-gray-900">
                  {item.name}
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  Luxury & Comfort Series
                </p>

                {/* PRICE + BUTTONS BOTTOM */}
                <div className="mt-6 flex items-center justify-between">

                  <p className="text-xl font-bold text-black">
                    {item.price}
                  </p>

                  <div className="flex gap-2">
                    <button className="bg-black text-white px-4 py-2 rounded-xl text-sm hover:bg-gray-800 transition">
                      Add
                    </button>

                    <button className="border border-gray-300 px-4 py-2 rounded-xl text-sm hover:bg-gray-100 transition">
                      Buy
                    </button>
                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>
      </div>

      {/* EXTRA COMPONENT */}
      <div>
        <Product />
      </div>

    </div>
  );
}