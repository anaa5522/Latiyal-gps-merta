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
        { name: "SUPPORT", path: "/support" },
        { name: "VISIT COMPANY", path: "/company" },
    ];


    return (
        <>
            {/* Header */}
            <header className="w-full  bg-white relative z-50 min-h-[80px] my-2 ">
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
        after:w-0 after:h-[3px] after:bg-[#262F6C]
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
            <div
  className={`fixed top-0 right-0 h-full w-[75%] bg-white shadow-lg transform
  ${open ? "translate-x-0" : "translate-x-full"}
  transition-transform duration-300 ease-in-out z-50`}
>
  <div className="flex justify-end p-5">
    <button onClick={() => setOpen(false)} className="text-3xl">
      <HiX />
    </button>
  </div>

  <div className="flex flex-col items-start gap-5 px-4">
    {menuItems.map((item) => (
      <Link
        key={item.name}
        href={item.path}
        onClick={() => setOpen(false)}   // 👈 menu close on click
        className="relative personal-tinos font-bold text-md
        after:content-[''] after:absolute after:left-0 after:-bottom-1
        after:w-0 after:h-[3px] after:bg-[#262F6C]
        after:transition-all after:duration-300
        hover:after:w-full"
      >
        {item.name}   {/* ✅ yahan name */}
      </Link>
    ))}
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
