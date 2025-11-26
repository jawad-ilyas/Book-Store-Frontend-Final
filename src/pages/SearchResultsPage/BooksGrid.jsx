import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import HandleDeleteBookBtn from "../../components/HandleDeleteBookBtn";
import { Link } from "react-router-dom";
import AddToCartBtn from "../../components/AddToCartBtn";

const BooksGrid = ({ books }) => {
  const { user } = useSelector(state => state?.auth);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {books.map((book) => (
        <motion.div
          key={book._id}
          className="bg-white/30 dark:bg-black/30 backdrop-blur-xl rounded-2xl shadow-lg p-5 flex flex-col items-center border border-white/20 dark:border-white/10 hover:shadow-2xl transition-all"
          whileHover={{ y: -5 }}
        >
          {/* IMAGE */}
          <Link to={`/book/${book._id}`} className="w-full flex justify-center">
            <motion.img
              src={book.coverImage}
              alt={book.title}
              className="w-44 h-64 rounded-xl object-cover shadow-md hover:scale-105 transition"
              whileHover={{ scale: 1.03 }}
            />
          </Link>

          {/* TITLE */}
          <Link to={`/book/${book._id}`}>
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mt-3 text-center hover:underline">
              {book.title}
            </h3>
          </Link>

          {/* AUTHOR */}
          <div className="flex items-center gap-2 mt-1">
            {book.author?.photo && (
              <img
                src={book.author.photo}
                alt={book.author.name}
                className="w-8 h-8 rounded-full object-cover border border-white/40"
              />
            )}
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              {book.author?.name}
            </p>
          </div>

          {/* CATEGORY */}
          <p className="text-xs mt-1 px-3 py-1 bg-teal-100 dark:bg-teal-700/30 text-teal-700 dark:text-teal-300 rounded-full">
            {book.category?.name}
          </p>

          {/* PRICE + DISCOUNT */}
          <div className="mt-2">
            <span className="text-teal-500 dark:text-teal-400 font-bold text-xl">
              ${book.price}
            </span>
            {book.discountPercent > 0 && (
              <span className="ml-2 text-sm text-red-500 font-semibold">
                -{book.discountPercent}%
              </span>
            )}
          </div>

          {/* RATING */}
          <div className="mt-2 text-yellow-400 text-lg">
            {"★".repeat(Math.round(book.rating))}
            {"☆".repeat(5 - Math.round(book.rating))}
          </div>

          {/* STOCK */}
          <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
            Stock: {book.stock > 0 ? book.stock : "Out of Stock"}
          </p>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2 mt-2">
            {book.tags?.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* ACTION BUTTONS */}
          {user?.role !== "admin" ? (
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="mt-4 px-4 py-2 rounded-xl bg-teal-400 dark:bg-teal-500 text-white font-semibold shadow hover:shadow-xl transition"
            >
              <AddToCartBtn bookId={book?._id} />
            </motion.button>
          ) : (
            <div className="flex gap-3 mt-4">
              {/* EDIT */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-xl bg-blue-500 text-white shadow hover:bg-blue-600 transition"
              >
                <Link to={`/admin/books/update/${book?._id}`}>Edit</Link>
              </motion.button>

              {/* DELETE */}
              <HandleDeleteBookBtn bookId={book?._id} />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default BooksGrid;
