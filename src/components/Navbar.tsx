'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
const Navbar = () => {
  const pathname = usePathname();
  return (
    <section className="w-[85%] mx-auto">
      <div className="mt-8 md:mt-16 w-full flex justify-between items-center">
        <img src="logo.png" className="w-16 md:w-32" alt="logo"  />
        
        <ul  className="mr-2 mt-4 md:mr-10 flex text-base md:text-3xl font-bold space-x-7 ">
          <li className="flex flex-col items-center">
            <Link href='/' className={`mb-3 ${pathname === "/"?"":"c-2"} hover:text-white hover:-translate-y-0.5 transform duration-150 cursor-pointer `}>Services</Link>
            <div className={`w-2 h-2 rounded-full ${pathname === "/"?"bg-3 animate-slowup ":""}`}></div>
          </li>
          <li className="flex flex-col items-center option2">
            <Link href='/Works' className={`mb-3 ${pathname === "/Works"?"":"c-2"}  hover:text-white hover:-translate-y-0.5 transform duration-150 cursor-pointer `}>Works</Link>
            <div className={`w-2 h-2 rounded-full ${pathname === "/Works"?"bg-3 animate-slowup ":""}`}></div>
          </li>
          <li className="flex flex-col items-center">
            <Link href='/Blogs' className={`mb-3 ${pathname === "/Blogs"?"":"c-2"} hover:text-white hover:-translate-y-0.5 transform duration-150 cursor-pointer `}>Blog</Link>
            <div className={`w-2 h-2 rounded-full ${pathname === "/Blogs"?"bg-3 animate-slowup ":""}`}></div>
          </li>
        </ul>
        
      </div>
    </section>
  )
}

export default Navbar