import { useState, useRef, useEffect } from "react";
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
import { useGetCartCountQuery, useGetCartQuery } from "../redux/cart/cartApi";

const Header = () => {
  const [theme, setTheme] = useState("light");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  // Get user state from Redux
  const { user, isAuthorized } = useSelector((state) => state.auth);

  // Persist theme on reload
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Search submit
  const submitHandler = (data) => {
    if (!data?.search?.trim()) return;
    navigate(`/search?q=${encodeURIComponent(data.search.trim())}`);
  };

  // Theme toggle
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
  };

  const { data: cartCount } = useGetCartQuery();
  console.log("total count of the cart current user ", cartCount?.cartItems?.items)
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
          {/* <motion.button whileTap={{ scale: 0.9 }} className="relative">
            <HeartIcon className="w-7 h-7 text-gray-900 dark:text-gray-100 hover:text-teal-500 dark:hover:text-teal-400 transition" />
            {isAuthorized && user?.wishlist?.length > 0 && (
              <span className="absolute top-0 right-0 bg-teal-500 text-white text-xs px-1.5 py-0.5 rounded-full shadow">
                {user.wishlist.length}
              </span>
            )}
          </motion.button> */}

          {/* CART */}
          <motion.button whileTap={{ scale: 0.9 }} className="relative">
            <Link to="/cart">
              <ShoppingCartIcon className="w-7 h-7 text-gray-900 dark:text-gray-100 hover:text-teal-500 dark:hover:text-teal-400 transition" />
            </Link>
            {isAuthorized && cartCount?.cartItems?.items.length > 0 && (
              <span className="absolute top-0 right-0 bg-teal-500 text-white text-xs px-1.5 py-0.5 rounded-full shadow">
                {cartCount?.cartItems?.items.length}
              </span>
            )}
          </motion.button>

          {/* USER / ADMIN DROPDOWN */}
          {isAuthorized ? (
            <div className="relative">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <UserCircleIcon className="w-8 h-8 text-gray-900 dark:text-gray-100 hover:text-teal-500 dark:hover:text-teal-400 transition" />
              </motion.button>

              {showDropdown && (
                <motion.div
                  ref={dropdownRef}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-3 w-56 bg-white/60 dark:bg-black/60 backdrop-blur-xl rounded-2xl shadow-neu p-4 space-y-3"
                >
                  {/* ADMIN MENU */}
                  {user?.role === "admin" ? (
                    <>
                      <Link
                        onClick={() => setShowDropdown(false)}
                        to="/admin/dashboard"
                        className="block text-gray-900 dark:text-gray-100 hover:text-teal-500 dark:hover:text-teal-400"
                      >
                        📊 Admin Dashboard
                      </Link>

                      <Link
                        onClick={() => setShowDropdown(false)}
                        to="/admin/books"
                        className="block text-gray-900 dark:text-gray-100 hover:text-teal-500 dark:hover:text-teal-400"
                      >
                        📚 Manage Books
                      </Link>

                      <Link
                        onClick={() => setShowDropdown(false)}
                        to="/admin/orders"
                        className="block text-gray-900 dark:text-gray-100 hover:text-teal-500 dark:hover:text-teal-400"
                      >
                        🛒 Manage Orders
                      </Link>

                      <Link
                        onClick={() => setShowDropdown(false)}
                        to="/admin/users"
                        className="block text-gray-900 dark:text-gray-100 hover:text-teal-500 dark:hover:text-teal-400"
                      >
                        👥 Manage Users
                      </Link>

                      <Link
                        onClick={() => setShowDropdown(false)}
                        to="/admin/banners"
                        className="block text-gray-900 dark:text-gray-100 hover:text-teal-500 dark:hover:text-teal-400"
                      >
                        🖼️ Manage Banners
                      </Link>

                      <hr className="border-gray-300/40 dark:border-gray-700/40" />

                      <LogoutBtn onLogout={() => setShowDropdown(false)} />
                    </>
                  ) : (
                    <>
                      {/* USER MENU */}
                      <Link
                        onClick={() => setShowDropdown(false)}
                        to="/profile"
                        className="block text-gray-900 dark:text-gray-100 hover:text-teal-500 dark:hover:text-teal-400"
                      >
                        Profile
                      </Link>

                      <Link
                        onClick={() => setShowDropdown(false)}
                        to="/orders"
                        className="block text-gray-900 dark:text-gray-100 hover:text-teal-500 dark:hover:text-teal-400"
                      >
                        Orders
                      </Link>

                      <hr className="border-gray-300/40 dark:border-gray-700/40" />

                      <LogoutBtn onLogout={() => setShowDropdown(false)} />
                    </>
                  )}
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
          <motion.button whileTap={{ scale: 0.9 }} onClick={toggleTheme} className="w-8 h-8 flex items-center justify-center rounded-xl bg-white/40 dark:bg-black/40 shadow-neu cursor-pointer">
            {theme === "light" ? <SunIcon className="w-6 h-6 text-yellow-500" /> : <MoonIcon className="w-6 h-6 text-blue-300" />}
          </motion.button>

        </div>
      </div>
    </header>
  );
};

export default Header;
