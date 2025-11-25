import React from "react";
import { motion } from "framer-motion";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import HandleDeleteBannerBtn from "../../HandleDeleteBannerBtn";
import { Link } from "react-router-dom";

// Sample props: banners = [{ _id, heroTitle, heroSubtitle, heroImage, bannerImage, promoText, promoLink, isActive }]
// const BannersList = ({ banners, onEdit, onDelete }) => {
const BannersList = ({ banners }) => {
  if (!banners || banners.length === 0) {
    return (
      <div className="w-full flex items-center justify-center py-20 text-gray-500 dark:text-gray-400">
        No banners found.
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
        Website Banners
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {banners.map((banner) => (
          <motion.div
            key={banner._id}
            className="relative bg-gray-50 dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden p-6 flex flex-col justify-between"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Hero Image */}
            {banner.heroImage && (
              <img
                src={banner.heroImage}
                alt={banner.heroTitle}
                className="w-full h-48 object-cover rounded-2xl mb-4"
              />
            )}

            {/* Banner Info */}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                {banner.heroTitle || "Untitled"}
              </h3>
              {banner.heroSubtitle && (
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  {banner.heroSubtitle}
                </p>
              )}

              {banner.promoText && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {banner.promoText}
                </p>
              )}

              {banner.promoLink && (
                <a
                  href={banner.promoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-500 dark:text-teal-400 font-medium hover:underline text-sm"
                >
                  Visit Promo
                </a>
              )}

              <p
                className={`mt-3 inline-block px-3 py-1 rounded-full text-sm font-semibold ${banner.isActive === "true" || banner.isActive === true
                  ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                  : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                  }`}
              >
                {banner.isActive ? "Active" : "Inactive"}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-3 mt-4">
              <Link to={`/admin/banners/update/${banner?._id}`}>
                <button
                  // onClick={() => onEdit(banner)}
                  className="flex items-center gap-1 px-3 py-1 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-semibold"
                >
                  <PencilIcon className="w-4 h-4" />
                  Update
                </button>
              </Link>
              {/* handle delet button btn */}
              <HandleDeleteBannerBtn bannerId={banner?._id} />

            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BannersList;
