import { motion } from "framer-motion";
import { useGetAllCategoriesQuery } from "../../redux/category/categoryApi";

// Example filter categories
// const categories = ["Fiction", "Non-Fiction", "Romance", "Mystery", "Science"];
const FiltersSidebar = () => {
  const { data } = useGetAllCategoriesQuery();
  const categories = data?.categoriesList || []
  console.log("categories into filter sidebar", categories)
  return (
    <aside className="hidden md:flex flex-col w-64 p-4 bg-white/30 dark:bg-black/30 backdrop-blur-lg rounded-2xl shadow-neu mr-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Filters</h3>

      <div className="mb-4">
        <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Categories</h4>
        {categories.map((cat) => (
          <motion.label
            key={cat?._id}
            whileHover={{ scale: 1.02 }}
            className="flex items-center mb-1 cursor-pointer"
          >
            <input type="checkbox" className="mr-2 accent-teal-400" />
            <span className="text-gray-900 dark:text-gray-100">{cat?.name}</span>
          </motion.label>
        ))}
      </div>

      <div className="mb-4">
        <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Price Range</h4>
        <input type="range" min="0" max="100" className="w-full accent-teal-400" />
      </div>

      <div>
        <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Rating</h4>
        {[5, 4, 3, 2, 1].map((star) => (
          <motion.div key={star} whileHover={{ scale: 1.02 }} className="flex items-center mb-1 cursor-pointer">
            <span className="text-gray-900 dark:text-gray-100">{star} Stars</span>
          </motion.div>
        ))}
      </div>
    </aside>
  );
};

export default FiltersSidebar;
