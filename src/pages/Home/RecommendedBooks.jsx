import { motion } from "framer-motion";
import { useGetRecommendedBooksQuery } from "../../redux/book/bookApi";



const RecommendedBooks = () => {
  const { data, isLoading, isError } = useGetRecommendedBooksQuery()
  const recommendedBooks = data?.books || []
  return (
    <section className="my-16 px-6">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Recommended for You
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recommendedBooks.map((book) => (
          <motion.div
            key={book._id}
            className="bg-white/30 dark:bg-black/30 backdrop-blur-lg rounded-2xl shadow-neu p-4 flex flex-col items-center transition-transform hover:scale-105"
            whileHover={{ y: -5 }}
          >
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-40 h-56 rounded-lg object-cover mb-4 shadow-md"
            />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 text-center">
              {book.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{book.author?.name}</p>
            <p className="text-teal-500 dark:text-teal-400 font-bold mb-3">{book.price}</p>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-xl bg-teal-400 dark:bg-teal-500 text-white font-semibold shadow-neu hover:shadow-neu-hover transition"
            >
              Add to Cart
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedBooks;
