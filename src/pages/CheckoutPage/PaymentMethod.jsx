import React from "react";
import { motion } from "framer-motion";

const PaymentMethod = () => {
  return (
    <div className="bg-white/30 dark:bg-black/30 backdrop-blur-lg shadow-neu rounded-2xl p-6 flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Payment Method</h2>

      <div className="flex flex-col gap-3">
        <label className="flex items-center gap-2">
          <input type="radio" name="payment" className="accent-teal-400 dark:accent-teal-500" />
          Credit / Debit Card
        </label>
        <label className="flex items-center gap-2">
          <input type="radio" name="payment" className="accent-teal-400 dark:accent-teal-500" />
          PayPal
        </label>
        <label className="flex items-center gap-2">
          <input type="radio" name="payment" className="accent-teal-400 dark:accent-teal-500" />
          Cash on Delivery
        </label>
      </div>

      {/* Card info fields */}
      <input
        type="text"
        placeholder="Card Number"
        className="p-3 rounded-xl bg-white/50 dark:bg-black/50 text-gray-900 dark:text-gray-100 shadow-neu focus:ring-2 focus:ring-teal-400 transition"
      />
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Expiry Date"
          className="p-3 rounded-xl bg-white/50 dark:bg-black/50 text-gray-900 dark:text-gray-100 shadow-neu focus:ring-2 focus:ring-teal-400 transition flex-1"
        />
        <input
          type="text"
          placeholder="CVV"
          className="p-3 rounded-xl bg-white/50 dark:bg-black/50 text-gray-900 dark:text-gray-100 shadow-neu focus:ring-2 focus:ring-teal-400 transition flex-1"
        />
      </div>
    </div>
  );
};

export default PaymentMethod;
