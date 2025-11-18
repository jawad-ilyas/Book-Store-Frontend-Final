import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useLoginUserMutation, useRegisterUserMutation } from "../../redux/user/userApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../redux/auth/authSlice";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [registerUser, { isLoading, isError }] = useRegisterUserMutation();
  const [loginUser, { isLoading: isErrorLoading, isError: isErrorLogin }] = useLoginUserMutation();
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    console.log(isLogin ? "Login data:" : "Register data:", data);
    if (!isLogin) {
      const result = await registerUser(data).unwrap()
      console.log("result ", result)
      dispatch(setCredentials({ user: result?.user, accessToken: result?.accessToken }))
      alert("Registered successfully!");
    }
    else {
      const result = await loginUser(data)
      console.log("result or login case ", result)
      dispatch(setCredentials({ user: result?.user, accessToken: result?.accessToken }))
      alert("login successfully!");
    }
    // alert(`${isLogin ? "Login" : "Register"} successful!`);
  };

  return (
    <div className="bg-white/30 dark:bg-black/30 backdrop-blur-lg shadow-neu rounded-2xl p-8 w-full max-w-md mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
        {isLogin ? "Login" : "Register"}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {!isLogin && (
          <input
            {...register("name", { required: true })}
            placeholder="Full Name"
            className={`p-3 rounded-xl bg-white/50 dark:bg-black/50 text-gray-900 dark:text-gray-100 shadow-neu focus:ring-2 focus:ring-teal-400 transition ${errors.name ? "border-2 border-red-500" : ""
              }`}
          />
        )}

        <input
          {...register("email", { required: true })}
          type="email"
          placeholder="Email Address"
          className={`p-3 rounded-xl bg-white/50 dark:bg-black/50 text-gray-900 dark:text-gray-100 shadow-neu focus:ring-2 focus:ring-teal-400 transition ${errors.email ? "border-2 border-red-500" : ""
            }`}
        />
        <input
          {...register("password", { required: true })}
          type="password"
          placeholder="Password"
          className={`p-3 rounded-xl bg-white/50 dark:bg-black/50 text-gray-900 dark:text-gray-100 shadow-neu focus:ring-2 focus:ring-teal-400 transition ${errors.password ? "border-2 border-red-500" : ""
            }`}
        />

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
