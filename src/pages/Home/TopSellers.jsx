import { motion } from "framer-motion";

// Example book data
const topSellers = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: "$12.99", image: "/books/gatsby.jpg" },
  { id: 2, title: "1984", author: "George Orwell", price: "$10.99", image: "/books/1984.jpg" },
  { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", price: "$14.50", image: "/books/mockingbird.jpg" },
  { id: 4, title: "The Alchemist", author: "Paulo Coelho", price: "$11.99", image: "/books/alchemist.jpg" },
  // add more books
];

const TopSellers = () => {
  return (
    <section className="my-12 px-6">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Top Sellers
      </h2>

      <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
        {topSellers.map((book) => (
          <motion.div
            key={book.id}
            className="min-w-[200px] bg-white/30 dark:bg-black/30 backdrop-blur-lg rounded-2xl shadow-neu p-4 flex flex-col items-center transition-transform hover:scale-105"
            whileHover={{ y: -5 }}
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-36 h-48 rounded-lg object-cover mb-4 shadow-md"
            />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 text-center">
              {book.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{book.author}</p>
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
