import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PaymentMethod = () => {
  const [method, setMethod] = useState("");

  return (
    <div className="bg-white/40 dark:bg-black/40 backdrop-blur-lg shadow-neu rounded-2xl p-6 flex flex-col gap-4">

      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
        Payment Method
      </h2>

      {/* Payment Options */}
      <div className="flex flex-col gap-3">
        {["card", "stripe", "cod"].map((option) => (
          <label key={option} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="payment"
              value={option}
              checked={method === option}
              onChange={() => setMethod(option)}
              className="accent-teal-500"
            />
            {option === "card" && "Credit / Debit Card"}
            {option === "stripe" && "Stripe Payment"}
            {option === "cod" && "Cash on Delivery"}
          </label>
        ))}
      </div>

      {/* Dynamic Section */}
      <AnimatePresence mode="wait">
        {method === "card" && (
          <motion.div
            key="card-section"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="flex flex-col gap-4 mt-4"
          >
            <input
              type="text"
              placeholder="Card Number"
              className="p-3 rounded-xl bg-white/60 dark:bg-black/60 text-gray-900 dark:text-gray-100 shadow-neu focus:ring-2 focus:ring-teal-400 transition"
            />

            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Expiry (MM/YY)"
                className="p-3 rounded-xl bg-white/60 dark:bg-black/60 text-gray-900 dark:text-gray-100 shadow-neu focus:ring-2 focus:ring-teal-400 transition flex-1"
              />
              <input
                type="text"
                placeholder="CVV"
                className="p-3 rounded-xl bg-white/60 dark:bg-black/60 text-gray-900 dark:text-gray-100 shadow-neu focus:ring-2 focus:ring-teal-400 transition flex-1"
              />
            </div>
          </motion.div>
        )}

        {method === "stripe" && (
          <motion.div
            key="stripe-section"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="p-4 mt-4 rounded-xl bg-white/50 dark:bg-black/50 border border-gray-300 dark:border-gray-700"
          >
            <p className="text-gray-800 dark:text-gray-100 text-sm">
              Stripe Payment will appear here.  
              (You will integrate Stripe Elements later.)
            </p>
          </motion.div>
        )}

        {method === "cod" && (
          <motion.div
            key="cod-section"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="p-4 mt-4 rounded-xl bg-yellow-100/60 dark:bg-yellow-900/40 border border-yellow-400"
          >
            <p className="text-gray-900 dark:text-gray-200 text-sm">
              Cash on Delivery selected.  
              You will pay the amount when the order arrives.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default PaymentMethod;
