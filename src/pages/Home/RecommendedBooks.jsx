import { motion } from "framer-motion";
import { useGetRecommendedBooksQuery } from "../../redux/book/bookApi";
import { Link } from "react-router-dom";
import AddToCartBtn from "../../components/AddToCartBtn";

const RecommendedBooks = () => {
  const { data, isLoading } = useGetRecommendedBooksQuery();
  const recommendedBooks = data?.books || [];

  return (
    <section className="my-16 px-6 relative">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Recommended For You
      </h2>

      {/* Fade edges for premium slider look */}
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-100 dark:from-gray-900 to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-100 dark:from-gray-900 to-transparent pointer-events-none"></div>

      <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
        {recommendedBooks.map((book) => (
          <motion.div
            key={book._id}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="min-w-[220px] bg-white/20 dark:bg-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-gray-800/20 rounded-2xl shadow-lg p-4 relative overflow-hidden"
          >
            {/* Book Image with Link */}
            <Link to={`/book/${book._id}`}>
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-40 h-56 rounded-xl object-cover mx-auto shadow-md mb-4 cursor-pointer"
              />
            </Link>

            {/* Title with Link */}
            <Link
              to={`/book/${book._id}`}
              className="block text-lg font-semibold text-center text-gray-900 dark:text-gray-100 hover:text-teal-500 transition"
            >
              {book.title}
            </Link>

            {/* Author */}
            <p className="text-gray-600 dark:text-gray-300 text-sm text-center mt-1">
              {book.author?.name}
            </p>

            {/* Price */}
            <p className="text-teal-500 dark:text-teal-400 font-bold text-center mt-2">
              Rs. {book.price}
            </p>

            {/* Add to Cart Button */}
            {/* Add To Cart */}
            <div className="mt-4 flex justify-center">
              <AddToCartBtn bookId={book._id} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedBooks;
