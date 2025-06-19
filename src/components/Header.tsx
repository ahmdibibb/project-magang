// components/Header.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Search } from "lucide-react"; // Import ikon Search
import Login from "./Login"; // Pastikan path ini benar

const Header = () => {
  const [times, setTimes] = React.useState({
    wib: "",
    wita: "",
    wit: "",
  });
  const [showLogin, setShowLogin] = React.useState(false);
  const [showMobileSearch, setShowMobileSearch] = React.useState(false);

  const getLocalTime = (offset: number) => {
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    return new Date(utc + 3600000 * offset).toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  React.useEffect(() => {
    const updateTimes = () => {
      // Menggunakan waktu Jakarta sebagai acuan WIB (GMT+7)
      const jakartaTime = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
      const wib = jakartaTime.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit", second: "2-digit" });

      // WITA (GMT+8), 1 jam setelah WIB
      const witaTime = new Date(jakartaTime.getTime() + 3600000);
      const wita = witaTime.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit", second: "2-digit" });

      // WIT (GMT+9), 2 jam setelah WIB
      const witTime = new Date(jakartaTime.getTime() + 2 * 3600000);
      const wit = witTime.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit", second: "2-digit" });

      setTimes({ wib, wita, wit });
    };
    
    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []); 

  const currentDate = new Date().toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="w-full bg-white shadow-md py-3 px-4 border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between relative min-h-[70px] md:min-h-[80px]">
        {/* Tanggal & Waktu (kiri) */}
        <div className="hidden md:flex flex-col justify-center w-1/3">
          <span className="text-sm text-gray-600 font-semibold mb-1">
            {currentDate}
          </span>
          <div className="flex items-center gap-4"> 
            <div className="flex items-center gap-1">
              <span className="text-blue-600 text-xs font-bold">WIB</span>
              <span className="text-gray-800 text-sm font-bold">{times.wib}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-blue-600 text-xs font-bold">WITA</span>
              <span className="text-gray-800 text-sm font-bold">{times.wita}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-blue-600 text-xs font-bold">WIT</span>
              <span className="text-gray-800 text-sm font-bold">{times.wit}</span>
            </div>
          </div>
        </div>

        {/* Logo (tengah) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center w-full pointer-events-none">
          <Link href="/" className="pointer-events-auto">
            <div className="relative w-[150px] h-[55px] md:w-[200px] md:h-[70px] transition-transform duration-300 hover:scale-105">
              <Image
                src="/Logo.svg"
                alt="ABT Logo" 
                fill
                sizes="(max-width:790px) 60vw, (max-width:1350px) 100vw, 100vw"
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Search & Login (kanan) */}
        <div className="flex items-center space-x-3 w-1/3 justify-end">
          {/* Search Input dan Button untuk Desktop */}
          <div className="hidden md:flex items-center group">
            <input
              type="text"
              placeholder="Cari berita..."
              className="pl-4 pr-3 py-2 w-56 border border-gray-200 rounded-l-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 group-hover:border-blue-300"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-r-full text-sm font-semibold hover:bg-blue-700 transition flex items-center gap-1 shadow-sm group-hover:shadow-md">
              <Search size={16} /> Cari
            </button>
          </div>

          {/* Search Button Toggle untuk Mobile */}
          <button
            onClick={() => setShowMobileSearch(!showMobileSearch)}
            className="md:hidden p-2 rounded-full text-gray-600 hover:bg-gray-100 transition"
            aria-label="Toggle Search"
          >
            <Search size={20} />
          </button>

          {/* Mobile Search Input yang muncul */}
          {showMobileSearch && (
            <div className="absolute top-full left-0 w-full bg-white shadow-lg py-3 px-4 border-t border-gray-100 z-40 flex gap-2">
              <input
                type="text"
                placeholder="Cari berita..."
                className="flex-1 pl-4 pr-3 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition flex items-center gap-1 shadow-sm">
                <Search size={16} className="hidden sm:block" /> Cari
              </button>
            </div>
          )}

          {/* Login Button */}
          <button
            onClick={() => setShowLogin(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition shadow-md hover:shadow-lg"
          >
            Login
          </button>
        </div>

        {/* Modal Login */}
        {showLogin && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-[100] animate-fade-in">
            <div className="relative"> {/*Wrapper for positioning close button*/}
              <Login onClose={() => setShowLogin(false)} /> {/* Melewatkan onClose prop */}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;