"use client";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Brand and Description */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-4 flex gap-2"><img src="/pay.svg" alt="" width={25} height={25} /> GlobalPay</h1>
          <p className="text-sm text-gray-400">
            Simplifying global payments with a seamless, secure, and user-friendly experience. Join us to send payments anywhere in the world with confidence.
          </p>
        </div>

        {/* Column 2: Navigation Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2">
            {["Home", "Features", "How It Works", "Contact"].map((link, index) => (
              <li key={index}>
                <a
                  href={`/`}
                  className="hover:text-blue-500 transition duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Get in Touch</h2>
          <ul className="space-y-2">
            <li>Email: <a href="mailto:muzammilmehdi52@gmail.com" className="hover:text-blue-500">muzammilmehdi52@gmail.com</a></li>
            <li>Phone: <a href="tel:+923488062645" className="hover:text-blue-500">+92 3482346425</a></li>
            <li>Address: Alamdar Road Quetta, Balochistan, Pakistan</li>
          </ul>
        </div>
      </div>

      {/* Social Media and Copyright */}
      <div className="bg-gray-900 py-6 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Social Media Links */}
          <div className="flex space-x-4">
            {[
              { icon: "/facebook.svg", alt: "Facebook", href: "#" },
              { icon: "/twitter.svg", alt: "Twitter", href: "#" },
              { icon: "/linkedin.svg", alt: "LinkedIn", href: "#" },
              { icon: "/instagram.svg", alt: "Instagram", href: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="hover:text-blue-500 transition duration-300"
              >
                <Image src={social.icon} alt={social.alt} width={24} height={24} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-400 mt-4 md:mt-0 flex gap-1">
            &copy; 2024 <img src="/pay.svg" alt="" width={15} height={15} /> GlobalPay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
