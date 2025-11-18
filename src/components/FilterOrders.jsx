const FilterOrders = ({ filter, setFilter }) => {
  return (
    <div className="flex gap-4 mb-6 flex-wrap">
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="p-3 rounded-xl bg-white/50 dark:bg-black/50 shadow-neu focus:ring-2 focus:ring-teal-400 text-gray-900 dark:text-gray-100"
      >
        <option value="">All Statuses</option>
        <option value="Processing">Processing</option>
        <option value="Shipped">Shipped</option>
        <option value="Delivered">Delivered</option>
        <option value="Cancelled">Cancelled</option>
      </select>
    </div>
  );
};

export default FilterOrders;
