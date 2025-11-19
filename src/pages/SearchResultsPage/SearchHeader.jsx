import { useState } from "react";
import { motion } from "framer-motion";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SearchHeader = ({ initialSearch }) => {
  const [query, setQuery] = useState(initialSearch);
  const { register, setValue, handleSubmit } = useForm({ defaultValues: { search: initialSearch } })
  const navigate = useNavigate();
  const submitHandler = (data) => { 

    const q = data?.search.trim();
    navigate(`/search?q=${encodeURIComponent(q)}`)
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between mb-6 px-6">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex w-full md:max-w-lg bg-white/30 dark:bg-black/30 backdrop-blur-lg rounded-2xl shadow-neu p-2 items-center"
      >
        <input
          type="text"
          placeholder="Search for books..."
          value={query}
          {...register("search")}
          onChange={(e) => { setQuery(e.target.value) }}
          className="flex-1 bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 px-4 py-2 rounded-l-2xl focus:outline-none"
        />
        <motion.button
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-teal-400 dark:bg-teal-500 p-2 rounded-r-2xl text-white shadow-neu hover:shadow-neu-hover transition"
        >
          <MagnifyingGlassIcon className="w-5 h-5" />
        </motion.button>
      </form>

      {/* Sorting Options */}
      <select className="mt-4 md:mt-0 md:ml-4 bg-white/30 dark:bg-black/30 backdrop-blur-lg rounded-xl shadow-neu px-4 py-2 text-gray-900 dark:text-gray-100 focus:outline-none">
        <option value="relevance">Relevance</option>
        <option value="price-low-high">Price: Low to High</option>
        <option value="price-high-low">Price: High to Low</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
};

export default SearchHeader;
