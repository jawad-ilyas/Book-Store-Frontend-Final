// import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 transition duration-500 px-6">

      {/* Floating Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="backdrop-blur-2xl bg-white/20 dark:bg-black/20 shadow-neu-light dark:shadow-neu-dark p-10 rounded-3xl max-w-lg text-center"
      >
        <motion.h1
          className="text-8xl font-bold text-teal-500 dark:text-teal-400 drop-shadow-lg"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1.05 }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 1.5,
          }}
        >
          404
        </motion.h1>

        <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
          Page Not Found
        </h2>

        <p className="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
          Looks like this page has wandered off the bookshelf.  
          Let’s get you back to where stories live.
        </p>

        {/* CTA Button */}
        <a to="/">
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="mt-6 px-8 py-3 rounded-2xl font-semibold text-white bg-teal-500 dark:bg-teal-400 shadow-neu hover:shadow-neu-hover transition"
          >
            Go Back Home
          </motion.button>
        </a>

      </motion.div>
    </div>
  );
};

export default NotFound;
