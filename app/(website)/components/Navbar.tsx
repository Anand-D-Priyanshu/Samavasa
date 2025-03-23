"use client"
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="w-full h-14 items-center flex justify-between px-10 lg:px-44">
        <ul>
          <li className="font-semibold lg:text-xl text-2xl hover:scale-110 text-[#9bd3e5]">HMS</li>
        </ul>
        <ul className="lg:flex hidden justify-between w-72 ">
          <li className="hover:text-[#9bd3e5] hover:font-medium">Home</li>
          <li className="hover:text-[#9bd3e5] hover:font-medium">About</li>
          <li className="hover:text-[#9bd3e5] hover:font-medium">contact</li>
        </ul>
        <div>
          <button className="border-2 hidden lg:flex border-[#80c3d9] px-3 text-white bg-[#b0dae8] rounded-md hover:scale-110">Sign In</button>
        </div>
        <div className="lg:hidden ">
          <div className="flex justify-center items-center ">
            <div className="relative group cursor-pointer">
              <div className="w-9 h-7 flex flex-col justify-between">
                <div className="w-full h-1 bg-[#80c3d9] transition-all"></div>
                <div className="w-full h-1 bg-[#80c3d9] transition-all"></div>
                <div className="w-full h-1 bg-[#80c3d9] transition-all"></div>
              </div>
              <div className="absolute right-0 top-0 text-sm rounded bg-[#bde0eb] shadow-lg w-32 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                <a href="#" className="block px-4 py-2 hover:text-white">HOME</a>
                <a href="#" className="block px-4 py-2 hover:text-white">ABOUT US</a>
                <a href="#" className="block px-4 py-2 hover:text-white">CONTACT</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
