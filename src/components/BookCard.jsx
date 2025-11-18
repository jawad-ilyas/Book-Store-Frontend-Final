import { motion } from "framer-motion";

const BookCard = ({ book, onEdit, onDelete }) => {
  return (
    <motion.div
      className="bg-white/30 dark:bg-black/30 backdrop-blur-lg shadow-neu rounded-2xl p-4 flex flex-col items-center gap-3"
      whileHover={{ scale: 1.02 }}
    >
      <img src={book.image} alt={book.title} className="w-32 h-40 object-cover rounded-lg shadow-md" />
      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{book.title}</h3>
      <p className="text-gray-700 dark:text-gray-300 text-sm">{book.author}</p>
      <p className="text-teal-500 dark:text-teal-400 font-semibold">{book.price}</p>

      <div className="flex gap-2 mt-2">
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="px-3 py-1 rounded-xl bg-blue-400 dark:bg-blue-500 text-white font-semibold shadow-neu hover:shadow-neu-hover transition"
          onClick={() => onEdit(book)}
        >
          Edit
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="px-3 py-1 rounded-xl bg-red-400 dark:bg-red-500 text-white font-semibold shadow-neu hover:shadow-neu-hover transition"
          onClick={() => onDelete(book.id)}
        >
          Delete
        </motion.button>
      </div>
    </motion.div>
  );
};

export default BookCard;
