import { motion } from "framer-motion";
import { HeartIcon, ShoppingCartIcon, StarIcon, TagIcon } from "@heroicons/react/24/outline";

const BookDetailHeader = ({ book }) => {
  const discountedPrice = book.discountPercent
    ? (book.price * (100 - book.discountPercent)) / 100
    : book.price;

  return (
    <section className="flex flex-col md:flex-row items-start md:items-center gap-8 px-6 py-12">
      {/* Book Cover */}
      <motion.img
        src={book.coverImage}
        alt={book.title}
        className="w-64 h-80 md:w-72 md:h-96 rounded-2xl shadow-neu object-cover"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      />

      {/* Book Info */}
      <motion.div
        className="flex-1 bg-white/30 dark:bg-black/30 backdrop-blur-lg rounded-3xl shadow-neu p-8"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Title & Author */}
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          {book.title}
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">
          By <span className="font-semibold">{book.author?.name}</span>
        </p>

        {/* Price & Discount */}
        <div className="flex items-center gap-4 mb-4">
          <p className="text-teal-500 dark:text-teal-400 font-bold text-2xl">
            $ {discountedPrice}
          </p>
          {book.discountPercent > 0 && (
            <span className="text-gray-500 dark:text-gray-400 line-through">
              $ {book.price}
            </span>
          )}
          {book.discountPercent > 0 && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
              -{book.discountPercent}%
            </span>
          )}
        </div>

        {/* Tags: Top Seller / Recommended */}
        <div className="flex gap-2 mb-4">
          {book.topSeller && (
            <span className="bg-yellow-400 text-white px-2 py-1 rounded text-sm font-semibold">
              Top Seller
            </span>
          )}
          {book.recommended && (
            <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm font-semibold">
              Recommended
            </span>
          )}
        </div>

        {/* Details */}
        <div className="grid grid-cols-2 gap-4 mb-6 text-gray-700 dark:text-gray-300">
          <p><span className="font-semibold">Publisher:</span> {book.publisher}</p>
          <p><span className="font-semibold">ISBN:</span> {book.isbn}</p>
          <p><span className="font-semibold">Pages:</span> {book.pages}</p>
          <p><span className="font-semibold">Stock:</span> {book.stock}</p>
          <p><span className="font-semibold">Category:</span> {book.category?.name}</p>
          <p><span className="font-semibold">Subcategory:</span> {book.subCategory}</p>
        </div>

        {/* Description */}
        <p className="text-gray-800 dark:text-gray-200 mb-6">{book.description}</p>

        {/* Buttons */}
        <div className="flex gap-4">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-400 dark:bg-teal-500 text-white font-semibold shadow-neu hover:shadow-neu-hover transition"
          >
            <ShoppingCartIcon className="w-5 h-5" />
            Add to Cart
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/30 dark:bg-black/30 backdrop-blur-lg text-gray-900 dark:text-gray-100 font-semibold shadow-neu hover:shadow-neu-hover transition"
          >
            <HeartIcon className="w-5 h-5 text-red-500" />
            Wishlist
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default BookDetailHeader;
