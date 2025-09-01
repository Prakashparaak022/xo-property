// components/Footer.js
import React from "react";
import {
  FaYoutube,
  FaTiktok,
  FaInstagram,
  FaLinkedin,
  FaCaretDown,
} from "react-icons/fa";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 md:px-4 lg:px-8 relative">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: What We Do */}
        <div>
          <h3 className="mb-2 text-lg">What We Do</h3>
          <ul className="text-lg space-y-2">
            <li>Sales</li>
            <li>Rent</li>
            <li>Off Plan</li>
            <li>Valuations</li>
          </ul>
        </div>

        {/* Column 2: About */}
        <div>
          <h3 className="mb-2 text-lg">About</h3>
          <ul className="text-lg space-y-2">
            <li>About us</li>
            <li>Meet the Team</li>
            <li>Careers</li>
            <li>News & Insights</li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <ul className="text-lg space-y-2">
            <h3 className="mb-2 text-lg">Contact XO Property</h3>
            <p>(04) 433 0046</p>
            <p>info@xoproperty.ae</p>
            <p>Office No. 202, Daytona House, Motor City, Dubai, UAE</p>
          </ul>
        </div>

        {/* Column 4: Social */}
        <div>
          <h3 className="mb-2 text-lg">Social</h3>
          <div className="flex space-x-4">
            <FaYoutube className="text-5xl bg-white text-black rounded-full p-3" />
            <FaTiktok className="text-5xl bg-white text-black rounded-full p-3" />
            <FaInstagram className="text-5xl bg-white text-black rounded-full p-3" />
            <FaLinkedin className="text-5xl bg-white text-black rounded-full p-3" />
          </div>
        </div>
      </div>

      {/* Popular Searches */}
      <div className="mx-auto mt-8 border-t border-b border-gray-700 py-4">
        <div className="flex items-center text-md">
          <span>Popular Searches</span>
          <RiArrowDropDownLine className="text-5xl" />
        </div>
      </div>

      {/* Terms & Copyright */}
      <div className="mx-auto mt-4 text-md">
        <div className="flex flex-col justify-between items-start">
          <div>Terms & Conditions / Privacy Policy / Sitemap</div>
          <div className="mt-2 md:mt-0">
            © 2025 XO Property, All Rights Reserved
          </div>
        </div>
      </div>

      {/* Floating Buttons */}
      <div className="fixed bottom-4 right-4 flex flex-col text-lg space-y-2">
        <button className="bg-green-500 text-white rounded-full p-3">
          <FaWhatsapp className="text-2xl" />
        </button>
        <button className="bg-white text-black rounded-full p-3">
          <FaPhone className="text-2xl" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
