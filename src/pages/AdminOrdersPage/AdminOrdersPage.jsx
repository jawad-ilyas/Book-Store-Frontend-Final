import AdminLayout from "../../components/AdminLayout";
import OrdersTable from "../../components/orders/OrdersTable";
import { useGetAllOrdersQuery } from "../../redux/order/orderApi";


const AdminOrdersPage = () => {
  const { data } = useGetAllOrdersQuery();
  const { orders } = data || [];

  return (
    <AdminLayout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
          Orders Management
        </h1>

        <OrdersTable orders={orders} />
      </div>
    </AdminLayout>
  );
};

export default AdminOrdersPage;
