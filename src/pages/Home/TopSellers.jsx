import { motion } from "framer-motion";
import { useGetTopSellersQuery } from "../../redux/book/bookApi";
import { Link } from "react-router-dom";
import AddToCartBtn from "../../components/AddToCartBtn";

const SkeletonCard = () => (
  <div className="min-w-[200px] h-[320px] bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg rounded-2xl animate-pulse shadow-lg p-4" />
);

const TopSellers = () => {
  const { data, isLoading } = useGetTopSellersQuery();
  const topSellers = data?.books || [];

  return (
    <section className="my-12 px-6 relative">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Top Sellers
      </h2>

      {/* Scroll Fade Edges */}
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-100 dark:from-gray-900 to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-100 dark:from-gray-900 to-transparent pointer-events-none"></div>

      {/* Book Cards Container */}
      <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
        {/* Skeleton while loading */}
        {isLoading &&
          [1, 2, 3, 4, 5].map((i) => <SkeletonCard key={i} />)}

        {!isLoading &&
          topSellers.map((book) => {
            // Price calculation with discount
            const finalPrice = book.discountPercent
              ? book.price - (book.price * book.discountPercent) / 100
              : book.price;

            return (
              <motion.div
                key={book._id}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="min-w-[220px] bg-white/20 dark:bg-gray-800/20 backdrop-blur-xl border border-white/20 dark:border-gray-800/20 rounded-2xl shadow-lg p-4 relative overflow-hidden"
              >
                {/* Top Seller Badge */}
                <div className="absolute top-3 left-3 bg-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  ⭐ Top Seller
                </div>

                {/* Discount Badge */}
                {book.discountPercent > 0 && (
                  <div className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full shadow-md">
                    -{book.discountPercent}%
                  </div>
                )}

                {/* Cover Image */}
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-40 h-56 rounded-xl object-cover mx-auto shadow-md mb-4"
                />

                {/* Title */}
                <Link
                  to={`/book/${book._id}`}
                  className="block text-lg font-semibold text-center text-gray-900 dark:text-gray-100 hover:text-teal-500 transition"
                >
                  {book.title}
                </Link>

                {/* Author */}
                <p className="text-gray-600 dark:text-gray-300 text-sm text-center mt-1">
                  by <span className="font-medium">{book.author?.name}</span>
                </p>

                {/* Category Pills */}
                <div className="flex justify-center mt-2">
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-xs rounded-full shadow text-gray-700 dark:text-gray-300">
                    {book.category?.name}
                  </span>
                </div>

                {/* Rating Stars */}
                <div className="flex justify-center mt-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={index}
                      className={`text-lg ${
                        index < Math.round(book.rating || 0)
                          ? "text-yellow-400"
                          : "text-gray-400"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Prices */}
                <div className="mt-3 text-center">
                  {book.discountPercent > 0 ? (
                    <>
                      <p className="text-gray-500 line-through text-sm">
                        Rs. {book.price}
                      </p>
                      <p className="text-teal-500 dark:text-teal-400 font-bold text-lg">
                        Rs. {finalPrice}
                      </p>
                    </>
                  ) : (
                    <p className="text-teal-500 dark:text-teal-400 font-bold text-lg">
                      Rs. {book.price}
                    </p>
                  )}
                </div>

                {/* Add To Cart */}
                <div className="mt-4 flex justify-center">
                  <AddToCartBtn bookId={book._id} />
                </div>
              </motion.div>
            );
          })}
      </div>
    </section>
  );
};

export default TopSellers;
