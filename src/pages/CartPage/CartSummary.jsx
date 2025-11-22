import { motion } from "framer-motion";

const CartSummary = ({ cartItems, onCheckout }) => {
  const subtotal = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.bookId.price) * item.quantity,
    0
  );

  return (
    <div className="bg-white/30 dark:bg-black/30 backdrop-blur-lg rounded-3xl shadow-neu p-6 flex flex-col gap-4 w-full md:w-96">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Summary</h2>
      <div className="flex justify-between text-gray-900 dark:text-gray-100">
        <span>Subtotal</span>
        <span>${subtotal}</span>
      </div>
      <div className="flex justify-between text-gray-900 dark:text-gray-100">
        <span>Shipping</span>
        <span>$5.00</span>
      </div>
      <div className="flex justify-between font-bold text-xl text-gray-900 dark:text-gray-100">
        <span>Total</span>
        <span>${(subtotal + 5)}</span>
      </div>

      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={onCheckout}
        className="px-6 py-3 rounded-xl bg-teal-400 dark:bg-teal-500 text-white font-semibold shadow-neu hover:shadow-neu-hover transition"
      >
        Proceed to Checkout
      </motion.button>
    </div>
  );
};

export default CartSummary;
