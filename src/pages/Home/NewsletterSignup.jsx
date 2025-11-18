import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const NewsletterSignup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Newsletter email submitted:", data);
    reset(); // Reset form after submission
  };

  return (
    <section className="my-16 px-6 flex justify-center">
      <motion.div
        className="w-full max-w-2xl bg-white/30 dark:bg-black/30 backdrop-blur-lg rounded-3xl shadow-neu p-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Join Our Newsletter
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Stay updated with the latest releases and special offers.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email", { required: "Email is required" })}
            className={`w-full sm:flex-1 px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-gray-100 shadow-neu focus:outline-none focus:ring-2 focus:ring-teal-400 transition ${
              errors.email ? "animate-shake border-red-500 border-2" : ""
            }`}
          />
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-xl bg-teal-400 dark:bg-teal-500 text-white font-semibold shadow-neu hover:shadow-neu-hover transition"
          >
            Subscribe
          </motion.button>
        </form>

        {errors.email && (
          <p className="text-red-500 mt-2 text-sm">{errors.email.message}</p>
        )}
        {isSubmitSuccessful && (
          <p className="text-green-500 mt-2 text-sm">Subscribed successfully!</p>
        )}
      </motion.div>
    </section>
  );
};

export default NewsletterSignup;
