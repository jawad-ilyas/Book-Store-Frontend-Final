import React from "react";
import AuthForm from "./AuthForm";

const LoginRegisterPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-500 px-6 py-12 gap-12">
      
      {/* Optional Hero/Illustration */}
      <div className="hidden md:flex flex-1 items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=400&q=80"
          alt="Books illustration"
          className="w-full max-w-sm rounded-2xl shadow-lg"
        />
      </div>

      {/* Auth Form */}
      <div className="flex-1 w-full">
        <AuthForm />
      </div>
    </div>
  );
};

export default LoginRegisterPage;
