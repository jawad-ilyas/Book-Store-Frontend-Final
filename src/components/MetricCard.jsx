import { motion } from "framer-motion";

const MetricCard = ({ title, value, icon }) => {
  return (
    <motion.div
      className="bg-white/30 dark:bg-black/30 backdrop-blur-lg shadow-neu rounded-2xl p-6 flex items-center gap-4"
      whileHover={{ scale: 1.03 }}
    >
      <div className="text-teal-400 dark:text-teal-500 text-3xl">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-gray-900 dark:text-gray-100 font-bold text-lg">{title}</span>
        <span className="text-gray-700 dark:text-gray-300 text-xl">{value}</span>
      </div>
    </motion.div>
  );
};

export default MetricCard;
