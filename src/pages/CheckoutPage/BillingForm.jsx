import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const BillingForm = ({ onSubmitForm }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Get user info from localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  const onSubmit = (data) => {
    console.log("Billing Info:", data);
    if (onSubmitForm) onSubmitForm(data); // pass data to parent
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white/30 dark:bg-black/30 backdrop-blur-lg shadow-neu rounded-2xl p-6 flex flex-col gap-4"
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        Billing Information
      </h2>

      {/* Name */}
      <input
        {...register("name", { required: true })}
        placeholder="Full Name"
        defaultValue={user?.name}
        className={`p-3 rounded-xl bg-white/50 dark:bg-black/50 text-gray-900 dark:text-gray-100 shadow-neu focus:ring-2 focus:ring-teal-400 transition ${errors.name ? "border-2 border-red-500" : ""}`}
      />

      {/* Email */}
      <input
        {...register("email", { required: true })}
        placeholder="Email Address"
        value={user?.email}
        readOnly
        className={`p-3 rounded-xl bg-white/50 dark:bg-black/50 text-gray-900 dark:text-gray-100 shadow-neu focus:ring-2 focus:ring-teal-400 transition ${errors.email ? "border-2 border-red-500" : ""}`}
      />

      {/* Address Line 1 */}
      <input
        {...register("addressLine1", { required: true })}
        placeholder="Address Line 1"
        className={`p-3 rounded-xl bg-white/50 dark:bg-black/50 text-gray-900 dark:text-gray-100 shadow-neu focus:ring-2 focus:ring-teal-400 transition ${errors.addressLine1 ? "border-2 border-red-500" : ""}`}
      />

      {/* Address Line 2 */}
      <input
        {...register("addressLine2")}
        placeholder="Address Line 2"
        className="p-3 rounded-xl bg-white/50 dark:bg-black/50 text-gray-900 dark:text-gray-100 shadow-neu focus:ring-2 focus:ring-teal-400 transition"
      />

      <div className="flex flex-col md:flex-row gap-4">
        {/* City */}
        <input
          {...register("city", { required: true })}
          placeholder="City"
          className={`p-3 rounded-xl bg-white/50 dark:bg-black/50 text-gray-900 dark:text-gray-100 shadow-neu focus:ring-2 focus:ring-teal-400 transition flex-1 ${errors.city ? "border-2 border-red-500" : ""}`}
        />
        {/* State */}
        <input
          {...register("state")}
          placeholder="State"
          className="p-3 rounded-xl bg-white/50 dark:bg-black/50 text-gray-900 dark:text-gray-100 shadow-neu focus:ring-2 focus:ring-teal-400 transition flex-1"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Postal Code */}
        <input
          {...register("postalCode", { required: true })}
          placeholder="Postal Code"
          className={`p-3 rounded-xl bg-white/50 dark:bg-black/50 text-gray-900 dark:text-gray-100 shadow-neu focus:ring-2 focus:ring-teal-400 transition flex-1 ${errors.postalCode ? "border-2 border-red-500" : ""}`}
        />
        {/* Country */}
        <input
          {...register("country", { required: true })}
          placeholder="Country"
          className={`p-3 rounded-xl bg-white/50 dark:bg-black/50 text-gray-900 dark:text-gray-100 shadow-neu focus:ring-2 focus:ring-teal-400 transition flex-1 ${errors.country ? "border-2 border-red-500" : ""}`}
        />
      </div>

      {/* Phone */}
      <input
        {...register("phone", { required: true })}
        placeholder="Phone Number"
        className={`p-3 rounded-xl bg-white/50 dark:bg-black/50 text-gray-900 dark:text-gray-100 shadow-neu focus:ring-2 focus:ring-teal-400 transition ${errors.phone ? "border-2 border-red-500" : ""}`}
      />

      {/* Default Address Checkbox */}
      <label className="flex items-center gap-2 mt-2">
        <input
          {...register("isDefault")}
          type="checkbox"
          className="accent-teal-500"
        />
        Set as default address
      </label>

      <motion.button
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="mt-4 px-6 py-3 rounded-xl bg-teal-400 dark:bg-teal-500 text-white font-semibold shadow-neu hover:shadow-neu-hover transition"
      >
        Save Billing Info
      </motion.button>
    </form>
  );
};

export default BillingForm;
