import { motion } from "framer-motion";
import { Package, Calendar, CreditCard, Truck, Clock, CheckCircle, XCircle } from "lucide-react";

const OrderCard = ({ order }) => {
  const {
    _id,
    items,
    totalAmount,
    paymentMethod,
    paymentStatus,
    orderStatus,
    shippingAddress,
    createdAt,
    transactionId,
  } = order;

  return (
    <motion.div
      className="bg-white/40 dark:bg-black/30 backdrop-blur-xl rounded-2xl shadow-lg p-6 mb-6 
                 border border-white/20 dark:border-white/10 
                 hover:shadow-xl transition duration-300"
      whileHover={{ scale: 1.02 }}
    >
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Order #{_id}
          </h3>

          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm">
            <Calendar size={16} />
            <span>Placed on: {new Date(createdAt).toDateString()}</span>
          </div>
        </div>

        {/* Status Badges */}
        <div className="flex gap-3">

          {/* Payment Status */}
          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1
              ${paymentStatus === "paid"
                ? "bg-green-100 text-green-700"
                : paymentStatus === "pending"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-700"
              }`}
          >
            {paymentStatus === "paid" ? (
              <CheckCircle size={14} />
            ) : paymentStatus === "pending" ? (
              <Clock size={14} />
            ) : (
              <XCircle size={14} />
            )}
            {paymentStatus}
          </span>

          {/* Order Status */}
          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1
              ${orderStatus === "delivered"
                ? "bg-green-100 text-green-700"
                : orderStatus === "shipped"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
          >
            <Truck size={14} />
            {orderStatus}
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-300/40 dark:bg-gray-600/40 my-4" />

      {/* Items List */}
      <div className="flex gap-2 items-start">
        <Package size={18} className="text-gray-600 dark:text-gray-300 mt-1" />
        <div className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          {items.map((item, i) => (
            <span key={i} className="block">
              • {item.bookId?.title || "Unknown Book"} (x{item.quantity})
            </span>
          ))}
        </div>
      </div>

      {/* Payment Info */}
      <div className="mt-4 flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm">
        <CreditCard size={18} />
        <span className="capitalize">
          Payment: {paymentMethod}
          {transactionId && (
            <span className="text-xs text-gray-500 ml-1">
              (Txn: {transactionId})
            </span>
          )}
        </span>
      </div>

      {/* Total Price */}
      <p className="text-lg font-bold text-teal-600 dark:text-teal-400 mt-3">
        Total: ${totalAmount}
      </p>

      {/* Track Order Button */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        className="mt-5 px-5 py-2 rounded-xl bg-teal-500 text-white 
                   font-semibold shadow-md hover:bg-teal-600 transition"
      >
        Track Order
      </motion.button>
    </motion.div>
  );
};

export default OrderCard;
