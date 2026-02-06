import Image from "next/image";
import React, { useState } from "react";
import { CiMapPin } from "react-icons/ci";
import { GoChevronDown } from "react-icons/go";
import { FaSuitcase } from "react-icons/fa";
import { FaCompass } from "react-icons/fa";
import path from "path";
import Link from "next/link";

function Navbar() {
  const [hovered, setHovered] = useState(false);
  const handleClick = () => {
    console.log(hovered);
    alert("Click button pressed!");
  };

  const categoriesBar = [
    { name: "Domestic" },
    { name: "International" },
    { name: "Corporate" },
    { name: "Honeymoon" },
    { name: "Family" },
    { name: "Solo" },
  ];

  return (
    <div className="fixed z-10 w-full">
      <div className="px-6 py-4 bg-gray-100">
        <div className="flex justify-between items-center">
          <div className="font-bold text-2xl">
            <Link href={"/"}><Image
              src="/assets/trip1.svg"
              width={200}
              height={200}
              alt="trip logo"
              className="w-[120px]"
            /></Link>
          </div>

          <div className="flex items-center gap-6 text-lg">
            {[
              { name: "Packages", path: "/packages" },
              { name: " Services", path: "/services" },
              { name: "Blogs", path: "/blogs" },
              { name: "About Us", path: "/about-us" },
              { name: "Contact", path: "/contact" },
            ].map((item, i) => (
              <div
                key={i}
                className="cursor-pointer hover:text-green-600 transition"
              >
                <Link href={item.path}>{item.name}</Link>
              </div>
            ))}

            <button
              onClick={handleClick}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="flex items-center gap-2 px-5 py-2 text-sm font-medium text-green-600 border border-green-600 rounded-md bg-white hover:bg-green-600 hover:text-white transition"
            >
              <CiMapPin className="text-lg" />
              Search
            </button>

            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Login
            </button>

            <button
              onClick={handleClick}
              className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition"
            >
              Customise your trip
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-[120px] bg-black text-white py-4">
        {categoriesBar.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-1 cursor-pointer group hover:text-green-400 transition"
          >
            <span>{item.name}</span>
            <GoChevronDown className="transition-transform duration-200 group-hover:rotate-180" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
