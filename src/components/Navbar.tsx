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
    <nav className="bg-gradient-to-r from-blue-50 via-white to-blue-100 shadow-lg rounded-b-2xl w-full border-b border-blue-200 sticky top-[80px] z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-2">
        <ul className="flex flex-wrap justify-center gap-1 md:gap-2 text-base font-medium py-2 border-t border-blue-100">
          {navLinks.map((label) => (
            <li key={label} className="relative group">
              <Link
                href={`/${label.toLowerCase()}`}
                className="inline-block px-3 py-1.5 rounded-md transition-all duration-300 text-black-800 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <span className="relative z-10">{label}</span>
                {/* Ripple effect */}
                <span className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 group-active:opacity-70 transition duration-300 bg-blue-500/20 pointer-events-none"></span>
                {/* Underline effect */}
                <span className="pointer-events-none absolute left-1/2 bottom-1 -translate-x-1/2 w-2/3 h-[2px] bg-blue-50 scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300 rounded-full shadow-md"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
