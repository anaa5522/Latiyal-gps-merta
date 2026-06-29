"use client";

import Link from "next/link";
import { toast } from "react-toastify";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaArrowRight, FaSearch } from "react-icons/fa";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const router = useRouter();

  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:7000/api/products");
      const data = await res.json();

      const allProducts = Array.isArray(data)
        ? data
        : data.products || [];

      setProducts(
        allProducts.filter(
          (p) => (p.status || "Active") === "Active"
        )
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // FILTER
  const filtered = useMemo(() => {
    return (products || [])
      .filter((p) => (p.status || "Active") === "Active")
      .filter((p) =>
        p.name?.toLowerCase().includes(search.toLowerCase())
      );
  }, [products, search]);

  // ADD TO CART
  const addToCart = async (product) => {
    try {
      await fetch("http://localhost:7000/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: product._id,
          name: product.name,
          image: product.image,
          price: product.discountPrice || product.price,
        }),
      });

      toast.success("Added to cart successfully!");
    } catch (err) {
      toast.error("Failed to add to cart!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <motion.div
        className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[490px] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >

        {/* Background Image */}
        <img
          src="/ChatGPT Image Jun 27, 2026, 12_57_10 PM.png"
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Content */}
        <div className="relative z-10 w-full px-5 sm:px-8 lg:px-16 flex justify-center">
          <div className="text-center max-w-4xl">

            {/* Heading */}
            <motion.h1
              initial={{ x: -250, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-extrabold text-white tracking-wide"
            >
              <span className="text-[#FCB13B]">P</span>roducts
            </motion.h1>

            {/* Underline */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "120px", opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="h-1 bg-[#FCB13B] mx-auto rounded-full mt-4"
            />

            {/* Subtitle */}
            <motion.p
              initial={{ x: 250, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.5,
                duration: 1,
                ease: "easeOut",
              }}
              className="mt-6 text-sm sm:text-base md:text-base lg:text-lg text-gray-400 leading-8 max-w-2xl mx-auto"
            >
              Smart GPS Tracking Solutions for Cars, Trucks, Buses & Fleet Management.
              Monitor your vehicles anytime, anywhere with real-time tracking and
              advanced security features.
            </motion.p>

          </div>
        </div>

      </motion.div>
      {/* HEADER */}
      <div className="bg-white/80 backdrop-blur-md py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-4">

          {/* Explore */}
          <div className="w-full md:w-[20%] flex justify-center md:justify-start">
            <button className="group flex items-center gap-3 text-lg font-semibold text-[#1e1e1e] hover:text-[#FCB13A] transition-all duration-300">
              <span>Explore</span>

              <span className="w-9 h-9 rounded-full bg-[#FCB13A] flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                <FaArrowRight className="text-white text-sm" />
              </span>
            </button>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-[80%]">
            <div className="relative">

              <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full h-14 pl-14 pr-5 rounded-full border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FCB13A] focus:border-[#FCB13A] text-gray-700"
              />

            </div>
          </div>

        </div>
      </div>

      {/* PRODUCTS */}
      <div className="max-w-7xl mx-auto px-4 py-8 flex gap-8">

        {/* Left Blank Space */}
        <div className="hidden lg:block w-[20%]"></div>

        {/* Products */}
        <div className="w-full lg:w-[80%]">

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">

            {filtered.map((p) => (
              <div
                key={p._id}
                className="group bg-white rounded-[24px] border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >

                {/* IMAGE */}
                <div className="relative h-64 overflow-hidden bg-white flex items-center justify-center">

                  <img
                    src={
                      p.image?.startsWith("http")
                        ? p.image
                        : `http://localhost:7000${p.image}`
                    }
                    alt={p.name}
                    className="w-[92%] h-[92%] object-contain group-hover:scale-105 transition-all duration-500"
                  />

                </div>

                {/* CONTENT */}
                <div className="p-6">

                  <h2 className="text-xl font-semibold text-gray-900 line-clamp-1">
                    {p.name}
                  </h2>

                  <p className="text-gray-500 text-sm mt-3 leading-7 line-clamp-2">
                    {p.description}
                  </p>

                  <div className="flex items-center justify-between mt-5">

                    <p className="font-bold text-lg text-[#FCB13A]">
                      ₹ {p.discountPrice || p.price}
                    </p>

                    <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-700 font-medium">
                      In Stock
                    </span>

                  </div>

                  {/* BUTTONS */}
                  <div className="grid grid-cols-2 gap-3 mt-6">

                    <button
                      onClick={() => addToCart(p)}
                      className="h-12 rounded-xl bg-black hover:bg-gray-900 text-white font-medium transition-all duration-300"
                    >
                      Add To Cart
                    </button>

                    <button
                      onClick={() =>
                        router.push(
                          `/buy?product=${encodeURIComponent(
                            JSON.stringify({
                              _id: p._id,
                              name: p.name,
                              price: Number(p.discountPrice || p.price),
                              image: p.image,
                              qty: 1,
                            })
                          )}`
                        )
                      }
                      className="h-12 rounded-xl bg-[#FCB13A] hover:bg-yellow-500 text-black font-semibold transition-all duration-300"
                    >
                      Buy Now
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
}