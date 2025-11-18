import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const ChangePassword = ({ onPasswordChange }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    onPasswordChange(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white/30 dark:bg-black/30 backdrop-blur-lg shadow-neu rounded-2xl p-6 flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Change Password</h2>

      <input
        {...register("currentPassword", { required: true })}
        type="password"
        placeholder="Current Password"
        className={`p-3 rounded-xl bg-white/50 dark:bg-black/50 text-gray-900 dark:text-gray-100 shadow-neu focus:ring-2 focus:ring-teal-400 transition ${
          errors.currentPassword ? "border-2 border-red-500" : ""
        }`}
      />
      <input
        {...register("newPassword", { required: true })}
        type="password"
        placeholder="New Password"
        className={`p-3 rounded-xl bg-white/50 dark:bg-black/50 text-gray-900 dark:text-gray-100 shadow-neu focus:ring-2 focus:ring-teal-400 transition ${
          errors.newPassword ? "border-2 border-red-500" : ""
        }`}
      />

      <motion.button
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="mt-4 px-6 py-3 rounded-xl bg-teal-400 dark:bg-teal-500 text-white font-semibold shadow-neu hover:shadow-neu-hover transition"
      >
        Change Password
      </motion.button>
    </form>
  );
};

export default ChangePassword;
