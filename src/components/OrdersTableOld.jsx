import OrderRow from "./OrderRow";

const OrdersTable = ({ orders }) => {
  return (
    <div className="overflow-x-auto rounded-2xl">
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left text-gray-900 dark:text-gray-100">
            <th className="px-4 py-3">Order ID</th>
            <th className="px-4 py-3">User</th>
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-3">Total</th>
            <th className="px-4 py-3">Status</th>
          </tr>
        </thead>
        <tbody className="space-y-2">
          {orders.map((order) => (
            <OrderRow key={order._id} order={order} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
