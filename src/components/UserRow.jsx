import { motion } from "framer-motion";

const UserRow = ({ user, onRoleChange, onToggleBan }) => {
  return (
    <motion.tr
      className="bg-white/30 dark:bg-black/30 backdrop-blur-lg shadow-neu rounded-xl mb-2"
      whileHover={{ scale: 1.01 }}
    >
      <td className="px-4 py-3 text-gray-900 dark:text-gray-100 font-semibold">{user._id}</td>
      <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{user.name}</td>
      <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{user.email}</td>
    
      <td className="px-4 py-3">
        <button
          onClick={() => onToggleBan(user.id)}
          className={`px-3 py-1 rounded-xl font-semibold shadow-neu hover:shadow-neu-hover transition ${
            user.banned ? "bg-red-400 dark:bg-red-500 text-white" : "bg-green-400 dark:bg-green-500 text-white"
          }`}
        >
          {user.banned ? "Banned" : "Active"}
        </button>
      </td>
    </motion.tr>
  );
};

export default UserRow;
