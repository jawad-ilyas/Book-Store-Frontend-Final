import { motion } from "framer-motion";

const OrderRow = ({ order, onStatusChange }) => {
  return (
    <motion.tr
      className="bg-white/30 dark:bg-black/30 backdrop-blur-lg shadow-neu rounded-xl mb-2"
      whileHover={{ scale: 1.01 }}
    >
      <td className="px-4 py-3 text-gray-900 dark:text-gray-100 font-semibold">{order.id}</td>
      <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{order.user}</td>
      <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{order.date}</td>
      <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{order.total}</td>
      <td className="px-4 py-3">
        <select
          value={order.status}
          onChange={(e) => onStatusChange(order.id, e.target.value)}
          className="p-2 rounded-xl bg-white/50 dark:bg-black/50 shadow-neu focus:ring-2 focus:ring-teal-400 text-gray-900 dark:text-gray-100"
        >
          <option value="Processing">Processing</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </td>
    </motion.tr>
  );
};

export default OrderRow;
