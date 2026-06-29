"use client";

import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const products = [
  { id: 1, name: "GPS Tracker" },
  { id: 2, name: "Fuel Sensor" },
  { id: 3, name: "Web Rider Device" },
  { id: 4, name: "Car GPS System" },
  { id: 5, name: "Bike Tracking Device" },
];

export default function Header() {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/aboutus" },
    { name: "SERVICE", path: "/servicepage" },
    { name: "PRODUCTS", path: "/product" },
    { name: "CONTACT US", path: "/contact" },
  ];

  const handleSearch = (value) => {
    setSearch(value);

    if (!value.trim()) {
      setResults([]);
      return;
    }

    const filtered = products.filter((p) =>
      p.name.toLowerCase().includes(value.toLowerCase())
    );

    setResults(filtered);
  };

  const handleSelectProduct = (id) => {
    setSearch("");
    setResults([]);
    router.push(`/product/${id}`);
  };

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled
            ? "bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-lg"
            : "bg-black/25 backdrop-blur-md"
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between
          h-[65px] sm:h-[70px] md:h-[85px]
          px-4 sm:px-6 lg:px-8"
        >
          {/* LOGO */}
          <a href="/" className="flex-shrink-0">
            <img
              src="/Latiyal GPS logo 02.png"
              alt="logo"
              className="w-[90px] sm:w-[115px] md:w-[135px] lg:w-[155px]"
            />
          </a>

          {/* MENU */}
          <div className="hidden md:flex flex-1 justify-center gap-8">
            {menuItems.map((item) => (
              <Link key={item.name} href={item.path}>

                <span
                  className="
    relative
    text-white
    text-[15px]
    font-medium
    after:content-['']
    after:absolute
    after:left-0
    after:-bottom-1
    after:w-0
    after:h-[2px]
    after:bg-[#FCB13B]
    after:transition-all
    after:duration-300
    hover:after:w-full
  "
                >
                  {item.name}
                </span>


              </Link>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden md:flex items-center gap-4 relative">

            {/* SEARCH */}


            

            <Link href="/cart">
              <FaShoppingCart className="text-white text-xl hover:text-[#FCB13B]" />
            </Link>
            <Link href="/account">
              <FaUser className="text-white text-xl hover:text-[#FCB13B]" />
            </Link>
          </div>

          {/* MOBILE */}
          <div className="flex md:hidden items-center gap-4">
            <Link href="/cart">
              <FaShoppingCart className="text-white text-xl" />
            </Link>

            <button onClick={() => setOpen(true)} className="text-white text-3xl">
              <HiMenuAlt3 />
            </button>
          </div>
        </div>
      </header>

      {/* OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 transition-all duration-300
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        bg-black/50`}
      />

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-[320px] z-50
        bg-white/90 backdrop-blur-xl shadow-2xl transition-transform duration-500
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between p-5 border-b">
          <span className="text-lg font-semibold text-[#FBB247]">Menu</span>
          <button onClick={() => setOpen(false)}>
            <HiX className="text-xl" />
          </button>
        </div>

        <div className="flex flex-col p-6 space-y-5">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setOpen(false)}
              className="text-black font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}