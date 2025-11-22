import { motion } from "framer-motion";
import { useGetTopSellersQuery } from "../../redux/book/bookApi";
import { Link } from "react-router-dom";
import { FaUser, FaTag } from "react-icons/fa";
import { useRef } from "react";

const TopSellers = () => {
  const { data, isLoading, isError } = useGetTopSellersQuery();
  const topSellers = data?.books || [];
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 220; // adjust based on card width + margin
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="my-12 px-6">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Top Sellers
      </h2>

      <div className="relative">
        {/* Carousel */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto space-x-6 pb-4 scrollbar-none scroll-smooth"
        >
          {topSellers.map((book) => (
            <motion.div
              key={book._id}
              className="min-w-[200px] bg-white dark:bg-black/30 rounded-2xl shadow-md dark:shadow-none p-4 flex flex-col items-center justify-between transition-transform hover:scale-105 hover:shadow-lg"
              whileHover={{ y: -5 }}
            >
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-36 h-48 rounded-lg object-cover mb-4 shadow-sm"
              />

              <Link
                to={`book/${book._id}`}
                className="text-lg font-semibold text-gray-900 dark:text-gray-100 text-center mb-1"
              >
                {book.title}
              </Link>

              <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm mb-1">
                <FaTag className="mr-1" />
                <span>{book.category?.name || "General"}</span>
              </div>

              <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm mb-2">
                <FaUser className="mr-1" />
                <span>{book.author?.name || "Unknown"}</span>
              </div>

              <p className="text-teal-500 dark:text-teal-400 font-bold mb-3">
                {book.price}
              </p>

              <motion.button
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-xl bg-teal-400 dark:bg-teal-500 text-white font-semibold shadow-md hover:shadow-lg transition"
              >
                Add to Cart
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Carousel Arrows */}
        {/* <button
          onClick={() => scroll("left")}
          className="absolute top-1/2 left-0 -translate-y-1/2 bg-gray-200/70 dark:bg-gray-700/70 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition z-10"
        >
          &#10094;
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute top-1/2 right-0 -translate-y-1/2 bg-gray-200/70 dark:bg-gray-700/70 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition z-10"
        >
          &#10095;
        </button> */}
      </div>
    </section>
  );
};

export default TopSellers;
