import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const BookFormModal = ({ isOpen, onClose, onSubmit, defaultValues }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: defaultValues || { title: "", author: "", price: "", image: "" },
  });

  if (!isOpen) return null;

  const handleFormSubmit = (data) => {
    onSubmit(data);
    reset();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <motion.div
        className="bg-white/30 dark:bg-black/30 backdrop-blur-lg shadow-neu rounded-2xl p-6 w-full max-w-md"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          {defaultValues ? "Edit Book" : "Add Book"}
        </h2>

        <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col gap-4">
          <input
            {...register("title", { required: true })}
            placeholder="Title"
            className={`p-3 rounded-xl bg-white/50 dark:bg-black/50 text-gray-900 dark:text-gray-100 shadow-neu focus:ring-2 focus:ring-teal-400 ${
              errors.title ? "border-2 border-red-500" : ""
            }`}
          />
          <input
            {...register("author", { required: true })}
            placeholder="Author"
            className={`p-3 rounded-xl bg-white/50 dark:bg-black/50 text-gray-900 dark:text-gray-100 shadow-neu focus:ring-2 focus:ring-teal-400 ${
              errors.author ? "border-2 border-red-500" : ""
            }`}
          />
          <input
            {...register("price", { required: true })}
            placeholder="Price"
            className={`p-3 rounded-xl bg-white/50 dark:bg-black/50 text-gray-900 dark:text-gray-100 shadow-neu focus:ring-2 focus:ring-teal-400 ${
              errors.price ? "border-2 border-red-500" : ""
            }`}
          />
          <input
            {...register("image", { required: true })}
            placeholder="Image URL"
            className={`p-3 rounded-xl bg-white/50 dark:bg-black/50 text-gray-900 dark:text-gray-100 shadow-neu focus:ring-2 focus:ring-teal-400 ${
              errors.image ? "border-2 border-red-500" : ""
            }`}
          />

          <div className="flex justify-end gap-2 mt-2">
            <motion.button
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-gray-400 dark:bg-gray-500 text-white font-semibold shadow-neu hover:shadow-neu-hover transition"
            >
              Cancel
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-4 py-2 rounded-xl bg-teal-400 dark:bg-teal-500 text-white font-semibold shadow-neu hover:shadow-neu-hover transition"
            >
              {defaultValues ? "Update" : "Add"}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default BookFormModal;
