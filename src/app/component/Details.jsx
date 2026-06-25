"use client";

import { useState } from "react";
import {
  FiStar,
  FiShield,
  FiTruck,
  FiRefreshCw,
  FiAward,
  FiChevronDown,
} from "react-icons/fi";

export default function Details() {
  const [selectedImage, setSelectedImage] = useState(
    "/DSC08361.JPG"
  );

  const images = [
    "/DSC08363.JPG",
    "/DSC08365.JPG",
    "/DSC08381.JPG",
    "/DSC08389.JPG",
  ];

  return (
    <div className="min-h-screen bg-white py-40 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}
          <div>

            {/* Main Image */}
            <div className="bg-gray-100 rounded-3xl p-8">
              <img
                src={selectedImage}
                alt=""
                className="w-full h-[500px] object-contain"
              />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4 mt-5">

              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() =>
                    setSelectedImage(img)
                  }
                  className={`border rounded-2xl p-3 ${
                    selectedImage === img
                      ? "border-orange-500"
                      : "border-gray-200"
                  }`}
                >
                  <img
                    src={img}
                    className="h-20 w-full object-contain"
                    alt=""
                  />
                </button>
              ))}

            </div>
          </div>

          {/* Right Side */}
          <div>

            <h1 className="text-5xl font-bold text-gray-900">
              AEROFLOW MAX
            </h1>

            <p className="text-gray-500 mt-2">
              Active Noise Cancelling Headphones
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-4">
              <div className="flex text-yellow-500">
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
              </div>

              <span className="text-gray-500">
                4.8 | 14,580 Reviews
              </span>
            </div>

            {/* Price */}
            <div className="mt-6 flex items-center gap-4">
              <span className="line-through text-gray-400 text-2xl">
                ₹3999
              </span>

              <h2 className="text-5xl font-bold text-orange-500">
                ₹2999
              </h2>

              <span className="bg-green-100 text-green-600 px-3 py-1 rounded-lg">
                Save ₹1000
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 mt-6 leading-8">
              Immerse yourself in pure sound.
              Experience industry-leading
              Active Noise Cancellation, 40-hour
              battery life, and unparalleled comfort.
            </p>

            {/* Buttons */}
            <div className="space-y-4 mt-8">

              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-semibold text-lg">
                ADD TO CART
              </button>

              <button className="w-full bg-black hover:bg-gray-900 text-white py-4 rounded-2xl font-semibold text-lg">
                BUY NOW
              </button>

            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-5 mt-10">

              <div className="flex items-center gap-3">
                <FiShield size={22} />
                <div>
                  <h3 className="font-semibold">
                    Secure Checkout
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FiTruck size={22} />
                <div>
                  <h3 className="font-semibold">
                    Fast Shipping
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FiRefreshCw size={22} />
                <div>
                  <h3 className="font-semibold">
                    30 Day Money Back
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FiAward size={22} />
                <div>
                  <h3 className="font-semibold">
                    2 Year Warranty
                  </h3>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* WHY SECTION */}
        <div className="mt-20">

          <h2 className="text-4xl font-bold text-center">
            WHY AEROFLOW MAX?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <div className="bg-gray-50 p-8 rounded-3xl text-center">
              <h3 className="font-bold text-xl">
                Premium Sound
              </h3>

              <p className="text-gray-500 mt-3">
                Premium sound and
                deep bass experience.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl text-center">
              <h3 className="font-bold text-xl">
                Advanced ANC
              </h3>

              <p className="text-gray-500 mt-3">
                Advanced active noise
                cancelling and comfort.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl text-center">
              <h3 className="font-bold text-xl">
                Lightweight Design
              </h3>

              <p className="text-gray-500 mt-3">
                Lightweight design
                for all day use.
              </p>
            </div>

          </div>

        </div>

        {/* Reviews */}
        <div className="mt-20">

          <h2 className="text-4xl font-bold">
            CUSTOMER REVIEWS
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-8">

            {[
              "Incredible sound quality!",
              "Best ANC ever!",
              "Battery lasts days!",
            ].map((review, i) => (
              <div
                key={i}
                className="border rounded-3xl p-6"
              >
                <div className="flex text-yellow-500 mb-3">
                  ⭐⭐⭐⭐⭐
                </div>

                <p className="font-medium">
                  {review}
                </p>
              </div>
            ))}

          </div>

        </div>

        {/* FAQ */}
        <div className="mt-20">

          <h2 className="text-4xl font-bold mb-8">
            FREQUENTLY ASKED QUESTIONS
          </h2>

          {[
            "Battery life?",
            "Compatibility?",
            "Noise cancellation?",
          ].map((item, i) => (
            <div
              key={i}
              className="border-b py-6 flex justify-between items-center"
            >
              <span className="font-medium text-lg">
                {item}
              </span>

              <FiChevronDown />
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}