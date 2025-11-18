import { motion } from "framer-motion";

const OrderCard = ({ order }) => {
  const { id, date, items, total, status } = order;

  return (
    <motion.div
      className="bg-white/30 dark:bg-black/30 backdrop-blur-lg rounded-2xl shadow-neu p-6 mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
      whileHover={{ scale: 1.02 }}
    >
      {/* Order Info */}
      <div className="flex-1 flex flex-col gap-2">
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Order #{id}</h3>
        <p className="text-gray-700 dark:text-gray-300 text-sm">Placed on: {date}</p>
        <p className="text-gray-700 dark:text-gray-300 text-sm">
          Items: {items.map((item) => item.title).join(", ")}
        </p>
        <p className="text-teal-500 dark:text-teal-400 font-bold">Total: ${total.toFixed(2)}</p>
        <p className={`font-semibold ${
          status === "Delivered" ? "text-green-500" :
          status === "Shipped" ? "text-blue-500" :
          "text-yellow-500"
        }`}>Status: {status}</p>
      </div>

      {/* Tracking Button */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 rounded-xl bg-teal-400 dark:bg-teal-500 text-white font-semibold shadow-neu hover:shadow-neu-hover transition mt-2 md:mt-0"
      >
        Track Order
      </motion.button>
    </motion.div>
  );
};

export default OrderCard;
