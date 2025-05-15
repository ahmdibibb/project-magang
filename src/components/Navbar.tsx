import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul className='py-2 border-t border-gray-300'>
        <li className='space-x-6 text-xs'>
          <Link href="/Nasional">Nasional</Link>
          <Link href="/Internasional">Internasional</Link>
          <Link href="/Olahraga">Olahraga</Link>
          <Link href="/Otomotif">Otomotif</Link>
          <Link href="/Teknologi">Teknologi</Link>
          <Link href="/Edukasi">Edukasi</Link>
          <Link href="/Bisnis">Bisnis</Link>
          <Link href="/Kesehatan">Kesehatan</Link>
          <Link href="/Travel">Travel</Link>
          <Link href="/Kuliner">Kuliner</Link>
        </li>
      </ul>
      <div className='w-full h-[1px] bg-black mb-1' />
      <div className='w-full h-[1px] bg-black' />
    </nav>
  );
};

export default Navbar;
