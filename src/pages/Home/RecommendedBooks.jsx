import { motion } from "framer-motion";

// Example recommended books data
const recommendedBooks = [
  { id: 1, title: "Atomic Habits", author: "James Clear", price: "$15.99", image: "/books/atomic-habits.jpg" },
  { id: 2, title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", price: "$13.99", image: "/books/subtle-art.jpg" },
  { id: 3, title: "Educated", author: "Tara Westover", price: "$14.50", image: "/books/educated.jpg" },
  { id: 4, title: "Becoming", author: "Michelle Obama", price: "$16.99", image: "/books/becoming.jpg" },
  { id: 5, title: "The Silent Patient", author: "Alex Michaelides", price: "$12.99", image: "/books/silent-patient.jpg" },
  { id: 6, title: "Where the Crawdads Sing", author: "Delia Owens", price: "$14.99", image: "/books/crawdads.jpg" },
  // Add more as needed
];

const RecommendedBooks = () => {
  return (
    <section className="my-16 px-6">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Recommended for You
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recommendedBooks.map((book) => (
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
