import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useLoginUserMutation, useRegisterUserMutation } from "../../redux/user/userApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../redux/auth/authSlice";
import { ToastContainer, toast } from 'react-toastify';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [registerUser, { isLoading, isError }] = useRegisterUserMutation();
  const [loginUser, { isLoading: isErrorLoading, isError: isErrorLogin }] = useLoginUserMutation();
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    try {
      if (!isLogin) {
        // Register case
        const result = await registerUser(data).unwrap();
        dispatch(setCredentials({ user: result.user, accessToken: result.accessToken }));

        toast.success(result.message || "Registered successfully!", {
          position: "top-right",
          autoClose: 5000,
          theme: "dark",
        });

      } else {
        // Login case
        const result = await loginUser(data).unwrap();
        dispatch(setCredentials({ user: result.user, accessToken: result.accessToken }));

        toast.success(result.message || "Logged in successfully!", {
          position: "top-right",
          autoClose: 5000,
          theme: "dark",
        });
      }
    } catch (error) {
      // 🔹 RTK Query error handling
      // error.data is usually returned by API
      const errMsg = error?.data?.message || error?.error || "Something went wrong!";

      toast.error(errMsg, {
        position: "top-right",
        autoClose: 5000,
        theme: "dark",
      });

      console.error("Auth error:", error);
    }
  };

  return (
    <div className="bg-white/30 dark:bg-black/30 backdrop-blur-lg shadow-neu rounded-2xl p-8 w-full max-w-md mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
        {isLogin ? "Login" : "Register"}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {!isLogin && (
          <div className="flex flex-col gap-1">
            <input
              {...register("name", { required: "Name is required" })}
              placeholder="Full Name"
              className={`p-3 rounded-xl bg-white/50 dark:bg-black/50 text-gray-900 dark:text-gray-100 shadow-neu focus:ring-2 focus:ring-teal-400 transition ${errors.name ? "border-2 border-red-500" : ""
                }`}
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
          </div>
        )}

        <div className="flex flex-col gap-1">
          <input
            {...register("email", { required: "Email is required" })}
            type="email"
            placeholder="Email Address"
            className={`p-3 rounded-xl bg-white/50 dark:bg-black/50 text-gray-900 dark:text-gray-100 shadow-neu focus:ring-2 focus:ring-teal-400 transition ${errors.email ? "border-2 border-red-500" : ""
              }`}
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
        </div>

        <div className="flex flex-col gap-1">
          <input
            {...register("password", { required: "Password is required" })}
            type="password"
            placeholder="Password"
            className={`p-3 rounded-xl bg-white/50 dark:bg-black/50 text-gray-900 dark:text-gray-100 shadow-neu focus:ring-2 focus:ring-teal-400 transition ${errors.password ? "border-2 border-red-500" : ""
              }`}
          />
          {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="mt-4 px-6 py-3 rounded-xl bg-teal-400 dark:bg-teal-500 text-white font-semibold shadow-neu hover:shadow-neu-hover transition"
        >
          {isLogin ? "Login" : "Register"}
        </motion.button>
      </form>


      <p className="text-gray-700 dark:text-gray-300 text-center mt-4">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-teal-400 dark:text-teal-500 font-semibold hover:underline"

        >
          {isLogin ? "Register" : "Login"}
        </button>
      </p>
    </div>
  );
};

export default AuthForm;
