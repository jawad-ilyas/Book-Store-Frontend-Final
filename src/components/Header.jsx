import { useState } from "react";
import { motion } from "framer-motion";
import {
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  const [theme, setTheme] = useState("light");
  const [showDropdown, setShowDropdown] = useState(false);

  // Theme Toggle
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="sticky top-0 z-50 px-6 py-4 bg-white/20 dark:bg-black/20 backdrop-blur-xl shadow-neu-light dark:shadow-neu-dark">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">

        {/* LOGO */}
        <div className="flex items-center gap-2 cursor-pointer">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-teal-600 dark:text-teal-400"
          >
            BookNest
          </motion.div>
        </div>

        {/* SEARCH BAR */}
        <div className="hidden md:flex flex-1 items-center">
          <div className="w-full relative">
            <input
              type="text"
              placeholder="Search books, authors, genres..."
              className="w-full px-4 py-2 pl-12 rounded-2xl bg-white/40 dark:bg-black/40 backdrop-blur-xl shadow-neu focus:ring-2 focus:ring-teal-400 dark:focus:ring-teal-500 text-gray-900 dark:text-gray-100 outline-none transition"
            />
            <MagnifyingGlassIcon className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-300" />
          </div>
        </div>

        {/* ICONS */}
        <div className="flex items-center gap-5">

          {/* WISHLIST */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="relative"
          >
            <HeartIcon className="w-7 h-7 text-gray-900 dark:text-gray-100 hover:text-teal-500 dark:hover:text-teal-400 transition" />
          </motion.button>

          {/* CART ICON */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="relative"
          >
            <ShoppingCartIcon className="w-7 h-7 text-gray-900 dark:text-gray-100 hover:text-teal-500 dark:hover:text-teal-400 transition" />
            <span className="absolute top-0 right-0 bg-teal-500 text-white text-xs px-1.5 py-0.5 rounded-full shadow">
              2
            </span>
          </motion.button>

          {/* USER DROPDOWN */}
          <div className="relative">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <UserCircleIcon className="w-8 h-8 text-gray-900 dark:text-gray-100 hover:text-teal-500 dark:hover:text-teal-400 transition" />
            </motion.button>

            {showDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute right-0 mt-3 w-48 bg-white/60 dark:bg-black/60 backdrop-blur-xl rounded-2xl shadow-neu p-4 space-y-3"
              >
                <button className="w-full text-left text-gray-900 dark:text-gray-100 hover:text-teal-500 dark:hover:text-teal-400">
                  Profile
                </button>
                <button className="w-full text-left text-gray-900 dark:text-gray-100 hover:text-teal-500 dark:hover:text-teal-400">
                  Orders
                </button>
                <button className="w-full text-left text-gray-900 dark:text-gray-100 hover:text-teal-500 dark:hover:text-teal-400">
                  Wishlist
                </button>
                <hr className="border-gray-300/40 dark:border-gray-700/40" />
                <button className="w-full text-left text-red-500 dark:text-red-400 hover:underline">
                  Logout
                </button>
              </motion.div>
            )}
          </div>

          {/* THEME TOGGLE */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="w-8 h-8 flex items-center justify-center rounded-xl bg-white/40 dark:bg-black/40 shadow-neu cursor-pointer"
          >
            {theme === "light" ? (
              <SunIcon className="w-6 h-6 text-yellow-500" />
            ) : (
              <MoonIcon className="w-6 h-6 text-blue-300" />
            )}
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;
