import { motion } from "framer-motion";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="flex justify-center mt-8 gap-2">
      {pages.map((page) => (
        <motion.button
          key={page}
          whileTap={{ scale: 0.95 }}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-xl ${page === currentPage
              ? "bg-teal-400 dark:bg-teal-500 text-white shadow-neu"
              : "bg-white/30 dark:bg-black/30 backdrop-blur-lg text-gray-900 dark:text-gray-100 shadow-neu"
            }`}
        >
          {page}
        </motion.button>
      ))}
    </div>
  );
};

export default Pagination;
