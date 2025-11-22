import { motion } from "framer-motion";
import { TrashIcon } from "@heroicons/react/24/outline";

const CartItem = ({ item, onQuantityChange, itemId, quantity, onRemove }) => {
  return (
    <motion.div
      className="flex items-center justify-between bg-white/30 dark:bg-black/30 backdrop-blur-lg rounded-2xl shadow-neu p-4 mb-4"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center gap-4">
        {/* <p>{item?._id}</p>
        <p>{itemId}</p> */}
        <img
          src={item?.coverImage}
          alt={item?.title}
          className="w-24 h-32 rounded-lg object-cover shadow-md"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {item?.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">{item.author?.name}</p>
          <p className="text-teal-500 dark:text-teal-400 font-bold">{item?.price}</p>
        </div>
      </div>

      {/* Quantity and Remove */}
      <div className="flex items-center gap-4">
        <input
          type="number"
          min="1"
          value={quantity}
          // onChange={(e) => { onQuantityChange(itemId, e.target.value), console.log(itemId) }}
          onChange={(e) => { onQuantityChange(itemId, e.target.value ,item?._id) }}
          className="w-16 text-center rounded-xl bg-white/50 dark:bg-black/50 backdrop-blur-md text-gray-900 dark:text-gray-100 shadow-neu"
        />
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => onRemove(item?._id)}
          className="p-2 rounded-xl bg-red-400 dark:bg-red-500 text-white shadow-neu hover:shadow-neu-hover transition"
        >
          <TrashIcon className="w-5 h-5" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CartItem;
