const FilterUsers = ({ filterRole, setFilterRole }) => {
  return (
    <div className="flex gap-4 mb-6 flex-wrap">
      <select
        value={filterRole}
        onChange={(e) => setFilterRole(e.target.value)}
        className="p-3 rounded-xl bg-white/50 dark:bg-black/50 shadow-neu focus:ring-2 focus:ring-teal-400 text-gray-900 dark:text-gray-100"
      >
        <option value="">All Roles</option>
        <option value="User">User</option>
        <option value="Admin">Admin</option>
        <option value="Moderator">Moderator</option>
      </select>
    </div>
  );
};

export default FilterUsers;
