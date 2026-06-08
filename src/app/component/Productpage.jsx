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
    <div className="bg-[#f4f4f6] select-none">

      {/* ===== HERO ===== */}
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