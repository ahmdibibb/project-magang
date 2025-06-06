"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Search } from "lucide-react";
import Login from "./Login";

const Header = () => {
  const [times, setTimes] = React.useState({
    wib: "",
    wita: "",
    wit: "",
  });
  const [showLogin, setShowLogin] = React.useState(false);

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
      setTimes({
        wib: getLocalTime(7),
        wita: getLocalTime(8),
        wit: getLocalTime(9),
      });
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
    <header className="w-full bg-white shadow-sm py-2 px-4 border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between relative min-h-[80px]">
        <div className="hidden md:flex flex-col justify-center w-1/3">
          <span className="text-sm text-gray-700 font-semibold">
            {currentDate}
          </span>

          <div className="flex gap-2 mt-1">
            <span className="bg-blue-50 text-blue-700 rounded px-2 py-0.5 text-xs font-semibold shadow-sm border border-blue-100">
              WIB: {times.wib}
            </span>
            <span className="bg-blue-50 text-blue-700 rounded px-2 py-0.5 text-xs font-semibold shadow-sm border border-blue-100">
              WITA: {times.wita}
            </span>
            <span className="bg-blue-50 text-blue-700 rounded px-2 py-0.5 text-xs font-semibold shadow-sm border border-blue-100">
              WIT: {times.wit}
            </span>
          </div>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center w-full pointer-events-none">
          <Link href="/" className="pointer-events-auto">
            <div className="relative w-[170px] h-[60px] md:w-[220px] md:h-[80px]">
              <Image
                src="/Logo.svg"
                alt="logo"
                fill
                sizes="(max-width:790px) 60vw, (max-width:1350px) 100vw, 100vw"
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        <div className="flex items-center space-x-2 w-1/3 justify-end">
          <input
            type="text"
            placeholder="Cari berita..."
            className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition flex items-center gap-1">
            <Search size={16} />
            Cari
          </button>

          <button
            onClick={() => setShowLogin(true)}
            className="px-3 py-1 bg-gray-100 border text-gray-700 rounded-md text-sm hover:bg-gray-200 transition"
          >
            Login
          </button>
        </div>

        {showLogin && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="relative">
              <button
                className="absolute -top-3 -right-3 bg-white border rounded-full px-2 py-1 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setShowLogin(false)}
              >
                ✕
              </button>
              <Login />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
