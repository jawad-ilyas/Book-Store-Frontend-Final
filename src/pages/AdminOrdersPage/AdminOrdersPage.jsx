import React, { useState } from "react";
import { orders as initialOrders } from "../../data";
import FilterOrders from "../../components/FilterOrders";
import OrdersTable from "../../components/OrdersTable";

const AdminOrdersPage = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [filter, setFilter] = useState("");

  const handleStatusChange = (id, newStatus) => {
    setOrders(orders.map((o) => (o.id === id ? { ...o, status: newStatus } : o)));
  };

  const filteredOrders = filter ? orders.filter((o) => o.status === filter) : orders;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500 px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Orders Management</h1>

      <FilterOrders filter={filter} setFilter={setFilter} />
      <OrdersTable orders={filteredOrders} onStatusChange={handleStatusChange} />
    </div>
  );
};

export default AdminOrdersPage;
