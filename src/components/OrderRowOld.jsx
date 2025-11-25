import { motion } from "framer-motion";

const OrderRow = ({ order, onStatusChange }) => {
  return (
    <motion.tr
      className="bg-white/30 dark:bg-black/30 backdrop-blur-lg shadow-neu rounded-xl mb-2"
      whileHover={{ scale: 1.01 }}
    >
      {/* Order ID */}
      <td className="px-4 py-3 text-gray-900 dark:text-gray-100 font-semibold">
        {order._id}
      </td>

      {/* User */}
      <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
        {order.userId}
      </td>

      {/* Date */}
      <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
        {new Date(order.createdAt).toLocaleDateString()}
      </td>

      {/* Total */}
      <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
        ${order.totalAmount.toFixed(2)}
      </td>

      {/* Status Dropdown */}
      <td className="px-4 py-3">
        <select
          value={order.orderStatus}
          onChange={(e) => onStatusChange(order._id, e.target.value)}
          className="p-2 rounded-xl bg-white/50 dark:bg-black/50 border border-gray-300 dark:border-gray-600"
        >
          <option value="processing">Processing</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </td>
    </motion.tr>
  );
};

export default OrderRow;
