const statusColors = {
  processing: "bg-yellow-500",
  shipped: "bg-blue-500",
  delivered: "bg-green-600",
  cancelled: "bg-red-600",
};

const OrderStatusBadge = ({ status }) => {
  return (
    <span
      className={`px-3 py-1 text-sm text-white rounded-full ${statusColors[status] || "bg-gray-500"}`}
    >
      {status.toUpperCase()}
    </span>
  );
};

export default OrderStatusBadge;
