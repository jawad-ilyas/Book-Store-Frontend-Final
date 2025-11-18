import React from "react";
import { motion } from "framer-motion";

const NewsletterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gray-100 dark:bg-gray-900 transition duration-500">

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl backdrop-blur-xl bg-white/20 dark:bg-black/20 p-10 rounded-3xl shadow-neu-light dark:shadow-neu-dark"
      >
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 text-center mb-4">
          Manage Your Newsletter
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          Choose what you want to receive from us. Stay updated with new releases,
          weekly deals, and personalized recommendations.
        </p>

        {/* Subscription Categories */}
        <form className="space-y-6">

          {/* Option 1 */}
          <label className="flex items-center justify-between p-4 bg-white/30 dark:bg-black/30 backdrop-blur-xl rounded-2xl shadow-neu cursor-pointer hover:shadow-neu-hover transition">
            <span className="text-gray-900 dark:text-gray-100 font-semibold">New Book Releases</span>
            <input type="checkbox" className="w-5 h-5 accent-teal-500 cursor-pointer" />
          </label>

          {/* Option 2 */}
          <label className="flex items-center justify-between p-4 bg-white/30 dark:bg-black/30 backdrop-blur-xl rounded-2xl shadow-neu cursor-pointer hover:shadow-neu-hover transition">
            <span className="text-gray-900 dark:text-gray-100 font-semibold">Weekly Book Deals</span>
            <input type="checkbox" className="w-5 h-5 accent-teal-500 cursor-pointer" />
          </label>

          {/* Option 3 */}
          <label className="flex items-center justify-between p-4 bg-white/30 dark:bg-black/30 backdrop-blur-xl rounded-2xl shadow-neu cursor-pointer hover:shadow-neu-hover transition">
            <span className="text-gray-900 dark:text-gray-100 font-semibold">Personalized Recommendations</span>
            <input type="checkbox" className="w-5 h-5 accent-teal-500 cursor-pointer" />
          </label>

          {/* Option 4 */}
          <label className="flex items-center justify-between p-4 bg-white/30 dark:bg-black/30 backdrop-blur-xl rounded-2xl shadow-neu cursor-pointer hover:shadow-neu-hover transition">
            <span className="text-gray-900 dark:text-gray-100 font-semibold">Blog Articles & Reading Tips</span>
            <input type="checkbox" className="w-5 h-5 accent-teal-500 cursor-pointer" />
          </label>

          {/* Save Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full mt-4 py-3 bg-teal-500 dark:bg-teal-400 text-white font-semibold rounded-2xl shadow-neu hover:shadow-neu-hover transition"
          >
            Save Preferences
          </motion.button>

        </form>

      </motion.div>
    </div>
  );
};

export default NewsletterPage;
