"use client";

import React, { useState, useEffect } from 'react'
import { BsSearch } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Header() {

    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItems = [
        { name: "HOME", path: "/" },
        { name: "PRODUCT", path: "/product" },
        { name: "CONTACT US", path: "/contact" },
        { name: "ABOUT US", path: "/aboutus" },
    ];

    return (
        <>
            {/* Header */}
            <header className={`w-full fixed top-0 left-0 h-[70px] md:h-[88px] z-50 transition-all duration-300
            ${scrolled
                ? "bg-gradient-to-b from-[#F6F2EA]/90 via-white/90 to-[#FFFEFE]/90 backdrop-blur-md shadow-md"
                : "bg-transparent"}
            `}>

                <div className="flex items-center justify-between px-6 sm:px-6 lg:px-8 xl:px-2 2xl:px-24">

                    {/* Logo */}
                    <Link href='/' className="flex-shrink-0 pl-2 sm:pl-4 md:pl-4 lg:p-0">
                        <img
                            src="/Latiyal Logo Final.png"
                            alt="company logo"
                            className="w-[110px] sm:w-[135px] md:w-[135px] lg:w-[165px] xl:w-[165px] h-auto object-contain py-4"
                        />
                    </Link>

                    {/* Menu */}
                    <div className="hidden md:flex gap-5 lg:gap-13 items-center px-6 py-2 whitespace-nowrap">
                        {menuItems.map((item) => (
                            <Link key={item.name} href={item.path}>
                                <span className="relative inline-block font-montserrat
                                text-xl md:text-[13px] lg:text-[17px]
                                after:content-[''] after:absolute after:left-0 after:-bottom-1
                                after:w-0 after:h-[3px] after:bg-[#FCB13B]
                                after:transition-all after:duration-300
                                hover:after:w-full cursor-pointer">
                                    {item.name}
                                </span>
                            </Link>
                        ))}
                    </div>

                    {/* Icons */}
                    <div className="flex items-center gap-2 md:gap-6 lg:gap-8 xl:gap-10">
                        <Link href='search'><BsSearch className="text-black text-xl md:hidden" /></Link>
                        <Link href='search'><BsSearch className="text-black text-lg hidden md:block" /></Link>
                        <Link href='cart'><FaShoppingCart className="text-black text-lg hidden sm:block" /></Link>

                        <button className="md:hidden text-3xl" onClick={() => setOpen(true)}>
                            <HiMenuAlt3 />
                        </button>
                    </div>
                </div>
            </header>

            {/* Overlay */}
            <div
                onClick={() => setOpen(false)}
                className={`fixed inset-0 z-40 transition-opacity duration-300
                ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
                bg-gradient-to-l from-black/60 via-black/40 to-black/20`}
            ></div>

            {/* Drawer */}
            <div className={`fixed top-0 right-0 h-full w-[80%] max-w-sm z-50
                transform transition-all duration-500
                ${open ? "translate-x-0" : "translate-x-full"}
                bg-gradient-to-b from-[#F9FAFB] via-[#FFFFFF] to-[#F3F4F6]
                shadow-2xl rounded-l-3xl`}>

                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
                    <span className="text-lg font-semibold text-[#FBB247]">Menu</span>
                    <button onClick={() => setOpen(false)} className="p-2 rounded-full bg-gray-100">
                        <HiX className="text-xl text-[#FBB247]" />
                    </button>
                </div>

                <div className="flex flex-col px-7 pt-8 space-y-7">
                    {menuItems.map((item, index) => (
                        <Link
                            key={item.name}
                            href={item.path}
                            onClick={() => setOpen(false)}
                            className={`text-[17px] font-medium text-black
                            transition-all duration-500
                            ${open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`}
                            style={{ transitionDelay: `${index * 90}ms` }}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                <div className="absolute bottom-8 left-7 right-7">
                    <Link
                        href="/contact"
                        onClick={() => setOpen(false)}
                        className="block text-center bg-[#FBB247] text-white py-3 rounded-full font-semibold shadow-lg">
                        Contact Us
                    </Link>
                </div>
            </div>
        </>
    );
}