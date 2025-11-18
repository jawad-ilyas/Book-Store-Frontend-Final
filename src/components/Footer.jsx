import React from "react";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t mt-12 dark:border-gray-800 bg-white dark:bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-10">

        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            BookVerse
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm leading-6">
            Your trusted place to buy books online. Discover top sellers,
            trending titles, and personalized recommendations.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 dark:text-white">Quick Links</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
            <li className="hover:text-indigo-500 transition">About Us</li>
            <li className="hover:text-indigo-500 transition">Contact</li>
            <li className="hover:text-indigo-500 transition">Privacy Policy</li>
            <li className="hover:text-indigo-500 transition">Terms & Conditions</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4 dark:text-white">Subscribe</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
            Stay updated with new book releases and exclusive offers.
          </p>
          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-3 py-2 border rounded-lg dark:bg-gray-900 dark:border-gray-700 dark:text-white"
            />
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Copyright */}
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} BookVerse. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <Facebook className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-indigo-500 cursor-pointer" />
            <Instagram className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-indigo-500 cursor-pointer" />
            <Twitter className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-indigo-500 cursor-pointer" />
            <Mail className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-indigo-500 cursor-pointer" />
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
