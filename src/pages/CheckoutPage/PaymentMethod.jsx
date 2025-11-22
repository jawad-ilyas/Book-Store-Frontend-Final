import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import StripeImplement from "../../components/stripe/StripeImplement";

const PaymentMethod = ({ cartItems,setpaymentMethodReseponse, selectedMethod, setSelectedMethod, billingInfo, setPaymentSuccess, setStatus }) => {

  const handleStripeResult = (result) => {
    if (result.success) {
      setPaymentSuccess(true);
      setStatus({ loading: false, success: "Stripe payment successful!", error: null });
    } else {
      setPaymentSuccess(false);
      setStatus({ loading: false, success: null, error: result.message });
    }
  };

  return (
    <div className="bg-white/40 dark:bg-gray-800/50 backdrop-blur-lg shadow-neu rounded-2xl p-6 flex flex-col gap-4 transition-colors">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2 transition-colors">Payment Method</h2>

      <div className="flex flex-col gap-3">
        {/* {["card", "stripe", "cod"].map((option) => ( */}
        {["stripe", "cod"].map((option) => (
          <label key={option} className="flex items-center gap-2 cursor-pointer text-gray-900 dark:text-gray-100 transition-colors">
            <input
              type="radio"
              name="payment"
              value={option}
              checked={selectedMethod === option}
              onChange={() => setSelectedMethod(option)}
              className="accent-teal-500"
            />
            {/* {option === "card" && "Credit / Debit Card"} */}
            {option === "stripe" && "Stripe Payment"}
            {option === "cod" && "Cash on Delivery"}
          </label>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* {selectedMethod === "card" && (
          <motion.div
            key="card"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="flex flex-col gap-4 mt-4"
          >
            <input
              type="text"
              placeholder="Card Number"
              className="p-3 rounded-xl bg-white/60 dark:bg-gray-700/60 text-gray-900 dark:text-gray-100 shadow-neu focus:ring-2 focus:ring-teal-400 transition"
            />
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Expiry (MM/YY)"
                className="p-3 rounded-xl flex-1 bg-white/60 dark:bg-gray-700/60 text-gray-900 dark:text-gray-100 shadow-neu focus:ring-2 focus:ring-teal-400 transition"
              />
              <input
                type="text"
                placeholder="CVV"
                className="p-3 rounded-xl flex-1 bg-white/60 dark:bg-gray-700/60 text-gray-900 dark:text-gray-100 shadow-neu focus:ring-2 focus:ring-teal-400 transition"
              />
            </div>
          </motion.div>
        )} */}

        {selectedMethod === "stripe" && billingInfo && (
          <motion.div
            key="stripe"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="p-4 mt-4 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 transition-colors"
          >
            <StripeImplement
              cartItems={cartItems}
              billingInfo={billingInfo}
              setpaymentMethodReseponse={setpaymentMethodReseponse}
              onPaymentResult={handleStripeResult}
            />
          </motion.div>
        )}

        {selectedMethod === "cod" && (
          <motion.div
            key="cod"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="p-4 mt-4 rounded-xl bg-yellow-100/60 dark:bg-yellow-900/40 border border-yellow-400 transition-colors"
          >
            <p className="text-gray-900 dark:text-gray-200 text-sm transition-colors">
              Cash on Delivery selected. You will pay the amount when the order arrives.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PaymentMethod;
