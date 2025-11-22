import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const BillingForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Billing info submitted!");
  };
  // get the user infromaion from the local storage 
  const user = JSON.parse(localStorage.getItem("user"))
  // console.log("user", typeof user)
  // console.log("user", JSON.parse(user))
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white/30 dark:bg-black/30 backdrop-blur-lg shadow-neu rounded-2xl p-6 flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Billing Information</h2>

      <input
        {...register("name", { required: true })}
        placeholder="Full Name"
        defaultValue={user?.name}
        onChange={(e) => e.target.value}
        className={`p-3 rounded-xl bg-white/50 dark:bg-black/50 text-gray-900 dark:text-gray-100 shadow-neu focus:ring-2 focus:ring-teal-400 transition ${errors.name ? "border-2 border-red-500" : ""
          }`}
      />
      <input
        {...register("email", { required: true })}
        placeholder="Email Address"
        value={user?.email}
        readOnly
        className={`p-3 rounded-xl  bg-white/50 dark:bg-black/50 text-gray-900 dark:text-gray-100 shadow-neu focus:ring-2 focus:ring-teal-400 transition ${errors.email ? "border-2 border-red-500" : ""
          }`}
      />
      <input
        {...register("address", { required: true })}
        placeholder="Shipping Address"
        className={`p-3 rounded-xl bg-white/50 dark:bg-black/50 text-gray-900 dark:text-gray-100 shadow-neu focus:ring-2 focus:ring-teal-400 transition ${errors.address ? "border-2 border-red-500" : ""
          }`}
      />

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
