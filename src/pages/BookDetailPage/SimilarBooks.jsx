import { motion } from "framer-motion";

// Similar to RecommendedBooks style
const SimilarBooks = ({ books }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {books.map((book) => (
        <motion.div
          key={book.id}
          className="bg-white/30 dark:bg-black/30 backdrop-blur-lg rounded-2xl shadow-neu p-4 flex flex-col items-center transition-transform hover:scale-105"
          whileHover={{ y: -5 }}
        >
          <img
            src={book.image}
            alt={book.title}
            className="w-40 h-56 rounded-lg object-cover mb-4 shadow-md"
          />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 text-center">
            {book.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{book.author}</p>
          <p className="text-teal-500 dark:text-teal-400 font-bold mb-3">{book.price}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default SimilarBooks;
