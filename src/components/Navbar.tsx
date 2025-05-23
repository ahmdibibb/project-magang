import Link from "next/link";
import React from "react";

const navLinks = [
  "Nasional",
  "Internasional",
  "Olahraga",
  "Otomotif",
  "Teknologi",
  "Edukasi",
  "Bisnis",
  "Kesehatan",
  "Travel",
  "Kuliner",
];

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md rounded-b-lg w-full">
      <div className="max-w-7xl mx-auto">
        <ul className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm font-medium py-4 border-t border-gray-200">
          {navLinks.map((label) => (
            <li key={label}>
              <Link
                href={`/${label}`}
                className="text-gray-700 hover:text-blue-600 transition-colors relative group"
              >
                {label}
                <span className="block h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="h-[1px] bg-gradient-to-r from-blue-400 via-gray-200 to-blue-400 mb-1" />
        <div className="h-[1px] bg-gradient-to-r from-blue-400 via-gray-200 to-blue-400" />
      </div>
    </nav>
  );
};

export default Navbar;
