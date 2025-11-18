import React from "react";
import { motion } from "framer-motion";
import { books } from "../../data";

const OrderSummary = () => {
  const subtotal = books.reduce((acc, item) => acc + parseFloat(item.price.replace("$", "")), 0);

  return (
    <div className="bg-white/30 dark:bg-black/30 backdrop-blur-lg shadow-neu rounded-3xl p-6 flex flex-col gap-4 w-full md:w-96">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Order Summary</h2>

      {books.map((item) => (
        <div key={item.id} className="flex justify-between text-gray-900 dark:text-gray-100">
          <span>{item.title}</span>
          <span>{item.price}</span>
        </div>
      ))}

      <div className="flex justify-between font-bold text-xl text-gray-900 dark:text-gray-100">
        <span>Total</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      <motion.button
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 rounded-xl bg-teal-400 dark:bg-teal-500 text-white font-semibold shadow-neu hover:shadow-neu-hover transition mt-4"
      >
        Confirm Order
      </motion.button>
    </div>
  );
};

export default OrderSummary;
