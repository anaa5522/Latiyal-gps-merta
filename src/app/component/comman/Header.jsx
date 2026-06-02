"use client";

import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Header() {

    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

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

    return (
        <>
            {/* HEADER */}
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
                ${
                    scrolled
                        ? "bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-lg"
                        : "bg-black/25 backdrop-blur-md"
                }`}
            >

                <div
                    className="max-w-7xl mx-auto flex items-center justify-between
                    h-[65px] sm:h-[70px] md:h-[85px]
                    px-4 sm:px-6 lg:px-8"
                >

                    <a href="/" className="select-none flex-shrink-0">
  <img
    src="/Latiyal GPS logo 02.png"
    alt="company logo"
    className="w-[90px] sm:w-[115px] md:w-[135px] lg:w-[155px] h-auto object-contain"
  />
</a>

                    {/* DESKTOP MENU CENTER */}
                    <div className=" select-none hidden md:flex flex-1 justify-center items-center gap-5 lg:gap-8 xl:gap-10">

                        {menuItems.map((item) => (
                            <Link key={item.name} href={item.path}>
                                <span
                                    className=" inter relative inline-block
                                    text-white text-[13px] lg:text-[16px]
                                    font-medium tracking-wide
                                    cursor-pointer
                                    after:content-['']
                                    after:absolute
                                    after:left-0
                                    after:-bottom-1
                                    after:w-0
                                    after:h-[2px]
                                    after:bg-[#FCB13B]
                                    after:transition-all
                                    after:duration-300
                                    hover:after:w-full"
                                >
                                    {item.name}
                                </span>
                            </Link>
                        ))}

                    </div>

                    {/* DESKTOP CART */}
                    <div className="hidden md:flex items-center">

                        <Link href="/cart">
                            <FaShoppingCart className="text-white text-xl lg:text-2xl hover:text-[#FCB13B] transition duration-300" />
                        </Link>

                    </div>

                    {/* MOBILE RIGHT SIDE */}
                    <div className="flex md:hidden items-center gap-4">

                        {/* MOBILE CART */}
                        <Link href="/cart">
                            <FaShoppingCart className="text-white text-xl" />
                        </Link>

                        {/* MOBILE MENU BUTTON */}
                        <button
                            className="text-white text-3xl"
                            onClick={() => setOpen(true)}
                        >
                            <HiMenuAlt3 />
                        </button>

                    </div>

                </div>
            </header>

            {/* OVERLAY */}
            <div
                onClick={() => setOpen(false)}
                className={`fixed inset-0 z-40 transition-all duration-300
                ${
                    open
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                }
                bg-black/50 backdrop-blur-sm`}
            ></div>

            {/* MOBILE DRAWER */}
            <div
                className={`fixed top-0 right-0 h-full
                w-[82%] max-w-[320px]
                z-50
                transition-all duration-500
                ${
                    open
                        ? "translate-x-0"
                        : "translate-x-full"
                }
                bg-white/90 backdrop-blur-2xl
                shadow-2xl rounded-l-3xl`}
            >

                {/* DRAWER TOP */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">

                    <span className="text-lg font-semibold text-[#FBB247]">
                        Menu
                    </span>

                    <button
                        onClick={() => setOpen(false)}
                        className="p-2 rounded-full bg-gray-100"
                    >
                        <HiX className="text-xl text-[#FBB247]" />
                    </button>

                </div>

                {/* MOBILE LINKS */}
                <div className="flex flex-col px-7 pt-8 space-y-7">

                    {menuItems.map((item, index) => (
                        <Link
                            key={item.name}
                            href={item.path}
                            onClick={() => setOpen(false)}
                            className={`text-[17px] font-medium text-black
                            transition-all duration-500
                            ${
                                open
                                    ? "opacity-100 translate-x-0"
                                    : "opacity-0 translate-x-6"
                            }`}
                            style={{
                                transitionDelay: `${index * 80}ms`,
                            }}
                        >
                            {item.name}
                        </Link>
                    ))}

                </div>

                {/* CONTACT BUTTON */}
                <div className="absolute bottom-8 left-7 right-7">

                    <Link
                        href="/contact"
                        onClick={() => setOpen(false)}
                        className="block text-center
                        bg-[#FBB247]
                        text-white
                        py-3 rounded-full
                        font-semibold shadow-lg"
                    >
                        Contact Us
                    </Link>

                </div>

            </div>
        </>
    );
}