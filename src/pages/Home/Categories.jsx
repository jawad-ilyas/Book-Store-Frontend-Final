import { motion } from "framer-motion";
import { BookOpenIcon, AcademicCapIcon, HeartIcon, StarIcon } from "@heroicons/react/24/outline";

// Example categories
const categories = [
  { id: 1, name: "Fiction", icon: BookOpenIcon },
  { id: 2, name: "Non-Fiction", icon: AcademicCapIcon },
  { id: 3, name: "Romance", icon: HeartIcon },
  { id: 4, name: "Bestsellers", icon: StarIcon },
  { id: 5, name: "Mystery", icon: BookOpenIcon },
  { id: 6, name: "Science", icon: AcademicCapIcon },
  // Add more categories as needed
];

const Categories = () => {
  return (
    <section className="my-16 px-6">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Explore Categories
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.id}
              className="bg-white/30 dark:bg-black/30 backdrop-blur-lg rounded-2xl shadow-neu p-6 flex flex-col items-center justify-center cursor-pointer transition-transform hover:scale-105"
              whileHover={{ y: -5 }}
            >
              <Icon className="w-10 h-10 text-teal-500 dark:text-teal-400 mb-3" />
              <p className="text-gray-900 dark:text-gray-100 font-semibold text-center">
                {category.name}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
