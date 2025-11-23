import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ConfirmModal = ({ isOpen, message, onConfirm, onCancel }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg w-96 text-center"
          >
            <p className="text-gray-900 dark:text-gray-100 mb-4">{message}</p>
            <div className="flex justify-center gap-4">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={onConfirm}
                className="px-4 py-2 bg-red-500 text-white rounded-xl font-semibold"
              >
                Yes
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={onCancel}
                className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-gray-100 rounded-xl font-semibold"
              >
                Cancel
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ConfirmModal;
