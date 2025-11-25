const OrderStatusUpdate = ({ currentStatus, onChange }) => {
  // console.log("current status value ", currentStatus)
  const handleOnchange = (e) => {
    // console.log(e.target.value)
    onChange(e.target.value)
  }
  return (
    <select
      defaultValue={currentStatus}
      onChange={handleOnchange}
      className="p-2 rounded-xl bg-white dark:bg-black/30 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200"
    >
      <option value="processing">Processing</option>
      <option value="shipped">Shipped</option>
      <option value="delivered">Delivered</option>
      <option value="cancelled">Cancelled</option>
    </select>
  );
};

export default OrderStatusUpdate;
