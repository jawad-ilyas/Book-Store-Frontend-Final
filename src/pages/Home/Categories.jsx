import React from "react";
import { motion } from "framer-motion";
import { useGetAllCategoriesQuery } from "../../redux/category/categoryApi";
import { Link } from "react-router-dom";

const Categories = () => {
  const { data, isLoading, isError } = useGetAllCategoriesQuery();

  const categories = data?.categoriesList || [];

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load categories</p>;

  return (
    <section className="my-16 px-6">
      <h2 className="text-3xl font-bold mb-6">Explore Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {categories.map((category) => (
          <Link key={category._id} to={`/search?categoryq=${category?._id}`}>
            <motion.div
              key={category._id}
              className="bg-white rounded-2xl shadow p-6 flex flex-col items-center justify-center"
              whileHover={{ y: -5 }}
            >
              <img src={category.coverImage} className="w-10 h-10 mb-3" />
              <p className="font-semibold text-center">{category.name}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
