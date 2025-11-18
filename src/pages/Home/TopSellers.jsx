import { motion } from "framer-motion";
import { useGetTopSellersQuery } from "../../redux/book/bookApi";



const TopSellers = () => {
  const { data, isLoading, isError } = useGetTopSellersQuery();
  const topSellers = data?.books || []
  return (
    <section className="my-12 px-6">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Top Sellers
      </h2>

      <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
        {topSellers.map((book) => (
          <motion.div
            key={book._id}
            className="min-w-[200px] bg-white/30 dark:bg-black/30 backdrop-blur-lg rounded-2xl shadow-neu p-4 flex flex-col items-center transition-transform hover:scale-105"
            whileHover={{ y: -5 }}
          >
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-36 h-48 rounded-lg object-cover mb-4 shadow-md"
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

export default TopSellers;
