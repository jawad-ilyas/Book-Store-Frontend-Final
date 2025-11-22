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
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoutBtn from "./LogoutBtn";

const Header = () => {
  const [theme, setTheme] = useState("light");
  const [showDropdown, setShowDropdown] = useState(false);

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  // Get user state from Redux
  // const { user, isAuthorized } = useSelector((state) => state.auth);
  let isAuthorized = false
  const token = localStorage.getItem("accessToken")
  if (token) {
    isAuthorized = true
  }
  // Theme Toggle
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
  };

  const submitHandler = (data) => {
    if (!data?.search?.trim()) return;
    navigate(`/search?q=${encodeURIComponent(data.search.trim())}`);
  };

  return (
    <header className="sticky top-0 z-50 px-6 py-4 bg-white/20 dark:bg-black/20 backdrop-blur-xl shadow-neu-light dark:shadow-neu-dark">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">

        {/* LOGO */}
        <div className="flex items-center gap-2 cursor-pointer">
          <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold text-teal-600 dark:text-teal-400">
            <Link to="/">BookNest</Link>
          </motion.div>
        </div>

        {/* SEARCH BAR */}
        <form onSubmit={handleSubmit(submitHandler)} className="flex-1">
          <div className="hidden md:flex flex-1 items-center">
            <div className="w-full relative">
              <input
                {...register("search")}
                type="text"
                placeholder="Search books, authors, genres..."
                className="w-full px-4 py-2 pl-12 rounded-2xl bg-white/40 dark:bg-black/40 backdrop-blur-xl shadow-neu focus:ring-2 focus:ring-teal-400 dark:focus:ring-teal-500 text-gray-900 dark:text-gray-100 outline-none transition"
              />
              <button type="submit">
                <MagnifyingGlassIcon className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-300" />
              </button>
            </div>
          </div>
        </form>

        {/* ICONS */}
        <div className="flex items-center gap-5">

          {/* WISHLIST */}
          <motion.button whileTap={{ scale: 0.9 }} className="relative">
            <HeartIcon className="w-7 h-7 text-gray-900 dark:text-gray-100 hover:text-teal-500 dark:hover:text-teal-400 transition" />
            {isAuthorized && (
              <span className="absolute top-0 right-0 bg-teal-500 text-white text-xs px-1.5 py-0.5 rounded-full shadow">
                2
              </span>
            )}
          </motion.button>

          {/* CART */}
          <motion.button whileTap={{ scale: 0.9 }} className="relative">
            <Link to="/cart">
              <ShoppingCartIcon className="w-7 h-7 text-gray-900 dark:text-gray-100 hover:text-teal-500 dark:hover:text-teal-400 transition" />
            </Link>
            {isAuthorized && (
              <span className="absolute top-0 right-0 bg-teal-500 text-white text-xs px-1.5 py-0.5 rounded-full shadow">
                2
              </span>
            )}
          </motion.button>

          {/* USER / LOGIN */}
          {isAuthorized ? (
            <div className="relative">
              <motion.button whileTap={{ scale: 0.9 }} onClick={() => setShowDropdown(!showDropdown)}>
                <UserCircleIcon className="w-8 h-8 text-gray-900 dark:text-gray-100 hover:text-teal-500 dark:hover:text-teal-400 transition" />
              </motion.button>

              {showDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-3 w-48 bg-white/60 dark:bg-black/60 backdrop-blur-xl rounded-2xl shadow-neu p-4 space-y-3"
                >
                  <Link
                    to="/profile"
                    className="w-full text-left text-gray-900 dark:text-gray-100 hover:text-teal-500 dark:hover:text-teal-400"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/orders"
                    className="w-full text-left text-gray-900 dark:text-gray-100 hover:text-teal-500 dark:hover:text-teal-400"
                  >
                    Orders
                  </Link>
                  <button className="w-full text-left text-gray-900 dark:text-gray-100 hover:text-teal-500 dark:hover:text-teal-400">
                    Wishlist
                  </button>
                  <hr className="border-gray-300/40 dark:border-gray-700/40" />
                  <LogoutBtn />
                </motion.div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 rounded-xl bg-teal-400 dark:bg-teal-500 text-white font-semibold shadow-neu hover:shadow-neu-hover transition"
            >
              Login / Register
            </Link>
          )}

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
