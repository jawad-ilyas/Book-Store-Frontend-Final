import OrderRow from "./OrderRow";
import EmptyState from "./EmptyState";
import { useUpdateOrderStatusMutation } from "../../redux/order/orderApi";

const OrdersTable = ({ orders }) => {
    const [updateOrderStatus] = useUpdateOrderStatusMutation();

    const handleStatusChange = async (id, orderStatus) => {
        console.log("order id you want to change | ,", id)
        console.log("order id you want to orderStatus | ,", orderStatus)
        try {
            await updateOrderStatus({ id, orderStatus }).unwrap();
        } catch (error) {
            console.error("Error updating order:", error);
        }
    };

    if (!orders || orders.length === 0) {
        return <EmptyState message="No orders found." />;
    }

    return (
        <div className="overflow-x-auto rounded-xl shadow-xl bg-white dark:bg-gray-800">
            <table className="w-full text-left">
                <thead className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                    <tr>
                        <th className="px-6 py-3">Order ID</th>
                        <th className="px-6 py-3">User</th>
                        <th className="px-6 py-3">Date</th>
                        <th className="px-6 py-3">Amount</th>
                        <th className="px-6 py-3">Update</th>
                        <th className="px-6 py-3">Status</th>
                        <th className="px-6 py-3">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {orders.map((order) => (
                        <OrderRow
                            key={order._id}
                            order={order}
                            onStatusChange={handleStatusChange}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrdersTable;
