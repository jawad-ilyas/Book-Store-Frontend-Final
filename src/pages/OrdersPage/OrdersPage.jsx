import React from "react";
import OrdersList from "./OrdersList";
import { useGetOrdersByUserQuery } from "../../redux/order/orderApi";



const OrdersPage = () => {
  const { data } = useGetOrdersByUserQuery()
  const orders = data?.orders || []
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500 px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">
        My Orders
      </h1>

      <OrdersList orders={orders} />
    </div>
  );
};

export default OrdersPage;
