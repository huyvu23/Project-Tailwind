import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="w-screen fixed bg-zinc-200 h-[80px] drop-shadow-lg z-[1]">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="mr-4 text-3xl sm:text-4xl font-bold ">BRAND.</h1>
          <ul className="hidden md:flex cursor-pointer">
            <li>Home</li>
            <li>About</li>
            <li>Support </li>
            <li>Platforms</li>
            <li> Pricing </li>
          </ul>
        </div>

        <div className="hidden md:flex pr-4">
          <button className="border-none mr-4 text-black bg-transparent">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>

        <div className="md:hidden" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5 " /> : <XIcon className="w-5" />}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute w-full px-8 bg-zinc-200"}>
        <li className="border-b-2 border-zinc-300 w-full">Home</li>
        <li className="border-b-2 border-zinc-300 w-full">About</li>
        <li className="border-b-2 border-zinc-300 w-full">Support </li>
        <li className="border-b-2 border-zinc-300 w-full">Platforms</li>
        <li className="border-b-2 border-zinc-300 w-full"> Pricing </li>
        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4 ">
            Sign In
          </button>
          <button className=" px-8 py-3 ">Sign Up</button>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
