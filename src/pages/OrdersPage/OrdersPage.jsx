import React from "react";
import OrdersList from "./OrdersList";
import { useGetOrdersByUserQuery } from "../../redux/order/orderApi";

// Example mock data for orders
const mockOrders = [
  {
    id: "12345",
    date: "2025-11-10",
    items: [
      { id: 1, title: "Atomic Habits" },
      { id: 2, title: "Educated" },
    ],
    total: 30.49,
    status: "Delivered",
  },
  {
    id: "12346",
    date: "2025-11-12",
    items: [
      { id: 3, title: "The Subtle Art of Not Giving a F*ck" },
    ],
    total: 13.99,
    status: "Shipped",
  },
  {
    id: "12347",
    date: "2025-11-13",
    items: [
      { id: 1, title: "Atomic Habits" },
    ],
    total: 15.99,
    status: "Processing",
  },
];


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
