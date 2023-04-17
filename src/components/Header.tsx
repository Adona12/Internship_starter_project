import React from "react";
import Image from "next/image";
import Link from "next/link";
function Header() {
  return (
    <div className="flex justify-between  pt-6">
      {/* <Image src="logo.png" alt="" width="2" height="3"></Image> */}
      <img src="logo.png" />
      <ul className="flex">
        <li>
          <Link href="/" className="nav">
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
      <div>
        <span className="font-bold text-sm">Login</span>
        <div className="btn ml-4 px-3 py-1">Donate</div>
      </div>
    </div>
  );
}

export default Header;
