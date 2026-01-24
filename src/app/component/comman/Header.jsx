"use client";

import React, { useState } from 'react'
import { BsSearch } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Header() {

    const [open, setOpen] = useState(false);

    const menuItems = [
        { name: "HOME", path: "/" },
        { name: "PRODUCT", path: "/product" },
        { name: "CONTACT US", path: "/contact" },
        { name: "ABOUT US", path: "/aboutus" },
        { name: "VISIT COMPANY", path: "/company" },
    ];


    return (
        <>
            {/* Header */}
            <header className="w-full  bg-white fixed top-0 left-0 w-full h-[75px] md:h-[100px]  z-50  ">
                <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-2 2xl:px-24">

                    {/* Logo */}
                    <Link href='/' className="flex-shrink-0 pl-2 sm:pl-4 md:pl-4 lg:p-0">
                        <img
                            src="Latiyal Logo Final.png"
                            alt="company logo"
                            className="
                                w-[120px]
                                sm:w-[140px]
                                md:w-[140px]
                                lg:w-[170px]
                                xl:w-[170px]
                                h-auto
                                object-contain
                                py-4
                            "
                        />
                    </Link>

                    {/* Menu (Tablet & Desktop) */}
                    <div className="hidden md:flex gap-5 lg:gap-13 items-center px-6 py-2 whitespace-nowrap">
                        {menuItems.map((item) => (
                            <Link key={item.name} href={item.path}>
                                <span
                                    className="relative inline-block font-montserrat
        text-xl md:text-[13px] lg:text-[17px]
        after:content-[''] after:absolute after:left-0 after:-bottom-1
        after:w-0 after:h-[3px] after:bg-[#FCB13B]
        after:transition-all after:duration-300
        hover:after:w-full cursor-pointer"
                                >
                                    {item.name}
                                </span>
                            </Link>
                        ))}
                    </div>


                    {/* Icons + Mobile Toggle */}
                    <div className="flex items-center gap-2 md:gap-6 lg:gap-8 xl:gap-10">
                        {/* Mobile Search */}
                        <Link href='search'><BsSearch className="text-black text-xl md:hidden" /></Link>

                        {/* Tablet/Desktop Search */}
                        <Link href='search'><BsSearch className="text-black text-lg hidden md:block" /></Link>


                        {/* Cart */}
                        <Link href='cart'><FaShoppingCart className="text-black text-lg hidden sm:block" /></Link>


                        {/* Mobile Toggle */}
                        <button
                            className="md:hidden text-3xl"
                            onClick={() => setOpen(true)}
                        >
                            <HiMenuAlt3 />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Slide Menu */}
            {/* OVERLAY */}
            <div
                onClick={() => setOpen(false)}
                className={`fixed inset-0 z-40 transition-opacity duration-300
  ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
  bg-gradient-to-l from-black/60 via-black/40 to-black/20 `}
            ></div>

            {/* DRAWER */}
            <div
                className={`fixed top-0 right-0 h-full w-[80%] max-w-sm z-50
  transform transition-all duration-500
  ease-[cubic-bezier(0.25,1,0.5,1)]
  ${open ? "translate-x-0" : "translate-x-full"}
  bg-gradient-to-b from-[#F9FAFB] via-[#FFFFFF] to-[#F3F4F6]
  shadow-2xl rounded-l-3xl`}
            >

                {/* HEADER */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
                    <span className="text-lg font-semibold text-[#262F6C] tracking-wide">
                        Menu
                    </span>
                    <button
                        onClick={() => setOpen(false)}
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                    >
                        <HiX className="text-xl text-[#262F6C]" />
                    </button>
                </div>

                {/* MENU ITEMS */}
                <div className="flex flex-col px-7 pt-8 space-y-7">
                    {menuItems.map((item, index) => (
                        <Link
                            key={item.name}
                            href={item.path}
                            onClick={() => setOpen(false)}
                            className={`relative text-[17px] font-medium tracking-wide text-[#262F6C]
        transition-all duration-500
        ${open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`}
                            style={{ transitionDelay: `${index * 90}ms` }}
                        >
                            {item.name}

                            {/* underline */}
                            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#FCB13B]
        transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>

                {/* FOOTER CTA */}
                <div className="absolute bottom-8 left-7 right-7">
                    <Link
                        href="/contact"
                        onClick={() => setOpen(false)}
                        className="block text-center bg-[#262F6C] text-white py-3 rounded-full
      font-semibold tracking-wide shadow-lg hover:bg-[#1f2557] transition"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>


            {/* Overlay */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/40 z-40"
                    onClick={() => setOpen(false)}
                />
            )}
        </>
    )
}
