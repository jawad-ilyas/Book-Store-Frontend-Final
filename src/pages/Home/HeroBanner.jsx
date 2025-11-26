import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const HeroBanner = () => {


  return (
    <section className="relative w-full h-[550px] flex items-center justify-center bg-gradient-to-r from-indigo-200 via-pink-200 to-yellow-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 overflow-hidden rounded-3xl shadow-xl p-6">
      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-white/30 dark:bg-black/30 backdrop-blur-lg rounded-3xl shadow-inner"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Discover Your Next Favorite Book
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-6">
          Explore thousands of books across genres, curated just for you.
        </p>
        <Link to={"/search"}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-xl bg-teal-400 dark:bg-teal-500 text-white font-semibold shadow-neu hover:shadow-neu-hover transition"
          >
            Shop Now
          </motion.button>
        </Link>
      </motion.div>



    </section>
  );
};

export default HeroBanner;
