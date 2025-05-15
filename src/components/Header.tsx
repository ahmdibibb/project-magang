import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
        <Link href="/">
        <div className='relative w-[200px] h-[50px]'>
            <Image src="/img/aj-news-logo.webp" alt="logo" fill sizes="(max-width:768px) 50vw,
            (max-width:1200px) 100vw, 100vw" className="object-contain" />
        </div>
        </Link>
    </div>
  )
}

export default Header
