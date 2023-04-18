import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [nav, setNav] = useState(false);
  return (
    <div className="relative">
      <div className=" sm:flex justify-between items-center pt-6">
        {/* <Image src="logo.png" alt="" width="2" height="3"></Image> */}
        <img src="logo.png" />
        <ul className={`sm:flex  mt-6 mb-2 md:mt-0 md:mb-2 items-baseline ${nav ? "block" : "hidden"}`}>
          <li>
            <Link href="/" className="nav \">
              Home
            </Link>
          </li>
          <Link href="/teams" className="nav">
            Teams
          </Link>
          <li>
            <Link href="/success" className="nav">
              Success Stories
            </Link>
          </li>
          <li>
            <Link href="/about" className="nav">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/involved" className="nav">
              Get Involved
            </Link>
          </li>
        </ul>
        <div className={`sm:inline-block items-baseline ${nav ? "block" : "hidden"}`}>
          <span className="font-bold text-sm">Login</span>
          <div className="btn ml-4 px-3 py-1">Donate</div>
        </div>
      </div>
      <div className="absolute right-2 top-7 sm:hidden">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
          onClick={() => setNav(!nav)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="block h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </ div>
  );
}

export default Header;
