import Link from "next/link";
import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaCopyright,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="grid md:grid-cols-6 mx-6 justify-center md-justify-start">
        <div className="self-center">
          <img src="footer.png" alt="" />
        </div>
        <div className="md:justify-self-center pt-6 md:col-span-2">
          <div className="block font-bold mb-5 text-sm ">
            Get involved in improving tech <br/>
            education in africa
          </div>
          <div className="btn px-12 py-3 text-sm mb-4 md:m-0">Support US</div>
        </div>

        <div>
          <div className="font-bold mb-6 text-sm">Links</div>
          <ul>
            <li className="mb-4 text-sm">
              <Link href="/">Home</Link>
            </li>

            <li className="mb-4 text-sm">
              <Link href="/success">Success Stories</Link>
            </li>
            <li className="mb-4 text-sm">
              <Link href="/about">About Us</Link>
            </li>
            <li className="mb-4 text-sm">
              <Link href="/involved">Get Involved</Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="font-bold mb-6 text-sm">Teams</div>
          <ul>
            <li className="mb-4 text-sm">Board Members</li>
            <li className="mb-4 text-sm">Advisors/Mentors</li>
            <li className="mb-4 text-sm">Executives</li>
            <li className="mb-4 text-sm">Staffs</li>
          </ul>
        </div>
        <div>
          <div className="font-bold mb-6 text-sm">Blogs</div>
          <ul>
            <li className="mb-4 text-sm">Recent Blogs</li>

            <li className="mb-4 text-sm">New Blog</li>
          </ul>
        </div>
      </div>
      <div className="h-px  my-6  bg-gray-100"></div>
      <div className="md:flex justify-between ">
        <div className="flex items-baseline"><FaCopyright className="text-gray-400 mr-2"/>2020 Africa to Silicon Valley, Inc. All right reserved.</div>
        <div className="flex ">
          <FaTwitter className="ml-8 text-gray-400" />
          <FaFacebookF className="ml-8 text-gray-400"/>
          <FaYoutube className="ml-8 text-gray-400"/>
          <FaLinkedin className="ml-8 text-gray-400"/>
          <FaInstagram className="ml-8 text-gray-400"/>
        </div>
      </div>
    </>
  );
}

export default Footer;
