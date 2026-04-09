"use client";

import { FaMapMarkerAlt, FaShieldAlt, FaCloud, FaBolt } from "react-icons/fa";

export default function Pro() {
  return (
    <div className="w-full py-16 bg-[#F6F2EA] to-white">
      
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        
        {/* Item 1 */}
        <div className="flex flex-col items-center hover:scale-110 transition duration-300 cursor-pointer">
          <FaMapMarkerAlt className="text-3xl text-gray-600 mb-3" />
          <p className="text-gray-800 font-medium">Live location</p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center hover:scale-110 transition duration-300 cursor-pointer">
          <FaShieldAlt className="text-3xl text-gray-600 mb-3" />
          <p className="text-gray-800 font-medium">Secure data</p>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center hover:scale-110 transition duration-300 cursor-pointer">
          <FaCloud className="text-3xl text-gray-600 mb-3" />
          <p className="text-gray-800 font-medium">Cloud sync</p>
        </div>

        {/* Item 4 */}
        <div className="flex flex-col items-center hover:scale-110 transition duration-300 cursor-pointer">
          <FaBolt className="text-3xl text-gray-600 mb-3" />
          <p className="text-gray-800 font-medium">Instant alerts</p>
        </div>

      </div>

    </div>
  );
}