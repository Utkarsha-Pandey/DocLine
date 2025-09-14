import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="mt-32">
      <div className="relative overflow-hidden rounded-t-3xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-indigo-400 text-white shadow-2xl md:mx-10">
        {/* Content */}
        <div className="px-6 sm:px-10 md:px-16 py-14 grid gap-14 sm:grid-cols-3 text-sm">
          {/* Logo & About */}
          <div>
            <img
              className="mb-6 w-40 drop-shadow-md"
              src={assets.logo}
              alt="logo"
            />
            <p className="w-full md:w-2/3 text-indigo-100 leading-6">
              DocLine is your trusted healthcare partner. We connect you with
              experienced doctors for safe and seamless online appointments.
            </p>
          </div>

          {/* Company */}
          <div>
            <p className="text-lg font-semibold mb-5">Company</p>
            <ul className="flex flex-col gap-2 text-indigo-100">
              {["Home", "About us", "Delivery", "Privacy Policy"].map(
                (item) => (
                  <li
                    key={item}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-lg font-semibold mb-5">Get in Touch</p>
            <ul className="flex flex-col gap-2 text-indigo-100">
              <li className="hover:text-white transition-colors cursor-pointer">
                +1-212-456-7890
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                DocLine@gmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20">
          <p className="py-6 text-center text-sm text-indigo-100">
            © 2025 DocLine — All Rights Reserved.
          </p>
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
      </div>
    </footer>
  );
};

export default Footer;
